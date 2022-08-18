import { Paths } from "./path.types";
import { RouteDefinition } from "./definitions/definitions";
import * as components from "./components";

const notFoundRoute: RouteDefinition = {
  path: Paths.allowAll,
  component: components.PageNotFoundPage,
  protected: false,
  title: "Not Found",
};

export const routes: RouteDefinition[] = [
  
  {
    path: Paths.Home,
    component: components.HomePage,
    protected: false,
    title: "Home",
  },
  {
    path: Paths.LoginSignup,
    component: components.LoginSignupPage,
    protected: false,
    title: "Login-SignUp",
  },
  {
    path: Paths.LocateNearestPatentOffice,
    component: components.LocationPage,
    protected: false,
    title: "Location",
  },
].concat(notFoundRoute as any); // Ensure that notFound is the last route
