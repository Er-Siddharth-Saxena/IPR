import { Drawer, IconButton, Toolbar } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import LogoSIH from "../../assets/logoSIH.svg";
import Nituk from "../../assets/nituk.svg";
import Location from "../../assets/location.svg";
import { Paths } from "../../core/routes/path.types";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useLoginStore } from "../../stores/stores";
import UserLogo from "../../assets/user.svg";

const Logo = () => {
  return (
    <div
      className={classNames({
        "flex items-center": true,
      })}
    >
      <Link
        to={Paths.Home}
        className={classNames({
          " xl:w-[50%] w-[45%]": true,
        })}
      >
        <img src={LogoSIH} alt="Logo" />
      </Link>
    </div>
  );
};

const NitukLogo = () => {
  return (
    <div
      className={classNames({
        "flex items-center": true,
      })}
    >
      <Link
        to={Paths.Home}
        className={classNames({
          "xl:w-[30%] w-[25%]": true,
        })}
      >
        <img src={Nituk} alt="Logo" />
      </Link>
    </div>
  );
};

const UserLogoOrSignIn = () => {
  const [open, setOpen] = React.useState(false);
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const logout = useLoginStore((state) => state.logout);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const signOut = () => {
    logout();
    setOpen(false);
  }

  return (
    <>
      {!isLoggedIn ? (
        <div>
          <Link
            to={Paths.LoginSignup}
            className={classNames({
              "my-2": true,
            })}
          >
            <div
              className={classNames({
                "px-3 flex flex-row items-center rounded-2xl border-[#B8B8B8] border-[1px] bg-[#68E05E] cursor-pointer":
                  true,
              })}
            >
              <div>LogIn/SignUp</div>
            </div>
          </Link>
        </div>
      ) : (
        <div
          className="px-3 flex flex-row items-center cursor-pointer"
          onClick={toggleDrawer}
        >
          <img src={UserLogo} alt="UserLogo" />
          <ArrowDropDownIcon className="text-neutral-500" />
          <Drawer
            variant="temporary"
            anchor="right"
            ModalProps={{keepMounted : true}}
            open={open}
            onClose={toggleDrawer}
            hideBackdrop={true}
            PaperProps={{
              style: {
                position: "absolute",
                top: "9%",
                right: "3.75%",
                width: "auto",
                height: "auto",
                padding: "0.5rem 2rem"
              }
            }}
          >
            <div className="cursor-pointer" onClick={signOut}>Sign Out</div>
          </Drawer>
        </div>
      )}
    </>
  );
};

const DisplayDesktop = () => {
  return (
    <Toolbar
      className={classNames({
        "bg-white h-[12vh] w-[100vw] border-b-[1px] border-[#CACACA] flex flex-row justify-between":
          true,
      })}
    >
      <div className="flex flex-row">
        <Logo />
        <div className="-ml-20">
          <NitukLogo />
        </div>
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
          to={Paths.FAQs}
          className={classNames({
            "mx-4": true,
          })}
        >
          FAQs
        </Link>

        <Link
          to={Paths.RegisterForPatent}
          className={classNames({
            "mx-4": true,
          })}
        >
          IPR Application
        </Link>

        <Link
          to={Paths.LocateNearestPatentOffice}
          className={classNames({
            "mx-4": true,
          })}
        >
          <div
            className={classNames({
              "px-3 flex flex-row items-center rounded-2xl border-[#B8B8B8] border-[1px]":
                true,
            })}
          >
            <div
              className={classNames({
                "mr-2": true,
              })}
            >
              Locate Nearest Patent Office
            </div>
            <img src={Location} alt="LocationLogo" />
          </div>
        </Link>

        <UserLogoOrSignIn />
      </div>
    </Toolbar>
  );
};

const DisplayMobile = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Toolbar
      className={classNames({
        "bg-white h-[12vh] w-[100vw] border-b-[1px] border-[#CACACA] flex flex-row justify-between":
          true,
      })}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row items-center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex flex-row">
            <div className="-ml-4">
              <Logo />
            </div>
            <div className="-ml-16">
              <NitukLogo />
            </div>
          </div>
        </div>
        <UserLogoOrSignIn />
      </div>

      <Drawer
        variant="temporary"
        open={open}
        onClick={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
          },
        }}
      >
        <div
          className={classNames({
            "flex flex-col items-center justify-between h-full mt-5": true,
          })}
        >
          <div
            className={classNames({
              "flex flex-col items-center": true,
            })}
          >
            <Link
              to="/"
              className={classNames({
                "my-2": true,
              })}
            >
              Home
            </Link>

            <Link
              to={Paths.EducationalContent}
              className={classNames({
                "my-2": true,
              })}
            >
              Educational Content
            </Link>

            <Link
              to={Paths.FAQs}
              className={classNames({
                "my-2": true,
              })}
            >
              FAQs
            </Link>

            <Link
              to={Paths.RegisterForPatent}
              className={classNames({
                "my-2": true,
              })}
            >
              IPR Application
            </Link>

            <Link
              to={Paths.LocateNearestPatentOffice}
              className={classNames({
                "my-2": true,
              })}
            >
              <div
                className={classNames({
                  "px-3 flex flex-row items-center rounded-2xl border-[#B8B8B8] border-[1px]":
                    true,
                })}
              >
                <div
                  className={classNames({
                    "mr-2": true,
                  })}
                >
                  Locate Nearest Patent Office
                </div>
                <img src={Location} alt="LocationLogo" />
              </div>
            </Link>
          </div>

          <div
            className={classNames({
              "mb-10 p-3 bg-[#d3dfdc] rounded-full": true,
            })}
          >
            <CloseIcon
              className={classNames({
                "": true,
              })}
              onClick={handleDrawerToggle}
            />
          </div>
        </div>
      </Drawer>
    </Toolbar>
  );
};

const Navbar = (props: { children?: React.ReactNode }) => {
  const [state, setState] = React.useState({
    mobileView: false,
  });

  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const { mobileView } = state;

  React.useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1280
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <div
      className={classNames({
        "fixed top-0 left-0 z-10": true,
      })}
    >
      {mobileView ? <DisplayMobile /> : <DisplayDesktop />}
      {props.children}
      <div className="text-green-500 flex justify-end items-center xl:mr-16 mr-4 mt-1 cursor-pointer" onClick={handleDrawerToggle}>
        <div>
          Explore More <ArrowDropDownIcon className="text-neutral-500" />
        </div>
      </div>

      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        anchor="right"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        hideBackdrop={true}
        PaperProps={{
          style: {
            position: "absolute",
            top: "16%",
            right: "5%",
            // transform: "translate(-50%, -50%)",
            width: "auto",
            height: "auto",
            padding: "0.5rem 2rem"

          }
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "box-content",
            width: "15%",
            
          },
        }}
      >
        <div>Credits</div>                 
        <div>Sponsors </div>                    
        <div>Subsidy</div>  
       </Drawer>
    </div>
  );
};
export default Navbar;
