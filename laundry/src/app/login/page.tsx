'use client';

import React from 'react';
// import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import '@fontsource/poppins';

const Login: React.FC = () => {
  const [loginDetails, setLoginDetails] = React.useState<{
    username: string;
    password: string;
  }>({ username: '', password: '' });

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(loginDetails);

    localStorage.setItem('username', loginDetails.username);
    localStorage.setItem('token', 'abc');
  };
  return (
    <Container>
      <Box
        sx={{
          marginTop: '6vh',
          display: 'flex',
          width: '80vw',
          height: '90vh',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: {
              sm: 200,
              md: 500,
              lg: 700,
              xl: 700,
            },
            border: '1',
            display: 'flex',
          }}
        >
          <Typography
            variant="h1"
            component="div"
            sx={{
              color: 'blue',
              fontFamily: 'poppins, sans-serif',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 700,
            }}
          >
            Rinse
          </Typography>
          <Typography
            variant="h1"
            component="div"
            sx={{
              color: 'orange',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 700,
            }}
          >
            able
          </Typography>
        </Box>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            width: {
              sm: 200,
              md: 500,
              lg: 300,
              xl: 300,
            },
            border: '1px solid black',
            borderRadius: 5,
            maxWidth: 'sm',
            padding: 5,
          }}
          onSubmit={handleLogin}
        >
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{ textAlign: 'center' }}
          >
            Login
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            value={loginDetails.username}
            onChange={(event) =>
              setLoginDetails({ ...loginDetails, username: event.target.value })
            }
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={loginDetails.password}
            onChange={(event) =>
              setLoginDetails({ ...loginDetails, password: event.target.value })
            }
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ margin: '24px 0 16px', bgcolor: 'blue' }}
          >
            Sign In
          </Button>
          <Box display="flex" justifyContent="center">
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default Login;
