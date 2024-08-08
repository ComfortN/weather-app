import React from 'react';
import './TimeAndLocation.css';
import { Box, Typography } from '@mui/material';

export default function TimeAndLocation({ weather }) {
  const { name, sys, dt } = weather;
  const date = new Date(dt * 1000);

  return (
    <Box className="time-and-location" my={2}>
      <Box className="time-and-location-box" my={1}>
        <Typography className="time-text" variant="h6">
          {date.toDateString()} | Local time: {date.toLocaleTimeString()}
        </Typography>
      </Box>
      <Box className="time-and-location-box" my={1}>
        <Typography className="location-text" variant="h4">
          {name}, {sys.country}
        </Typography>
      </Box>
    </Box>
  );
}
