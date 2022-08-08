import React from "react";

// lazy loaded components
const PageNotFoundPage = React.lazy(
  () => import("../../pages/pageNotFound/pageNotFound")
);




export {
  PageNotFoundPage
};
