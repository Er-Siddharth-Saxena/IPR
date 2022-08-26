import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

const arr = [
  {
    title: "Intellectual Property Rights | What is Intellectual Property Rights | IPR for Agriculture by Tanisha",
    link: "https://www.youtube.com/embed/4PzOdMSvxW0",
  },
  {
    title: "Intellectual Property Rights | Patent | Copyright | Trade Mark | Trade Secret by Tanisha Gangrade",
    link: "https://www.youtube.com/embed/VzIgPfAd0Fs",
  },
  {
    title: "Intellectual Property Rights (IPR) - Introduction, Definition,Types, Examples",
    link: "https://www.youtube.com/embed/avSdoMz6OuA",
  },
  {
    title: "IPR - Meaning and Concept",
    link: "https://www.youtube.com/embed/eIUaS51U05M",
  },
];

const Videos = () => {
  return (
    <div className="flex justify-center">
      <div className="grid xl:col-span-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {arr.map((ele, index) => {
          return (
            <Card key={index}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {ele.title[0]}
                  </Avatar>
                }
                title={ele.title}
              />
              <CardContent className="flex justify-center">
              <iframe
                src={ele.link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
