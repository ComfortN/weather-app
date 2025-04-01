// import { Container, Typography } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Forecast from './Components/Forecast/Forecast';
// import Inputs from './Components/Inputs/Inputs';
// import TemperatureAndDetails from './Components/TemperatureAndDetails/TemperatureAndDetails';
// import TimeAndLocation from './Components/TimeAndLocation/TimeAndLocation';
// import TopButtons from './Components/TopBottons/TopButtons';
// import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
// import CookiesConsent from './Components/CookiesConsent/CookiesConsent';
// import { getForecastData, getForecastDataByCoordinates, getWeatherData, getWeatherDataByCoordinates } from './services/weatherService';


// const getBackgroundImage = (description) => {
//   switch (description.toLowerCase()) {
//     case 'clear sky':
//     case 'sunny':
//       return '/assets/images/sunny.jpeg';
//     case 'few clouds':
//     case 'scattered clouds':
//     case 'broken clouds':
//     case 'overcast clouds':
//       return '/assets/images/cloudy.jpeg';
//     case 'shower rain':
//     case 'light rain':
//     case 'rain':
//       return '/assets/images/rainy.jpeg';
//     case 'thunderstorm':
//       return '/assets/images/rainyV.jpeg';
//     case 'snow':
//       return '/assets/images/snow.jpeg';
//     default:
//       return '/assets/images/default.jpeg';
//   }
// };

// function App() {
//   const [weather, setWeather] = useState(null);
//   const [forecast, setForecast] = useState(null);
//   const [city, setCity] = useState('');
//   const [unit, setUnit] = useState('metric');
//   const [location, setLocation] = useState(null);
//   const [isOffline, setIsOffline] = useState(!navigator.onLine);
//   const [termsAccepted, setTermsAccepted] = useState(localStorage.getItem('termsAccepted') === 'true');
//   const [backgroundImage, setBackgroundImage] = useState('/assets/images/default.jpg');

//   useEffect(() => {
//     const handleOnlineStatus = () => setIsOffline(!navigator.onLine);
//     window.addEventListener('online', handleOnlineStatus);
//     window.addEventListener('offline', handleOnlineStatus);

//     return () => {
//       window.removeEventListener('online', handleOnlineStatus);
//       window.removeEventListener('offline', handleOnlineStatus);
//     };
//   }, []);

//   useEffect(() => {
//     const requestNotificationPermission = async () => {
//       if ('Notification' in window) {
//         const permission = await Notification.requestPermission();
//         if (permission !== 'granted') {
//           console.log('Notification permission denied');
//         }
//       }
//     };

//     requestNotificationPermission();
//   }, []);

//   useEffect(() => {
//     const getCurrentLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             setLocation({
//               lat: position.coords.latitude,
//               lon: position.coords.longitude
//             });
//           },
//           (error) => {
//             console.error("Error getting location", error);
//           }
//         );
//       } else {
//         console.log("Geolocation is not supported by this browser.");
//       }
//     };

//     getCurrentLocation();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!termsAccepted) return;

//       if (navigator.onLine) {
//         try {
//           let weatherData;
//           let forecastData;

//           if (city) {
//             weatherData = await getWeatherData(city, unit);
//             forecastData = await getForecastData(city, unit);
//           } else if (location) {
//             const { lat, lon } = location;
//             weatherData = await getWeatherDataByCoordinates(lat, lon, unit);
//             forecastData = await getForecastDataByCoordinates(lat, lon, unit);
//           }

//           if (weatherData && forecastData) {
//             setWeather(weatherData);
//             setForecast(forecastData);

//             localStorage.setItem('weather', JSON.stringify(weatherData));
//             localStorage.setItem('forecast', JSON.stringify(forecastData));

//             checkForSevereWeatherAlerts(weatherData);

//             // const description = weatherData.weather[0].description;
//             // setBackgroundImage(getBackgroundImage(description));
//             const description = weatherData.weather[0].description;
//             document.body.style.backgroundImage = `url(${getBackgroundImage(description)})`;
//           }
//         } catch (error) {
//           console.error(error);
//         }
//       } else {
//         const cachedWeather = localStorage.getItem('weather');
//         const cachedForecast = localStorage.getItem('forecast');

