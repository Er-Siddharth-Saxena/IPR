import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { useState } from "react";

const arr = [
  {
    title: "Shrimp and Chorizo Paella",
    subheader: "September 14, 2016",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    content: [
      "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
      "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)",
      "Set aside off of the heat to let rest for 10 minutes, and then serve.",
    ],
  },
  {
    title: "Shrimp and Chorizo Paella",
    subheader: "September 14, 2016",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    content: [
      "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
      "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)",
      "Set aside off of the heat to let rest for 10 minutes, and then serve.",
    ],
  },
  {
    title: "Shrimp and Chorizo Paella",
    subheader: "September 14, 2016",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    content: [
      "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
      "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)",
      "Set aside off of the heat to let rest for 10 minutes, and then serve.",
    ],
  },
];

export default function Article() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div className="flex justify-center">
      <div className="grid xl:col-span-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {arr.map((ele, index) => {
          return (
            <Card
              sx={{ maxWidth: 500 }}
              key={index}
              onClick={() => setOpen(true)}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title={ele.title}
                subheader={ele.subheader}
              />
              <CardMedia
                component="img"
                height="194"
                image="../../assets/logo.svg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {ele.description}
                </Typography>
              </CardContent>

              <CardActions disableSpacing></CardActions>
/
              {open ? (
                <>
                  <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div
                      className="fixed inset-0 w-full h-full bg-black opacity-40"
                      onClick={() => setOpen(false)}
                    ></div>
                    {ele.content.map((e, index) => {
                      return (
                        <Typography paragraph key={index}>
                          {e}
                        </Typography>
                      );
                    })}
                  </div>
                </>
              ):null}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
