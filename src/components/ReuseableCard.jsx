import Button from "./Button";

export default function ReuseableCard({
  heading,
  sectionStyles,
  paragraphSection,
  secondParagraph,
  headingStyles,
  paragraphStyles,
  btnSection,
  btnTxt,
  btnStyles,
  nextBtn,
  nextBtnStyles,
}) {
  return (
    <section className={`${sectionStyles} flex flex-col gap-4`}>
      <h2 className={headingStyles}>{heading}</h2>
      <p className={paragraphStyles}>{paragraphSection}</p>
      <p className={paragraphStyles}>{secondParagraph}</p>
      <section className={btnSection}>
        <Button btnTxt={btnTxt} className={btnStyles} />
        <Button btnTxt={nextBtn} className={nextBtnStyles} />
      </section>
    </section>
  );
}
