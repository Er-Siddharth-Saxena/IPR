import React from "react";

// lazy loaded components
const PageNotFoundPage = React.lazy(
  () => import("../../pages/pageNotFound/pageNotFound")
);

const HomePage = React.lazy(() => import("../../pages/home/home"));


export {
  PageNotFoundPage,
  HomePage
};
