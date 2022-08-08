import { Paths } from "../path.types";

export interface RouteDefinition {
  path: Paths;
  protected?: boolean;
  redirect?: string;
  component?: any;
  routes?: RouteDefinition[];
  title?: string;
}
