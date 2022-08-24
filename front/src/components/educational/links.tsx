import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

const arr = [
  {
    title: "How to use the app",
    link: "https://www.youtube.com/embed/NYyA9Ks3TKk",
    img: "../../assets/logo.svg",
  },
  {
    title: "How to not use the app",
    link: "https://www.youtube.com/watch?v=1Q8fG0TtVAY",
    img: "../../assets/logo.svg",
  },
  {
    title: "temsting",
    link: "https://www.youtube.com/watch?v=1Q8fG0TtVAY",
    img: "../../assets/logo.svg",
  },
];

const Links = () => {
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
              <CardMedia
                component="img"
                height="194"
                image={ele.img}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {<a href={ele.link}>Visit Pluralsight</a>}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
