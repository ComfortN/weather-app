import React from 'react'
import './Forecast.css';
import { Box, Typography, Divider, Grid } from '@mui/material';

export default function Forecast({title}) {
    const forecastData = [
        { time: '04:30 PM', temp: 22, icon: '01d' },
        { time: '05:30 PM', temp: 23, icon: '02d' },
        { time: '06:30 PM', temp: 24, icon: '03d' },
        { time: '07:30 PM', temp: 22, icon: '04d' },
        { time: '08:30 PM', temp: 21, icon: '01n' }
      ];
    
      return (
        <Box className="forecast-container">
          <Box className="forecast-header">
            <Typography variant="h6" className="forecast-title">
              {title}
            </Typography>
          </Box>
          <Divider className="forecast-divider" />
          <Grid container justifyContent="space-between" className="forecast-grid">
            {forecastData.map((data, index) => (
              <Grid item key={index} className="forecast-item">
                <Typography variant="body2" className="forecast-time">
                  {data.time}
                </Typography>
                <img
                  src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
                  alt=""
                  className="forecast-icon"
                />
                <Typography variant="body1" className="forecast-temp">
                  {data.temp}°
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
  )
}
