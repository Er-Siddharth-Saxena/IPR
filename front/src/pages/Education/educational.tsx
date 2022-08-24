import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Article from '../../components/educational/article';
import Videos from '../../components/educational/Videos';
import Links from '../../components/educational/links';

const Educational = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    return (
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Articles" value="1" />
            <Tab label="Videos" value="2" />
            <Tab label="Linka" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><Article /></TabPanel>
        <TabPanel value="2"><Videos /></TabPanel>
        <TabPanel value="3"><Links /></TabPanel>
      </TabContext>
    );
}

export default Educational