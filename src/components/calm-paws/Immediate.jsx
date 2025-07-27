import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import ImmediateCard from "./ImmediateCard";

const quickActions = [
  {
    icon: "🎶",
    title: "Smooth Music",
    description: "Play calming smooth music",
  },
  {
    icon: "🎾",
    title: "Distraction",
    description: "Chew toys, toys they love",
  },
  {
    icon: "🏠",
    title: "Stay indoors",
    description: "Make sure dogs stay inside",
  },
  {
    icon: "💤",
    title: "Tire Them Out",
    description: "Exercise before fireworks start",
  },
];

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

        <TabPanel value="1">
          <div className="max-w-2xl p-4 rounded-md mt-10 mx-auto bg-blue-200">
            <ImmediateCard
              immediateTitle="Quick Actions"
              description="Take these steps now to help"
              color="text-slate-800"
              descriptionColor="text-blue-600"
            />
            <ul className="p-2 flex flex-col gap-4">
              {quickActions.map((action, index) => (
                <li key={index} className="bg-white p-4 rounded">
                  <div className="flex gap-2">
                    <span className="text-2xl">{action.icon}</span>
                    <h2 className="font-bold text-xl">{action.title}</h2>
                  </div>
                  <p className="text-lg ml-8">{action.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel value="2">Calming Techniques Content</TabPanel>
      </TabContext>
    </section>
  );
}
