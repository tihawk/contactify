import { useContext, useMemo, useState } from "react";
import { AuthContext } from "../util/AuthContext";
import { useLocalStorage } from "./useLocalStorage";
import { AuthResponseDTO, User } from "../interfaces";
import { userHandlers } from "../services/User";

export const useUser = () => {
  const { setItem, getItem } = useLocalStorage();
  const getUser = (): AuthResponseDTO | null => {
    return JSON.parse(getItem('user') || '{}')
  }
  // const { user } = useContext(AuthContext);
  const user = useMemo(() => getUser(), [])
  const [localUser, setLocalUser] = useState<AuthResponseDTO | null>(user)



  const changeUser = async (user: User | null) => {
    console.log(user)
    if (!user || user === undefined) {
      setLocalUser(null)
      setItem("user", "")
    } else {
      const localUserRes = await login(user)
      if (localUserRes) {
        setLocalUser(localUserRes);
        setItem("user", JSON.stringify(localUserRes));
      }
    }
  }

  const login = async (user: User) => {
    // @ts-ignore
    const response = await userHandlers["/user/login"].post({username: user.username, password: user.password})
    return response.content
  }

  return { user, changeUser };
};