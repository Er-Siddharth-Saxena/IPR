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
    <div className="mt-8">
      <div
        className={classNames({
          "flex flex-row justify-evenly items-center": true,
        })}
      >
        <div
          className={classNames({
            "xl:text-4xl text-2xl font-bold": true,
          })}
        >
          <p>Develop an application</p>
          <p>to facilitate IPR filing</p>
          <p></p>
          <p>for the grassroots</p>
          <p></p>
          <p>community</p>
          <div
            className={classNames({
              "mt-4 xl:text-xl text-lg font-thin mb-4": true,
            })}
          >
            <p>Software: Platform that</p>
            <p>mentors, guides and facilitates</p>
            <p>IPR filing process for Grass-root innovators.</p>
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
