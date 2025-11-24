import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { faqs } from "./data/faq";

export default function Facts() {
  return (
    <section className="max-w-xs md:max-w-2xl lg:max-w-3xl mx-auto my-20 ">
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="font-glo text-4xl text-center">
          Frequently Asked Questions
        </h2>
        <div className="my-10 flex flex-col gap-8">
          {faqs.map((question, id) => (
            <Accordion
              key={id}
              sx={{
                border: "4px solid pink",
                backgroundColor: "pink",
                transition: "0.3s ease",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ArrowDropDownIcon
                    className="text-white"
                    style={{ fontSize: "28pt" }}
                  />
                }
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "16pt" }}>
                  {question.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography sx={{ fontSize: "14pt", fontWeight: "thin" }}>
                  {question.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
