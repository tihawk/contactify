import { Button, Divider, FormControl, Grid, Input, InputLabel, Typography } from '@mui/material';
import { useUser } from '../hooks/useUser';
import { useState } from 'react';

function Login() {
  const { changeUser } = useUser();
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleLogin = () => {
    changeUser({
      username: user,
      password: pass
    });
  };

  return (
    <>
      <Typography variant="h2">Login</Typography>
      <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <FormControl>
              <InputLabel htmlFor="username">username</InputLabel>
              <Input
                id="username"
                value={user}
                onChange={e => setUser(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <FormControl>
              <InputLabel htmlFor="password">password</InputLabel>
              <Input
                type="password"
                id="password"
                value={pass}
                onChange={e => setPass(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <Divider/>
          </Grid>
          <Grid item>
            <Button onClick={handleLogin}>Login</Button>
          </Grid>
        </Grid>
    </>
  );
};

export default Login