//         if (cachedWeather) {
//           setWeather(JSON.parse(cachedWeather));
//         }

//         if (cachedForecast) {
//           setForecast(JSON.parse(cachedForecast));
//         }
//       }
//     };

//     fetchData();
//   }, [city, location, unit, termsAccepted]);

//   const checkForSevereWeatherAlerts = (weatherData) => {
//     if (!('Notification' in window)) {
//       console.log('This browser does not support notifications.');
//       return;
//     }

//     if (weatherData.alerts && weatherData.alerts.length > 0) {
//       weatherData.alerts.forEach(alert => {
//         new Notification('Severe Weather Alert', {
//           body: `${alert.event}: ${alert.description}`,
//           icon: 'path/to/weather-icon.png', // Optional: add an icon for the notification
//         });
//       });
//     }
//   };

//   return (
//     <Container maxWidth="md" className="container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       {!termsAccepted && (
//         <TermsAndConditions
//           open={!termsAccepted}
//           onClose={() => setTermsAccepted(false)}
//           onAccept={() => {
//             localStorage.setItem('termsAccepted', 'true');
//             setTermsAccepted(true);
//           }}
//         />
//       )}
//       {isOffline && (
//         <Typography variant="body2" color="error" align="center">
//           You are offline.
//         </Typography>
//       )}
//       <TopButtons setCity={setCity} />
//       <Inputs setCity={setCity} unit={unit} setUnit={setUnit} setLocation={setLocation} />
//       {weather && <TimeAndLocation weather={weather} />}
//       {weather && <TemperatureAndDetails weather={weather} unit={unit} />}
//       {forecast && <Forecast title="hourly forecast" forecast={forecast} unit={unit} />}
//       {forecast && <Forecast title="daily forecast" forecast={forecast} unit={unit} />}
//       <CookiesConsent />
//     </Container>
//   );
// }

// export default App;





// // // src/App.js
// // import React, { useEffect, useState } from 'react';
// // import './App.css';
// // import TopButtons from './Components/TopBottons/TopButtons';
// // import Inputs from './Components/Inputs/Inputs';
// // import TimeAndLocation from './Components/TimeAndLocation/TimeAndLocation';
// // import TemperatureAndDetails from './Components/TemperatureAndDetails/TemperatureAndDetails';
// // import Forecast from './Components/Forecast/Forecast';
// // import { Container } from '@mui/material';
// // import { getWeatherData, getForecastData } from './services/weatherService';

// // function App() {
// //   const [weather, setWeather] = useState(null);
// //   const [forecast, setForecast] = useState(null);
// //   const [city, setCity] = useState('Johannesburg');

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const weatherData = await getWeatherData(city);
// //         console.log('Weather: ', weatherData)
// //         setWeather(weatherData);
// //         const forecastData = await getForecastData(city);
// //         console.log('Forecast: ', forecastData);
// //         setForecast(forecastData);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchData();
// //   }, [city]);

// //   return (
// //     <Container maxWidth="md" className="container">
// //       <TopButtons setCity={setCity} />
// //       <Inputs setCity={setCity}  />
// //       {weather && <TimeAndLocation weather={weather} />}
// //       {weather && <TemperatureAndDetails weather={weather} />}
// //       {forecast && <Forecast title="hourly forecast" forecast={forecast} />}
// //       {forecast && <Forecast title="daily forecast" forecast={forecast} />}
// //     </Container>
// //   );
// // }

// // export default App;



import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import Forecast from './Components/Forecast/Forecast';
import Inputs from './Components/Inputs/Inputs';
import TemperatureAndDetails from './Components/TemperatureAndDetails/TemperatureAndDetails';
import TimeAndLocation from './Components/TimeAndLocation/TimeAndLocation';
import TopButtons from './Components/TopBottons/TopButtons';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import CookiesConsent from './Components/CookiesConsent/CookiesConsent';
import { getForecastData, getForecastDataByCoordinates, getWeatherData, getWeatherDataByCoordinates } from './services/weatherService';

const DEFAULT_CITY = 'johannesburg';

