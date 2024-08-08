import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import Forecast from './Components/Forecast/Forecast';
import Inputs from './Components/Inputs/Inputs';
import TemperatureAndDetails from './Components/TemperatureAndDetails/TemperatureAndDetails';
import TimeAndLocation from './Components/TimeAndLocation/TimeAndLocation';
import TopButtons from './Components/TopBottons/TopButtons';
import { getForecastData, getForecastDataByCoordinates, getWeatherData, getWeatherDataByCoordinates } from './services/weatherService';



function App() {
const [weather, setWeather] = useState(null);
const [forecast, setForecast] = useState(null);
const [city, setCity] = useState('');
const [unit, setUnit] = useState('metric');
const [location, setLocation] = useState(null);


useEffect(() => {
  // Automatically detect user location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  getCurrentLocation();
}, []);


useEffect(() => {
  const fetchData = async () => {
    try {
      if (city) {
        const weatherData = await getWeatherData(city, unit);
        console.log('Weather: ', weatherData)
        setWeather(weatherData);

        const forecastData = await getForecastData(city, unit);
        console.log('Forecast: ', forecastData);
        setForecast(forecastData);
      } else if (location) {
        const { lat, lon } = location;
        const weatherData = await getWeatherDataByCoordinates(lat, lon, unit);
        setWeather(weatherData);

        const forecastData = await getForecastDataByCoordinates(lat, lon, unit);
        setForecast(forecastData);
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, [city, location, unit]);

  return (
    
      <Container maxWidth="md" className="container">
      <TopButtons setCity={setCity} />
      <Inputs setCity={setCity} unit={unit} setUnit={setUnit} />
      {weather && <TimeAndLocation weather={weather} />}
      {weather && <TemperatureAndDetails weather={weather} unit={unit} />}
      {forecast && <Forecast title="hourly forecast" forecast={forecast} unit={unit} />}
      {forecast && <Forecast title="daily forecast" forecast={forecast} unit={unit} />}
    </Container>
  
  );
}

export default App;




// // src/App.js
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import TopButtons from './Components/TopBottons/TopButtons';
// import Inputs from './Components/Inputs/Inputs';
// import TimeAndLocation from './Components/TimeAndLocation/TimeAndLocation';
// import TemperatureAndDetails from './Components/TemperatureAndDetails/TemperatureAndDetails';
// import Forecast from './Components/Forecast/Forecast';
// import { Container } from '@mui/material';
// import { getWeatherData, getForecastData } from './services/weatherService';

// function App() {
//   const [weather, setWeather] = useState(null);
//   const [forecast, setForecast] = useState(null);
//   const [city, setCity] = useState('Johannesburg');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const weatherData = await getWeatherData(city);
//         console.log('Weather: ', weatherData)
//         setWeather(weatherData);
//         const forecastData = await getForecastData(city);
//         console.log('Forecast: ', forecastData);
//         setForecast(forecastData);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [city]);

//   return (
//     <Container maxWidth="md" className="container">
//       <TopButtons setCity={setCity} />
//       <Inputs setCity={setCity}  />
//       {weather && <TimeAndLocation weather={weather} />}
//       {weather && <TemperatureAndDetails weather={weather} />}
//       {forecast && <Forecast title="hourly forecast" forecast={forecast} />}
//       {forecast && <Forecast title="daily forecast" forecast={forecast} />}
//     </Container>
//   );
// }

// export default App;
