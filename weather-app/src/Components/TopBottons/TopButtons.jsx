import React, { useState } from 'react'
import './TopButtons.css'
import { Box, Button,  TextField, IconButton  } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';

export default function TopButtons({ setCity }) {
    const [cities, setCities] = useState([]);

      const [newCity, setNewCity] = useState('');

  const addCity = () => {
    if (newCity.trim()) {
      setCities([...cities, { id: cities.length + 1, title: newCity }]);
      setNewCity(''); // clear input after adding
    }
  };

  return (
     <Box className="top-buttons">
      {cities.map((city) => (
        <Button key={city.id} onClick={() => setCity(city.title)}>
          {city.title}
        </Button>
      ))}

<Box className="add-city">
        <TextField className='addCity'
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
          placeholder="Add city"
        />
        <IconButton className='adding-city' onClick={addCity}>
          <AddCircleOutline />
        </IconButton>
      </Box>
    </Box>
  )
}