const getBackgroundImage = (description) => {
  switch (description.toLowerCase()) {
    case 'clear sky':
    case 'sunny':
      return '/assets/images/sunny.jpeg';
    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
    case 'overcast clouds':
      return '/assets/images/cloudy.jpeg';
    case 'shower rain':
    case 'light rain':
    case 'rain':
      return '/assets/images/rainy.jpeg';
    case 'thunderstorm':
      return '/assets/images/rainyV.jpeg';
    case 'snow':
      return '/assets/images/snow.jpeg';
    default:
      return '/assets/images/default.jpeg';
  }
};

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('metric');
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [termsAccepted, setTermsAccepted] = useState(localStorage.getItem('termsAccepted') === 'true');
  const [backgroundImage, setBackgroundImage] = useState('/assets/images/default.jpg');
  const [locationPermissionDenied, setLocationPermissionDenied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userSelectedCity, setUserSelectedCity] = useState(false);

  useEffect(() => {
    const handleOnlineStatus = () => setIsOffline(!navigator.onLine);
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  useEffect(() => {
    const requestNotificationPermission = async () => {
      if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') {
          console.log('Notification permission denied');
        }
      }
    };

    requestNotificationPermission();
  }, []);

  // Custom city setter that tracks user selection
  const handleCityChange = (newCity) => {
    setCity(newCity);
    setUserSelectedCity(true);
  };

  // Initial app load effect that handles location and initial weather fetch
  useEffect(() => {
    if (!termsAccepted) {
      setIsLoading(false);
      return;
    }

    async function initializeApp() {
      setIsLoading(true);
      
      try {
        // Try to get location
        if (navigator.geolocation && !userSelectedCity) {
          try {
            const position = await new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject, {
                timeout: 5000,
                maximumAge: 0
              });
            });
            
            // Location permission granted - fetch weather by coordinates
            const { latitude, longitude } = position.coords;
            console.log("Location granted:", latitude, longitude);
            
            const weatherData = await getWeatherDataByCoordinates(latitude, longitude, unit);
            const forecastData = await getForecastDataByCoordinates(latitude, longitude, unit);
            
            setWeather(weatherData);
            setForecast(forecastData);
            setLocationPermissionDenied(false);
            
            // Cache for offline use
            localStorage.setItem('weather', JSON.stringify(weatherData));
            localStorage.setItem('forecast', JSON.stringify(forecastData));
            
            // Update background based on weather
            if (weatherData?.weather?.[0]?.description) {
              document.body.style.backgroundImage = `url(${getBackgroundImage(weatherData.weather[0].description)})`;
            }
            
            checkForSevereWeatherAlerts(weatherData);
          } catch (error) {
            // Location denied or error - fall back to default city
            console.error("Geolocation error:", error);
            setLocationPermissionDenied(true);
            
            // Fetch default city weather
            const weatherData = await getWeatherData(DEFAULT_CITY, unit);
            const forecastData = await getForecastData(DEFAULT_CITY, unit);
            
            setWeather(weatherData);
            setForecast(forecastData);
            setCity(DEFAULT_CITY);
            
            // Cache for offline use
            localStorage.setItem('weather', JSON.stringify(weatherData));
            localStorage.setItem('forecast', JSON.stringify(forecastData));
            
            // Update background based on weather
            if (weatherData?.weather?.[0]?.description) {
              document.body.style.backgroundImage = `url(${getBackgroundImage(weatherData.weather[0].description)})`;
            }
            
            checkForSevereWeatherAlerts(weatherData);
          }
        } else if (!navigator.geolocation) {
          // Browser doesn't support geolocation
          setLocationPermissionDenied(true);
          
          // Fetch default city weather
          const weatherData = await getWeatherData(DEFAULT_CITY, unit);
          const forecastData = await getForecastData(DEFAULT_CITY, unit);
          
          setWeather(weatherData);
          setForecast(forecastData);
          setCity(DEFAULT_CITY);
          
          // Cache for offline use
          localStorage.setItem('weather', JSON.stringify(weatherData));
          localStorage.setItem('forecast', JSON.stringify(forecastData));
          
          // Update background based on weather
          if (weatherData?.weather?.[0]?.description) {
            document.body.style.backgroundImage = `url(${getBackgroundImage(weatherData.weather[0].description)})`;
          }
          
          checkForSevereWeatherAlerts(weatherData);
        }
      } catch (error) {
        console.error("Error during app initialization:", error);
        
        // Try to use cached data if available
        const cachedWeather = localStorage.getItem('weather');
        const cachedForecast = localStorage.getItem('forecast');
        
        if (cachedWeather) setWeather(JSON.parse(cachedWeather));
        if (cachedForecast) setForecast(JSON.parse(cachedForecast));
      } finally {
        setIsLoading(false);
      }
    }
    
    initializeApp();
  }, [termsAccepted]);

  // Handle city/unit changes
  useEffect(() => {
    if (!termsAccepted || !userSelectedCity || !city) return;
    
    async function fetchCityWeather() {
      setIsLoading(true);
      
      try {
        const weatherData = await getWeatherData(city, unit);
        const forecastData = await getForecastData(city, unit);
        
        setWeather(weatherData);
        setForecast(forecastData);
        
        // Cache for offline use
        localStorage.setItem('weather', JSON.stringify(weatherData));
        localStorage.setItem('forecast', JSON.stringify(forecastData));
        
        // Update background based on weather
        if (weatherData?.weather?.[0]?.description) {
          document.body.style.backgroundImage = `url(${getBackgroundImage(weatherData.weather[0].description)})`;
        }
        
        checkForSevereWeatherAlerts(weatherData);
      } catch (error) {
        console.error("Error fetching city weather:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchCityWeather();
  }, [city, unit, userSelectedCity, termsAccepted]);

  // Handle unit changes when using geolocation
  useEffect(() => {
    if (!termsAccepted || userSelectedCity || isLoading || locationPermissionDenied) return;
    
    async function updateUnitForGeolocation() {
      if (!weather?.coord?.lat || !weather?.coord?.lon) return;
      
      try {
        const { lat, lon } = weather.coord;
        const weatherData = await getWeatherDataByCoordinates(lat, lon, unit);
        const forecastData = await getForecastDataByCoordinates(lat, lon, unit);
        
        setWeather(weatherData);
        setForecast(forecastData);
        
        // Cache for offline use
        localStorage.setItem('weather', JSON.stringify(weatherData));
        localStorage.setItem('forecast', JSON.stringify(forecastData));
      } catch (error) {
        console.error("Error updating unit for geolocation:", error);
      }
    }
    
    updateUnitForGeolocation();
  }, [unit, userSelectedCity, termsAccepted, isLoading, locationPermissionDenied, weather]);

  const checkForSevereWeatherAlerts = (weatherData) => {
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications.');
      return;
    }

    if (weatherData?.alerts?.length > 0) {
      weatherData.alerts.forEach(alert => {
        new Notification('Severe Weather Alert', {
          body: `${alert.event}: ${alert.description}`,
          icon: 'path/to/weather-icon.png',
        });
      });
    }
  };

  return (
    <Container maxWidth="md" className="container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {!termsAccepted && (
        <TermsAndConditions
          open={!termsAccepted}
          onClose={() => setTermsAccepted(false)}
          onAccept={() => {
            localStorage.setItem('termsAccepted', 'true');
            setTermsAccepted(true);
          }}
        />
      )}
      {isOffline && (
        <Typography variant="body2" color="error" align="center" sx={{ marginTop: 2, padding: 1, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 1 }}>
          You are offline. Showing cached weather data.
        </Typography>
      )}
      {locationPermissionDenied && !userSelectedCity && (
        <Typography variant="body2" color="warning.main" align="center" sx={{ marginTop: 2, padding: 1, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 1 }}>
          Location permission denied. Showing weather for {city || DEFAULT_CITY}.
        </Typography>
      )}
      <TopButtons setCity={handleCityChange} />
      <Inputs setCity={handleCityChange} unit={unit} setUnit={setUnit} />
      
      {isLoading ? (
        <Typography variant="h6" align="center" sx={{ margin: '2rem 0' }}>
          Loading weather data...
        </Typography>
      ) : (
        <>
          {weather && <TimeAndLocation weather={weather} />}
          {weather && <TemperatureAndDetails weather={weather} unit={unit} />}
          {forecast && <Forecast title="hourly forecast" forecast={forecast} unit={unit} />}
          {forecast && <Forecast title="daily forecast" forecast={forecast} unit={unit} />}
        </>
      )}
      <CookiesConsent />
    </Container>
  );
}

export default App;