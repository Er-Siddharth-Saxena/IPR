import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { red } from "@mui/material/colors";
import four from "../../assets/articles/1.svg";
import two from "../../assets/articles/3.svg";
import One from "../../assets/articles/6.svg";
import three from "../../assets/articles/9.svg";
import five from "../../assets/articles/10.svg";

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
  {
    title: "Four basic types of Intellectual Property Rights",
    subheader: "25 Aug 2022",
    img: two,
    description: "Patent,Trademark,Copyrights,Tradesecrets",
    content: [
      "There are four types of intellectual property rights and protections (although multiple types of intellectual property itself). Securing the correct protection for your property is important, which is why consulting with a lawyer is a must.",
      "",
      "The four categories of intellectual property protections include:",
      "",
      "TRADE SECRETS",
      "",
      "PATENTS",
      "",
      "COPYRIGHTS",
      "",
      "TRADEMARK",
    ],
  },
  {
    title: "Trademark",
    subheader: "25 Aug 2022",
    img: three,
    description:
      "Trademarks, then, refer to phrases, words, or symbols that distinguish the source of a product or services of one party from another. ",
    content: [
      "The fourth type of intellectual property protection is a trademark protection. Remember, patents are used to protect inventions and discoveries and copyrights are used to protect expressions of ideas and creations, like art and writing.",
      "",
      "Trademarks, then, refer to phrases, words, or symbols that distinguish the source of a product or services of one party from another. For example, the Nike symbol–which nearly all could easily recognise and identify–is a type of trademark.",
      "",
      "While patents and copyrights can expire, trademark rights come from the use of the trademark, and therefore can be held indefinitely. Like a copyright, registration of a trademark is not required, but registering can offer additional advantages.",
    ],
  },
  {
    title: "Copyright",
    subheader: "25 Aug 2022",
    img: four,
    description:
      ". A copyright is a type of intellectual property protection that protects original works of authorship, which might include literary works, music, art, and more. ",
    content: [
      "Copyrights and patents are not the same things, although they are often confused. A copyright is a type of intellectual property protection that protects original works of authorship, which might include literary works, music, art, and more. Today, copyrights also protect computer software and architecture.",
      "",
      "Copyright protections are automatic; once you create something, it is yours. However, if your rights under copyright protections are infringed and you wish to file a lawsuit, then registration of your copyright will be necessary.",
    ],
  },
  {
    title: "Trade Secret",
    subheader: "25 Aug 2022",
    img: five,
    description:
      "Trade secrets refer to specific, private information that is important to a business because it gives the business a competitive advantage in its marketplace. ",
    content: [
      "Trade secrets refer to specific, private information that is important to a business because it gives the business a competitive advantage in its marketplace. If a trade secret is acquired by another company, it could harm the original holder.",
      "",
      "Examples of trade secrets include recipes for certain foods and beverages (like Mrs. Fields’ cookies or Sprite), new inventions, software, processes, and even different marketing strategies. ",
      "",
      "When a person or business holds a trade secret protection, others cannot copy or steal the idea. In order to establish information as a “trade secret,” and to incur the legal protections associated with trade secrets, businesses must actively behave in a manner that demonstrates their desire to protect the information.",
      "",
      "Trade secrets are protected without official registration; however, an owner of a trade secret whose rights are breached–i.e. someone steals their trade secret–may ask a court to ask against that individual and prevent them from using the trade secret.",
    ],
  },
];

export default function Article() {
  const [open, setOpen] = React.useState<string>("false");

  const handleChange = (panel: string) => {
    setOpen(panel);
  };

  const handleClose = () => {
    setOpen("false");
  };

  React.useEffect(() => {
    //do nothing
  }, [open]);

  return (
    <div className="flex justify-center">
      <div className="grid xl:col-span-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {arr.map((ele, index) => {
          return (
            <>
              <Card
                sx={{ maxWidth: 500 }}
                key={index}
                onClick={() => handleChange(`panel_${index + 1}`)}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {ele.title[0]}
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
                  className="flex justify-center h-56"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {ele.description}
                  </Typography>
                </CardContent>
              </Card>
              <Dialog
                  open={open === `panel_${index + 1}`}
                  onClose={handleClose}
                  className="xl:my-0 mb-14"
                  onBackdropClick={handleClose}
                >
                  <DialogContent>
                    {ele.content.map((e, i) => {
                      return (
                        <>
                          <Typography paragraph key={`key_${i}`}>
                            {e}
                          </Typography>
                        </>
                      );
                    })}
                  </DialogContent>
                  <Button onClick={handleClose}>Close</Button>
                </Dialog>
            </>
          );
        })}
      </div>
    </div>
  );
}
