import React from 'react';
import './Forecast.css';
import { Box, Typography, Divider, Grid } from '@mui/material';

const convertToFahrenheit = (celsius) => (celsius * 9/5) + 32;

export default function Forecast({ title, forecast,unit }) {
  // is forecast  hourly or daily
  const isHourly = title.includes('hourly');
  const isDaily = title.includes('daily');

  // Extract forecast items based on the type
  let forecastItems = [];
  if (isHourly) {
    forecastItems = forecast.list.slice(0, 5); // Show first 5 hourly forecasts
  } else if (isDaily) {
    forecastItems = forecast.list
      .filter((_, index) => index % 8 === 0) // Pick one entry per day
      .slice(0, 5); // Show first 5 days
  }

  const tempUnit = unit === 'metric' ? '°C' : '°F';
  
  return (
    <Box className="forecast-container">
      <Box className="forecast-header">
        <Typography variant="h6" className="forecast-title">
          {title}
        </Typography>
      </Box>
      <Divider className="forecast-divider" />
      <Grid container justifyContent="space-between" className="forecast-grid">
        {forecastItems.map((data, index) => {
          const temp = unit === 'metric' ? data.main.temp : convertToFahrenheit(data.main.temp);
          return (
            <Grid item key={index} className="forecast-item">
              <Typography variant="body2" className="forecast-time">
                {isHourly
                  ? new Date(data.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  : new Date(data.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}
              </Typography>
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt=""
                className="forecast-icon"
              />
              <Typography variant="body1" className="forecast-temp">
                {Math.round(temp)}{tempUnit}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}


