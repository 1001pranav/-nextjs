import React from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
} from '@mui/material';

const LoginPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box display="flex" height="100vh">
        <Box
          flex={7}
          bgcolor="#f5f5f5"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h1" component="div" gutterBottom>
            Rinseable
          </Typography>
        </Box>
        <Box
          flex={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box component="form" noValidate autoComplete="off" width="80%">
            <Typography variant="h4" component="div" gutterBottom>
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
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: '24px 0 16px' }}
            >
              Sign In
            </Button>
            <Box display="flex" justifyContent="space-between">
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
