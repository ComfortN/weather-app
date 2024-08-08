import React, { useState } from 'react';
import './Inputs.css';
import { Box, TextField, IconButton, Button } from '@mui/material';
import { SearchOutlined, LocationOnOutlined } from '@mui/icons-material';

export default function Inputs({ setCity, unit, setUnit, setLocation }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setCity(input);
  };


  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };


  const handleUseCurrentLocation = () => {
    // Call function to set location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;

            console.log(`Current location: Latitude: ${latitude}, Longitude: ${longitude}`);
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


  return (
    <Box className="inputs">
      <Box className="input-container">
        <TextField
          className="input-field"
          fullWidth
          variant="outlined"
          placeholder="search for city...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          InputProps={{ className: 'input-field' }}
        />
        <IconButton className="icon-button" onClick={handleSearch}>
          <SearchOutlined />
        </IconButton>
        <IconButton className="icon-button" onClick={handleUseCurrentLocation}>
          <LocationOnOutlined />
        </IconButton>
      </Box>
      <Box className="unit-buttons">
        <Button onClick={() => handleUnitChange('metric')} className={unit === 'metric' ? 'active' : ''}>°C</Button>
        |
        <Button onClick={() => handleUnitChange('imperial')} className={unit === 'imperial' ? 'active' : ''}>°F</Button>
      </Box>
    </Box>
  );
}
