import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { faqs } from "./data/faq";

export default function Facts() {
  return (
    <section className="max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-glo text-4xl">Frequently Asked Questions</h2>
        <div className="mt-10">
          {faqs.map((question, id) => (
            <Accordion key={id}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon className="text-candy" />}
              >
                <Typography>{question.question}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>{question.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
