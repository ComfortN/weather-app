import React from 'react'
import './Inputs.css'
import { Box, TextField, IconButton, Button } from '@mui/material';
import { SearchOutlined, LocationOnOutlined } from '@mui/icons-material'

export default function Inputs() {
  return (
    <Box className="inputs">
      <Box className="input-container">
        <TextField
          className="input-field"
          fullWidth
          variant="outlined"
          placeholder="search for city...."
          InputProps={{ className: 'input-field' }}
        />
        <IconButton className="icon-button">
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
  )
}
