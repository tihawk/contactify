import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import { AuthContext } from '../util/AuthContext';
import { useUser } from '../hooks/useUser';
import NavBar from '../components/NavBar';
import { CssBaseline, Drawer, Toolbar } from '@mui/material';
import Dashboard from './Dashboard';
import History from '../util/History';

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

const NavigateSetter = () => {
  History.navigate = useNavigate();

  return null;
};

function RoutesWrapper() {
  return (
      <Routes>
        <Route
            path="/"
            element={<Landing/>}
        />
        <Route
            path="dashboard"
            element={<Dashboard/>}
        />
        <Route
            path="login"
            element={<Login/>}
        />
      </Routes>
  );
}

export default function App() {
  const { user } = useUser()
  return (
    <BrowserRouter>
    <NavigateSetter/>
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
              <RoutesWrapper/>
            </Container>
          </Box>
          <Box component="footer">
            <Copyright />
          </Box>
        </Box>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}