import { useUser } from "../hooks/useUser";

function HomePage() {
  const { user } = useUser()
  return <h2>Home (Hello {user?.username})</h2>;
}

export default HomePage