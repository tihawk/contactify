import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";
import { User } from "../interfaces";

export const useAuth = () => {
  const { user, changeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const localStorageUser = getItem("user");
    if (localStorageUser && !user?.authToken) {
      changeUser(JSON.parse(localStorageUser));
    }
  }, []);

  const login = (user: User) => {
    changeUser(user);
  };

  const logout = () => {
    changeUser(null);
  };

  return { user, login, logout, changeUser };
};