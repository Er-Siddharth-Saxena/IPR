import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { red } from "@mui/material/colors";
import One from "../../assets/articles/1.svg";

const arr = [
  {
    title: "IPR",
    subheader: "August 25, 2022",
    img: One,
    description:
      "Intellectual property rights are the rights given to persons over the creations of their minds. They usually give the creator an exclusive right over the use of his/her creation for a certain period of time.",
    content: [
      "Intellectual property rights are customarily divided into two main areas:",
      "(i) Copyright and rights related to copyright.",
      "The rights of authors of literary and artistic works (such as books and other writings, musical compositions, paintings, sculpture, computer programs and films) are protected by copyright, for a minimum period of 50 years after the death of the author.",
      "",
      "Also protected through copyright and related (sometimes referred to as “neighbouring”) rights are the rights of performers (e.g. actors, singers and musicians), producers of phonograms (sound recordings) and broadcasting organisations. The main social purpose of protection of copyright and related rights is to encourage and reward creative work.",
      "(ii) Industrial property.",
      "Industrial property can usefully be divided into two main areas:",
      "•		One area can be characterised as the protection of distinctive signs, in particular trademarks (which distinguish the goods or services of one undertaking from those of other undertakings) and geographical indications (which identify a good as originating in a place where a given characteristic of the good is essentially attributable to its geographical origin).",
      "",
      "\tThe protection of such distinctive signs aims to stimulate and ensure fair competition and to protect consumers, by enabling them to make informed choices between various goods and services. The protection may last indefinitely, provided the sign in question continues to be distinctive.",
      "",
      "•		Other types of industrial property are protected primarily to stimulate innovation, design and the creation of technology. In this category fall inventions (protected by patents), industrial designs and trade secrets.",
      "",

      "The social purpose is to provide protection for the results of investment in the development of new technology, thus giving the incentive and means to finance research and development activities.",
      "",

      "A functioning intellectual property regime should also facilitate the transfer of technology in the form of foreign direct investment, joint ventures and licensing.",
      "",

      "The protection is usually given for a finite term (typically 20 years in the case of patents).",
      "",
      "While the basic social objectives of intellectual property protection are as outlined above, it should also be noted that the exclusive rights given are generally subject to a number of limitations and exceptions, aimed at fine-tuning the balance that has to be found between the legitimate interests of right holders and of users.",
    ],
  },
];

export default function Article() {
  const [open, setOpen] = React.useState(false);

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
            <Card sx={{ maxWidth: 500 }} key={index} onClick={handleClickOpen}>
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
                image={ele.img}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {ele.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing></CardActions>
              <Dialog open={open} keepMounted onClose={handleClose} className="xl:my-0 mb-14">
                <DialogContent>
                  {ele.content.map((e, index) => {
                    return (
                      <Typography paragraph key={index}>
                        {e}
                      </Typography>
                    );
                  })}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Close</Button>
                </DialogActions>
              </Dialog>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
