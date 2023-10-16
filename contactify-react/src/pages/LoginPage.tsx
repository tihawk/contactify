import { useUser } from '../hooks/useUser';

function LoginPage() {
  const { changeUser } = useUser();

  const handleLogin = () => {
    changeUser({
      username: 'user',
      password: 'user'
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage