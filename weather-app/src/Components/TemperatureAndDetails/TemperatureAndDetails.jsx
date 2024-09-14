import React from 'react';
import './TemperatureAndDetails.css';
import { Box, Typography } from '@mui/material';
import { WbSunnyOutlined, WbTwilightOutlined, ThermostatOutlined, WaterDropOutlined, AirOutlined } from '@mui/icons-material';

const convertToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const convertToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

export default function TemperatureAndDetails({ weather, unit }) {
  const { main, weather: weatherDetails, wind, sys } = weather;
  const { temp, feels_like, humidity } = main;
  const { description, icon } = weatherDetails[0];
  const { speed } = wind;
  const sunrise = new Date(sys.sunrise * 1000);
  const sunset = new Date(sys.sunset * 1000);

  const tempUnit = unit === 'metric' ? '°C' : '°F';

  const temperature = unit === 'metric' ? temp : convertToFahrenheit(temp);
  const feelsLike = unit === 'metric' ? feels_like : convertToFahrenheit(feels_like);
  const high = unit === 'metric' ? main.temp_max : convertToFahrenheit(main.temp_max);
  const low = unit === 'metric' ? main.temp_min : convertToFahrenheit(main.temp_min);

  return (
    <Box className="temperature-details" my={2}>
      <Box className="status" py={2}>
        <Typography variant="h6">
          {description}
        </Typography>
      </Box>
      <Box className="details-container">
        <Box>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className="icon-img" />
        </Box>
        <Box>
          <Typography className="temperature" variant="h1">{Math.round(temperature)}{tempUnit}</Typography>
        </Box>
        <Box className="details-boxes">
          <Box className="details-box">
            <ThermostatOutlined size={18} className="icon" />
            <Typography variant="body1">Real feel: {Math.round(feelsLike)}{tempUnit}</Typography>
          </Box>
          <Box className="details-box">
            <WaterDropOutlined size={18} className="icon" />
            <Typography variant="body1">Humidity: {humidity}%</Typography>
          </Box>
          <Box className="details-box">
            <AirOutlined size={18} className="icon" />
            <Typography variant="body1">Wind: {speed} km/h</Typography>
          </Box>
        </Box>
      </Box>
      <Box className="rise-set-container">
        <Box className="item">
          <WbSunnyOutlined />
          <Typography variant="body2">Rise: {sunrise.toLocaleTimeString()}</Typography>
        </Box>
        <Box className="separator">
          <Typography variant="body2">|</Typography>
        </Box>
        <Box className="item">
          <WbTwilightOutlined />
          <Typography variant="body2">Set: {sunset.toLocaleTimeString()}</Typography>
        </Box>
        <Box className="separator">
          <Typography variant="body2">|</Typography>
        </Box>
        <Box className="item">
          <WbSunnyOutlined />
          <Typography variant="body2">High: {Math.round(high)}{tempUnit}</Typography>
        </Box>
        <Box className="separator">
          <Typography variant="body2">|</Typography>
        </Box>
        <Box className="item">
          <WbSunnyOutlined />
          <Typography variant="body2">Low: {Math.round(low)}{tempUnit}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
