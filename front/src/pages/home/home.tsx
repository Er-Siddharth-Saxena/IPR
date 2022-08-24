import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import Slider1 from "../../assets/sliderImg1.svg"
import Slider2 from "../../assets/sliderImg2.svg"
import { StartButton } from "../../components/buttons/startButton";
import { Paths } from "../../core/routes/path.types";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function CarouselContainer(props: any) {
  var items = [
    {
      img: (
        <img
          className={classNames({
            "hidden xl:block": true,
          })}
          src={Slider1}
          alt="Img1"
        />
      ),
    },
    {
      img: (
        <img
          className={classNames({
            "hidden xl:block": true,
          })}
          src={Slider2}
          alt="Img2"
        />
      ),
    }
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: any) {
  return (
    <Paper className="flex items-center justify-center">
      {props.item.img}
    </Paper>
  );
}

const Home = () => {
  return (
    <div className="">
      <div
        className={classNames({
          "flex flex-row justify-evenly": true,
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
          <Link to={Paths.LoginSignup}>
            <StartButton />
          </Link>
        </div>
        <div className="h-full w-[50vw] xl:block hidden ">
          <CarouselContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
