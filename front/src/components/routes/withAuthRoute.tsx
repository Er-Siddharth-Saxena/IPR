import { Route } from "react-router-dom";
import { WithAuth } from "../../core/hoc/withAuth/withAuth";

export const withAuthRoute = (route: any, index: number) => (
  <Route
    path={route.path}
    key={index}
    element={
      route.protected ? (
        WithAuth(route.component, route.redirect)
      ) : (
        <route.component />
      )
    }
  />
);
