import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import { useUser } from '../hooks/useUser';

export default function NavBar() {
  const { user } = useUser()
  return (
      <AppBar position="absolute">
        <Toolbar>
          <Link variant="h6" underline="none" color="inherit" href="/" sx={{ flexGrow: 1 }}>
              Home
          </Link>
          { !user?.authToken && <Button href="/login" color="inherit">Login</Button> }
        </Toolbar>
      </AppBar>
  );
}