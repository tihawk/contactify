import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from '../components/ProTip';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import { AuthContext } from '../util/AuthContext';
import { useUser } from '../hooks/useUser';
import NavBar from '../components/NavBar';
import { CssBaseline, Drawer, Toolbar } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://kblagoev.com/">
        Kiril
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

function RoutesWrapper() {
  return (
      <Routes>
        <Route
            path="/"
            element={<HomePage/>}
        />
        <Route
            path="login"
            element={<LoginPage/>}
        />
      </Routes>
  );
}

export default function App() {
  const { user } = useUser()
  return (
    <AuthContext.Provider value={{ user }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <NavBar/>
        <CssBaseline/>
        <Box component="main" sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            width: '100vw',
            overflow: 'auto',
          }}>
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Material UI Create React App example with styled-components in TypeScript
            </Typography>
            <RoutesWrapper/>
            <ProTip />
          </Container>
        </Box>
        <Box component="footer">
          <Copyright />
        </Box>
      </Box>
    </AuthContext.Provider>
  );
}