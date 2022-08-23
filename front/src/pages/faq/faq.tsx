import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Patent from "../../components/faq/patent";
import Copyright from "../../components/faq/copyright";
import Trademark from "../../components/faq/trademark";
import Tradesecrets from "../../components/faq/tradesecrets"

const Faq = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Patent" value="1" />
          <Tab label="Copyright" value="2" />
          <Tab label="Trademark" value="3" />
          <Tab label="Trade-Secrets" value="4" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <Patent />
      </TabPanel>
      <TabPanel value="2">
        <Copyright />
      </TabPanel>
      <TabPanel value="3">
        <Trademark />
      </TabPanel>
      <TabPanel value="4">
        <Tradesecrets />
      </TabPanel>
    </TabContext>
  );
};

export default Faq;
