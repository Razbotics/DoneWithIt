import JwtDecode from "jwt-decode";
import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (authToken) => {
    authStorage.storeToken(authToken);
    const user = JwtDecode(authToken);
    setUser(user);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, login, logOut };
};
