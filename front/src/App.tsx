import classNames from "classnames";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import { RouteList } from "./components/routes/routeList";
import React from "react";

function App() {
  return (
    <div>
      <Navbar />
      <div
        className={classNames({
          "flex flex-col h-[100vh]": true,
        })}
      >
        
        <RouteList />
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
