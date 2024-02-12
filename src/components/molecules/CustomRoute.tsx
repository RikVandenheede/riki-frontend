import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../../provider/AppProvider";

export const CustomRoute = () => {
  const { isloggedIn } = useContext(AppContext);
  return isloggedIn ? <Outlet /> : <Navigate to="/" />;
};
