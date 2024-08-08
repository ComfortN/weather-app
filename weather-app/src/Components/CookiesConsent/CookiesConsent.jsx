import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import './CookiesConsent.css';

export default function CookiesConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
          setShowBanner(true);
        }
      }, []);
    
      const handleAcceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowBanner(false);
      };
    
      const handleRejectCookies = () => {
        localStorage.setItem('cookieConsent', 'false');
        setShowBanner(false);
      };

  return (
    showBanner && (
        <Box className="cookie-banner">
          <Box className="cookie-banner-content">
            <Typography variant="body2">
              We use cookies to improve your experience. By using our app, you consent to our use of cookies. 
              Read our Privacy Policy for more details.
            </Typography>
          </Box>
          <Box className="cookie-banner-buttons">
            <Button onClick={handleAcceptCookies} >
              Accept
            </Button>
            <Button onClick={handleRejectCookies} >
              Reject
            </Button>
          </Box>
        </Box>
    )
  )
}
