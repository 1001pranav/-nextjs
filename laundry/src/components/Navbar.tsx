import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: 'white', boxShadow: 'none' }}>
      <Toolbar>
        <Typography
          sx={{
            fontFamily: 'poppins, sans-serif',
            color: 'blue',
            fontSize: '2rem',
          }}
        >
          Rinse
        </Typography>
        <Typography
          sx={{
            fontFamily: 'poppins, sans-serif',
            color: 'orange',
            fontSize: '2rem',
          }}
        >
          able
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            color: 'black',
          }}
        >
          <Button href="/">Home</Button>
          <Button href="/services">Our Services</Button>
          <Button href="/about">About Us</Button>
          <Button href="/contact">Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
