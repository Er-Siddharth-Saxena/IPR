import React from "react";
import { Routes } from "react-router-dom";
import { routes } from "../../core/routes/routes";
import { withAuthRoute } from "./withAuthRoute";

export const RouteList = () => {
  return (
    <div className="pt-32 pb-12 xl:px-8 px-4">
    <React.Suspense fallback={<div></div>}>
      <Routes>{routes.map(withAuthRoute)}</Routes>
    </React.Suspense>
    </div>
  );
};
