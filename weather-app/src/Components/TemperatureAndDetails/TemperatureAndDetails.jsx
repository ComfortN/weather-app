import React from 'react'
import './TemperatureAndDetails.css';
import { Box, Typography } from '@mui/material';
import {WbSunnyOutlined, WbTwilightOutlined,ThermostatOutlined, WaterDropOutlined, AirOutlined } from '@mui/icons-material';

export default function TemperatureAndDetails() {
  return (
    <Box className="temperature-details" my={2}>
      <Box className="status" py={2}>
        <Typography variant="h6">
          Cloudy
        </Typography>
      </Box>
      
      <Box className="details-container">
        <Box>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className="icon-img" />
        </Box>
        <Box>
          <Typography className="temperature" variant="h1">34°</Typography>
        </Box>
        <Box>
          <Box className="details-box">
            <ThermostatOutlined size={18} className="icon" />
            <Typography variant="body1">Real feel: 32°</Typography>
          </Box>
          <Box className="details-box">
            <WaterDropOutlined size={18} className="icon" />
            <Typography variant="body1">Humidity: 43%</Typography>
          </Box>
          <Box className="details-box">
            <AirOutlined size={18} className="icon" />
            <Typography variant="body1">Wind: 3 km/h</Typography>
          </Box>
        </Box>
      </Box>
      <Box className="rise-set-container">
        <Box className="item">
          <WbSunnyOutlined />
          <Typography variant="body2">Rise: 06:45 AM</Typography>
        </Box>
        <Box className="separator">
          <Typography variant="body2">|</Typography>
        </Box>
        <Box className="item">
          <WbTwilightOutlined />
          <Typography variant="body2">Set: 06:45 PM</Typography>
        </Box>
        <Box className="separator">
          <Typography variant="body2">|</Typography>
        </Box>
        <Box className="item">
          <WbSunnyOutlined />
          <Typography variant="body2">High: 30°</Typography>
        </Box>
        <Box className="separator">
          <Typography variant="body2">|</Typography>
        </Box>
        <Box className="item">
          <WbSunnyOutlined />
          <Typography variant="body2">Low: 09°</Typography>
        </Box>
      </Box>
    </Box>
  )
}
