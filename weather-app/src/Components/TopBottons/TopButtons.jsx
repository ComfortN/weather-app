import React from 'react'
import './TopButtons.css'
import { Box, Button } from '@mui/material';

export default function TopButtons({ setCity }) {
    const cities = [
        { id: 1, title: 'Johannesburg' },
        { id: 2, title: 'Pretoria' },
        { id: 3, title: 'Cape town' },
        { id: 4, title: 'Germiston' },
        { id: 5, title: 'Soweto' },
      ];

  return (
     <Box className="top-buttons">
      {cities.map((city) => (
        <Button key={city.id} onClick={() => setCity(city.title)}>
          {city.title}
        </Button>
      ))}
    </Box>
  )
}

