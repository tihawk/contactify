import { Button, Typography } from '@mui/material';
import { useUser } from '../hooks/useUser';

function Login() {
  const { changeUser } = useUser();

  const handleLogin = () => {
    changeUser({
      username: 'user',
      password: 'user'
    });
  };

  return (
    <>
      <Typography variant="h2">Login</Typography>
      <Button onClick={handleLogin}>Login</Button>
    </>
  );
};

export default Login