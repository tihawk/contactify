import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import { useUser } from '../hooks/useUser';
import { AuthResponseDTO } from '../interfaces';

interface NavBarPropsI {
  user: AuthResponseDTO | null
}
export default function NavBar({} : NavBarPropsI) {
  const { user, changeUser } = useUser()
  const [componentUser, setUser] = React.useState<AuthResponseDTO | null>(user)

  React.useEffect(() => {
    console.log('triggered useffect')
    setUser(user)
  }, [user?.authToken])
  return (
      <AppBar position="absolute">
        <Toolbar>
          <Link variant="h6" underline="none" color="inherit" href="/dashboard" sx={{ flexGrow: 1 }}>
              Your Contacts
          </Link>
          { !componentUser?.authToken
            ? <Button href="/login" color="inherit">Login</Button>
            : <Button onClick={() => changeUser(null)} color="inherit">Logout</Button>
          }
        </Toolbar>
      </AppBar>
  );
}