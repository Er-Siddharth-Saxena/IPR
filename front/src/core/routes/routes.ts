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
  
//   {
//     path: Paths.getPolicy,
//     component: components.GetPolicyPage,
//     protected: true,
//     title: "Get Policy",
//   }
].concat(notFoundRoute as any); // Ensure that notFound is the last route
