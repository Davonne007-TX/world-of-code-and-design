import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { useState } from "react";

export default function Immediate() {
  const [value, setValue] = useState("1");

  const handleTabs = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleTabs}>
            <Tab
              label="Immediate Help"
              value="1"
              sx={{
                fontSize: "16pt",
              }}
            />
            <Tab
              label="Calming Dog Tips"
              value="2"
              sx={{
                fontSize: "16pt",
              }}
            />
          </TabList>
        </Box>

        <TabPanel value="1">Immediate Help Content</TabPanel>
        <TabPanel value="2">Calming Techniques Content</TabPanel>
      </TabContext>
    </section>
  );
}
