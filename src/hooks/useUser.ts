import { useState } from "react";

import { storeTokens } from "../helpers/Tokens";
import { AppContext } from "../provider/AppProvider";

interface UserProps {
  name: string;
  accessToken: string;
  refreshToken: string;
}

interface LogindetailProps {
  username: string;
  password: string;
}

export const useUser = () => {
  const [user, setUser] = useState<UserProps>({
    name: "",
    accessToken: "",
    refreshToken: "",
  });

  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchUser = async ({ username, password }: LogindetailProps) => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();

        storeTokens({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        });

        setLoggedIn(true);
        setUser({
          name: data.username,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        });
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setLoggedIn(false);
      }
    } catch {
      console.error("Service unavailable");
    }
  };

  return { user, loggedIn, isLoading, fetchUser };
};
