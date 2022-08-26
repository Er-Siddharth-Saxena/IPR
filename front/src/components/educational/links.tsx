import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const arr = [
  {
    title: "IPR Govt form link",
    link: "https://ipindia.gov.in/form-and-fees.htm"
  },
];

const Links = () => {
  return (
    <div className="flex justify-center">
      <div className="grid xl:col-span-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {arr.map((ele, index) => {
          return (
            <Card sx={{ width: 500 }} key={index}>
              <CardHeader
                title={ele.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {<a href={ele.link} target="_blank" rel="noreferrer">Visit here</a>}
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
