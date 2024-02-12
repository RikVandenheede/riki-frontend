import { useState, createContext } from "react";

import { hasAccessToken, getAccessToken } from "../helpers/Tokens";

interface ContextProps {
  isloggedIn: boolean;
  setIsLoggedIn: any;
  accesToken: string;
  setAccesToken: any;
  refreshToken: string;
  setRefreshToken: any;
}

export const AppContext = createContext<ContextProps>({
  isloggedIn: false,
  setIsLoggedIn: () => {},
  accesToken: "",
  setAccesToken: () => {},
  refreshToken: "",
  setRefreshToken: () => {},
});

export const AppProvider = ({ children }: any) => {
  const [isloggedIn, setIsLoggedIn] = useState<boolean>(hasAccessToken());
  const [accesToken, setAccesToken] = useState<string>(getAccessToken());
  const [refreshToken, setRefreshToken] = useState<string>("");

  const value: ContextProps = {
    isloggedIn,
    setIsLoggedIn,
    accesToken,
    setAccesToken,
    refreshToken,
    setRefreshToken,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
