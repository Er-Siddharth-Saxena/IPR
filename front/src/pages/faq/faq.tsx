import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";

const Faq = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel_1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const [faq, setFaq] = React.useState<any>([]);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/getFaqs`, {})
      .then((res) => {
        setFaq(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      {faq.map((item: any) => {
        return (
          <Accordion
            key = {item.no}
            expanded={expanded === `panel_${item.no}`}
            onChange={handleChange(`panel_${item.no}`)}
          >
            <AccordionSummary
              aria-controls={`panel_${item.no}d-content`}
              id={`panel_${item.no}d-header`}
            >
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default Faq;
