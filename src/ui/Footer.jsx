import React from 'react';
import { Box, Container, Paper, IconButton } from '@mui/material';
import SubscribeForm from '../components/SubscribeForm'; 
import FavoriteIcon from '@mui/icons-material/Favorite'; 

const Footer = () => {
  return (
    <Box
      component={Paper}
      sx={{
        height: 200,
        position: 'relative', // For the background image
        mt: 10,
        width: '100%',
        background: `url('src/assets/footerbg.png')`,
        backgroundSize: 'cover',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >

        <SubscribeForm color="white"/>
      </Container>
    </Box>
  );
};

export default Footer;
