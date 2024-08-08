import React from 'react';
import './App.css';
import TopButtons from './Components/TopBottons/TopButtons';
import Inputs from './Components/Inputs/Inputs';
import TimeAndLocation from './Components/TimeAndLocation/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails/TemperatureAndDetails';
import Forecast from './Components/Forecast/Forecast';
import { Container } from '@mui/material';
import getFormattedWeatherData from './services/weatherService'

function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: 'johannesburg', units: 'metric' });
    console.log(data);
  };

  fetchWeather();
  return (
    
      <Container maxWidth="md" className="container">
      <TopButtons />
       <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </Container>
  
  );
}

export default App;
