import Button from "./Button";

export default function ReuseableCard({
  heading,
  sectionStyles,
  paragraphSection,
  secondParagraph,
  headingStyles,
  paragraphStyles,
  btnTxt,
  btnStyles,
}) {
  return (
    <section className={`${sectionStyles} flex flex-col gap-4`}>
      <h2 className={headingStyles}>{heading}</h2>
      <p className={paragraphStyles}>{paragraphSection}</p>
      <p className={paragraphStyles}>{secondParagraph}</p>

      <Button btnTxt={btnTxt} className={btnStyles} />
    </section>
  );
}
