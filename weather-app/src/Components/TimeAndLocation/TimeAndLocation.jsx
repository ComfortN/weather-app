import React from 'react';
import './TimeAndLocation.css';
import { Box, Typography } from '@mui/material';

export default function TimeAndLocation() {
  return (
    <Box className="time-and-location" my={2}>
      <Box className="time-and-location-box" my={1}>
        <Typography className="time-text" variant="h6" >
          Wednesday, 31 May 2022 | Local time: 12:21 PM
        </Typography>
      </Box>
      <Box className="time-and-location-box" my={1}>
        <Typography className="location-text" variant="h4" >
          Johannesburg, JHB
        </Typography>
      </Box>
    </Box>
  )
}
