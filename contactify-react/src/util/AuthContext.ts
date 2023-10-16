import { createContext } from "react";
import { AuthResponseDTO, User } from "../interfaces";

interface AuthContext {
  user: AuthResponseDTO | null
}

export const AuthContext = createContext<AuthContext>({
  user: null
});