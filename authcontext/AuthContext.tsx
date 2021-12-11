import React from "react";
import { AuthContextType } from "./Aith_Types";
const AuthContext = React.createContext<AuthContextType>({
  login: Function,
  isAuthenticated: false,
  signup: Function,
});
export { AuthContext };
