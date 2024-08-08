import React, { useEffect, useState } from 'react';
import './App.css';
import TopButtons from './Components/TopBottons/TopButtons';
import Inputs from './Components/Inputs/Inputs';
import TimeAndLocation from './Components/TimeAndLocation/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails/TemperatureAndDetails';
import Forecast from './Components/Forecast/Forecast';
import { Container } from '@mui/material';
import { getWeatherData, getForecastData } from './services/weatherService';



function App() {
const [weather, setWeather] = useState(null);
const [forecast, setForecast] = useState(null);
const [city, setCity] = useState('Johannesburg');

useEffect(() => {
  const fetchData = async () => {
    try {
      const weatherData = await getWeatherData(city);
      console.log('Weather: ', weatherData)
      setWeather(weatherData);
      const forecastData = await getForecastData(city);
      console.log('Forecast: ', forecastData);
      setForecast(forecastData);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, [city]);

  return (
    
      <Container maxWidth="md" className="container">
      <TopButtons setCity={setCity} />
      <Inputs setCity={setCity}  />
      {weather && <TimeAndLocation weather={weather} />}
      {weather && <TemperatureAndDetails weather={weather} />}
      {forecast && <Forecast title="hourly forecast" forecast={forecast} />}
      {forecast && <Forecast title="daily forecast" forecast={forecast} />}
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
