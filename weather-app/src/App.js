import React from 'react';
import './App.css';
import TopButtons from './Components/TopBottons/TopButtons';
import Inputs from './Components/Inputs/Inputs';
import TimeAndLocation from './Components/TimeAndLocation/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails/TemperatureAndDetails';
import { Container } from '@mui/material';

function App() {
  return (
    
      <Container maxWidth="md" className="container">
      <TopButtons />
       <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      {/*<Forecast title="hourly forecast" />
      <Forecast title="daily forecast" /> */}
    </Container>
  
  );
}

export default App;
