import React from "react";
import { Routes } from "react-router-dom";
import { routes } from "../../core/routes/routes";
import { withAuthRoute } from "./withAuthRoute";

export const RouteList = () => {
  return (
    <React.Suspense fallback={<div></div>}>
      <Routes>{routes.map(withAuthRoute)}</Routes>
    </React.Suspense>
  );
};
