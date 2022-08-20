import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Patent = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel_1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const [faqPatent, setFaqPatent] = React.useState<any>([]);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/getFaqsPatent`, {})
      .then((res) => {
        setFaqPatent(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      {faqPatent.map((item: any) => {
        return (
          <Accordion
            key={item.no}
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
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

const Faq = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Patent" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
        </TabList>
      </Box>
      <TabPanel value="1"><Patent/></TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
    </TabContext>
  );
};

export default Faq;
