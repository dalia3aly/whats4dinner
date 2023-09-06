import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import DefaultTheme from '../ui/DefaultTheme';
import { subscribeFormInput } from '../hooks/subscribeFormInput';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const SubscribeForm = () => {
  const [emailProps, resetEmail, validEmail] = subscribeFormInput('', 'email');
  const [subscribed, setSubscribed] = useState(false);     // New state to handle subscription status

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail()) {
      console.log('Subscribing with email:', emailProps.value);
      resetEmail();
      setSubscribed(true);    // Mark as subscribed
    }
  };

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Container component="main" maxWidth="xs">
        <h2>Subscribe for Weekly Inspirations</h2>
        {subscribed ? (         // Check if works
          <p>Thank you for subscribing!</p> 
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              {...emailProps}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!validEmail()}
            >
              Subscribe
            </Button>
          </form>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default SubscribeForm;
