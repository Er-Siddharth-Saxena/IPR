import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

const arr = [
  {
    title: "How to use the app",
    link: "https://www.youtube.com/embed/NYyA9Ks3TKk",
  },
  {
    title: "How to not use the app",
    link: "https://www.youtube.com/watch?v=1Q8fG0TtVAY",
  },
  {
    title: "temsting",
    link: "https://www.youtube.com/watch?v=1Q8fG0TtVAY",
  },
];

const Videos = () => {
  return (
    <div className="flex justify-center">
      <div className="grid xl:col-span-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {arr.map((ele, index) => {
          return (
            <Card sx={{ maxWidth: 500 }} key={index}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title={ele.title}
              />
              <CardContent>
              <iframe
                width="560"
                height="315"
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
