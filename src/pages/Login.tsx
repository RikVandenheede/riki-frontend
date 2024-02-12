import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Layout } from "../components/molecules/Layout";
import { useUser } from "../hooks/useUser";
import { AppContext } from "../provider/AppProvider";

import { LoginBackground, MainLogo } from "../components/atoms/Svg";

interface FormValuesProps {
  username: string;
  password: string;
}

export const Login = () => {
  const { isloggedIn, setIsLoggedIn, setAccesToken, setRefreshToken } =
    useContext(AppContext);
  const navigate = useNavigate();

  const [formvalues, setFormvalues] = useState<FormValuesProps>({
    username: "",
    password: "",
  });

  const { user, loggedIn, isLoading, fetchUser } = useUser();

  function handleLogIn(ev: React.FormEvent) {
    ev.preventDefault();
    fetchUser(formvalues);
  }

  function handleFormInput(ev: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = ev.target;
    setFormvalues({ ...formvalues, [id]: value });
  }

  useEffect(() => {
    if (loggedIn) {
      setIsLoggedIn(true);
      setAccesToken(user.accessToken);
      setRefreshToken(user.refreshToken);
      navigate("/dashboard");
    }
  }, [loggedIn, isloggedIn]);

  return (
    <>
      <Layout className="login">
        <div className="login__wrapper">
          <MainLogo className="main-logo" />
          <form onSubmit={handleLogIn} method="POST">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={formvalues?.username}
              onChange={(e) => handleFormInput(e)}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={formvalues?.password}
              onChange={(e) => handleFormInput(e)}
            />
            <button
              className="btn btn--primary"
              disabled={isLoading}
              type="submit"
            >
              Log in
            </button>
          </form>
        </div>
      </Layout>
      <LoginBackground className="background-login" />
    </>
  );
};
