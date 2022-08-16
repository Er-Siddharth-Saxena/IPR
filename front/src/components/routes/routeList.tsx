import React from "react";
import { Routes } from "react-router-dom";
import { routes } from "../../core/routes/routes";
import { withAuthRoute } from "./withAuthRoute";

export const RouteList = () => {
  return (
    <div className="xl:py-20 xl:px-12">
    <React.Suspense fallback={<div></div>}>
      <Routes>{routes.map(withAuthRoute)}</Routes>
    </React.Suspense>
    </div>
  );
};
