import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import {Suspense} from "react";

import theme from "./constants/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>
);
