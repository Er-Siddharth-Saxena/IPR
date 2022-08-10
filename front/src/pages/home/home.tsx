import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import Landing from "../../assets/landing.svg";
import { StartButton } from "../../components/buttons/startButton";
import { Paths } from "../../core/routes/path.types";

const Home = () => {
  return (
    <div
      className={classNames({
        "pt-8 flex flex-row justify-evenly items-center": true,
      })}
    >
      <div
        className={classNames({
          "text-7xl font-bold": true,
        })}
      >
        <p>Welcome</p>
        <p>to IPR</p>
        <p>filing utility</p>
        <div
          className={classNames({
            "mt-4 text-xl font-thin": true,
          })}
        >
          Get up to speed with IPR filing
        </div>
        <Link 
            to={Paths.LoginSignup}
        >
            <StartButton/>
        </Link>
      </div>
          
        
      <img src={Landing} alt="Landing svg" />
    </div>
  );
};

export default Home;
