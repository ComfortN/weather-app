import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, FormControlLabel, Checkbox } from '@mui/material';


export default function TermsAndConditions({  open, onClose, onAccept }) {
    
    const [checked, setChecked] = useState(false);

  const handleAccept = () => {

    if (checked) {
        
      localStorage.setItem('termsAccepted', 'true');
      onAccept();
    } else {
      alert("You must accept the terms and conditions before proceeding.");
    }
  };

  if (!open) return null;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Typography variant="h6">Terms and Conditions</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1">
        
          <p>1. Introduction</p>

          <p>Welcome to Weather App. 
            These Terms and Conditions ("Terms") govern your use of our App and services. 
            By accessing or using the App, you agree to be bound by these Terms.</p>

          <p>2. Use of the App </p>

          <p>Eligibility: You must be at least 13 years old to use this App. 
          By using the App, you represent and warrant that you meet this requirement.

          Account Security: You are responsible for maintaining the confidentiality of your account information 
          and for all activities that occur under your account. 
          Notify us immediately if you suspect any unauthorized use of your account.
          </p>

          <p>3. Content</p>

          <p>Accuracy of Information: The weather information provided by the App is based on data obtained from third-party sources. 
            We strive to provide accurate and up-to-date information, 
            but we do not guarantee its accuracy or completeness.

          Usage of Content: You may use the information from the App for personal, 
          non-commercial purposes only. Any other use, including but not limited to copying, 
          distributing, or modifying the content, requires prior written consent from us.</p>

          <p>4. Privacy and Data Protection</p>

            <p>Data Collection: We may collect personal information such as your location to provide personalized weather forecasts.
             Our use of your data is governed by our Privacy Policy.

          Cookies: We use cookies and similar technologies to enhance your experience. 
          By using the App, you consent to our use of cookies as described in our Cookie Policy.</p>
          
          
          <p>5. Limitation of Liability</p>

          <p>Disclaimer: The App is provided "as is" without any warranties, 
            express or implied. We do not warrant that the App will be uninterrupted or error-free.

          Limitation: In no event shall we be liable for any indirect, incidental, special,
           or consequential damages arising out of or in connection with your use of the App.</p>

          <p>6. Changes to Terms</p>

          <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. 
            Your continued use of the App after any changes constitutes your acceptance of the new Terms.</p>
          
          
          </Typography>
          <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              color="primary"
            />
          }
          label="I accept the terms and conditions"
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
          <Button onClick={handleAccept} color="primary">
          Accept
        </Button>
        </DialogActions>
      </Dialog>
  )
}
