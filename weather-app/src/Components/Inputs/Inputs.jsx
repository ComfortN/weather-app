import React, { useState } from 'react';
import './Inputs.css';
import { Box, TextField, IconButton, Button } from '@mui/material';
import { SearchOutlined, LocationOnOutlined } from '@mui/icons-material';

export default function Inputs({ setCity }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setCity(input);
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
        <IconButton className="icon-button">
          <LocationOnOutlined />
        </IconButton>
      </Box>
      <Box className="unit-buttons">
        <Button>°C</Button>
        |
        <Button>°F</Button>
      </Box>
    </Box>
  );
}
