import { useContext, useMemo, useState } from "react";
import { AuthContext } from "../util/AuthContext";
import { useLocalStorage } from "./useLocalStorage";
import { AuthResponseDTO, User } from "../interfaces";
import { userHandlers } from "../services/User";
import { useNavigate } from "react-router";

export const useUser = () => {
  const { setItem, getItem } = useLocalStorage();
  const getUser = (): AuthResponseDTO | null => {
    console.log('triggered getuser')
    return JSON.parse(getItem('user') || '{}')
  }
  // const { user } = useContext(AuthContext);
  const [localUser, setLocalUser] = useState<AuthResponseDTO | null>(null)
  const user = useMemo(() => getUser(), [localUser])
  const navigate = useNavigate()

  const changeUser = async (user: User | null) => {
    console.log(user)
    if (!user || user === undefined) {
      // logout
      setLocalUser(null)
      setItem("user", "")
      navigate("/")
    } else {
      // login
      const localUserRes = await login(user)
      if (localUserRes) {
        setLocalUser(localUserRes);
        setItem("user", JSON.stringify(localUserRes));
      }
      navigate("/dashboard")
    }
  }

  const login = async (user: User) => {
    // @ts-ignore
    const response = await userHandlers["/user/login"].post({username: user.username, password: user.password})
    return response.content
  }

  return { user, changeUser };
};