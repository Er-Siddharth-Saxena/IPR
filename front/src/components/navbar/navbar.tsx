import { Toolbar } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Location from "../../assets/location.svg";
import { Paths } from "../../core/routes/path.types";

const Navbar = (props: { children?: React.ReactNode }) => {
  return (
    <div
      className={classNames({
        "fixed top-0 left-0": true,
      })}
    >
      <Toolbar
        className={classNames({
          "bg-white h-[12vh] w-[100vw] border-b-[1px] border-[#CACACA] flex flex-row justify-between":
            true,
        })}
      >
        <div
          className={classNames({
            "pl-6 flex flex-row items-center": true,
          })}
        >
        <img src={Logo} alt="Logo" className={classNames({
            "mr-2": true,
        })}/>
          IPR
        </div>
        
        <div
          className={classNames({
            "pr-6 flex flex-row items-center": true,
          })}
        >
          <Link
            to="/"
            className={classNames({
              "mx-4": true,
            })}
          >
            Home
          </Link>

          <Link
            to={Paths.EducationalContent}
            className={classNames({
              "mx-4": true,
            })}
          >
            Educational Content
          </Link>

          <Link
            to={Paths.RegisterForPatent}
            className={classNames({
              "mx-4": true,
            })}
          >
            Register for Patent
          </Link>

          <Link
            to={Paths.FaQs}
            className={classNames({
              "mx-4": true,
            })}
          >
            FAQs
          </Link>

          <Link
            to={Paths.LocateNearestPatentOffice}
            className={classNames({
              "mx-4": true,
            })}
          >
            <div className={classNames({
                "px-3 flex flex-row items-center rounded-2xl border-[#B8B8B8] border-[1px]": true,
            })}>
                <div className={classNames({
                    "mr-2": true,
                })}>Locate Nearest Patent Office</div>
                <img src={Location} alt="LocationLogo" />
            </div>

          </Link>

          <Link
            to={Paths.LocateNearestPatentOffice}
            className={classNames({
              "mx-4": true,
            })}
          >
            <div className={classNames({
                "px-3 flex flex-row items-center rounded-2xl border-[#B8B8B8] border-[1px] bg-[#68E05E]": true,
            })}>
                LogIn/SignUp
            </div>

          </Link>

        
        </div>
      </Toolbar>

      {props.children}
    </div>
  );
};
export default Navbar;
