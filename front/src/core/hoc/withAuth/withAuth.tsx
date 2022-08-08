import { ComponentType } from "react";
import { Navigate } from "react-router-dom";
import { useLoginStore } from "../../../stores/stores";
import { Paths } from "../../routes/path.types";

export const WithAuth = (Component: ComponentType<any>, redirect?: string) => {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={Paths.Home} state={{ from: redirect }} replace />;
  }
  return <Component />;
};
