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
    title: "Get Doggies Sleppy",
    description: "Exercise before fireworks start",
  },
];

const calmingTechniques = [
  {
    icon: "🎶",
    title: "Safe Space",
    description: "Play calming smooth music",
  },
  {
    icon: "🎾",
    title: "Favorite Toy",
    description: "Chew toys, toys they love",
  },
  {
    icon: "🏠",
    title: "Thunder Shirt",
    description: "Make sure dogs stay inside",
  },
  {
    icon: "💤",
    title: "Stay Calm",
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
        <Box>
          <TabList onChange={handleTabs}>
            <Tab
              label="Immediate Help"
              value="1"
              sx={{
                fontSize: "16pt",
                backgroundColor: "#60A5FA",
                fontFamily: "'Sigmar', sans-serif",
                color: "black",
              }}
            />
            <Tab
              label="Calming Dog Tips"
              value="2"
              sx={{
                fontSize: "16pt",
                backgroundColor: "#22c55e",
                fontFamily: "'Sigmar', sans-serif",
                color: "black",
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
        <TabPanel value="2">
          <div className="max-w-2xl p-4 rounded-md mt-10 mx-auto bg-green-500">
            <ImmediateCard
              immediateTitle="Calming Techniques"
              description=""
              color="text-slate-800"
              descriptionColor="text-white font-bold"
            />
            <ul className="p-2 flex flex-col gap-4">
              {calmingTechniques.map((action, index) => (
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
      </TabContext>
    </section>
  );
}
