export default function ReuseableCard({
  heading,
  sectionStyles,
  paragraphSection,
  headingStyles,
  paragraphStyles,
}) {
  return (
    <section className={`${sectionStyles} flex flex-col gap-4`}>
      <h2 className={headingStyles}>{heading}</h2>
      <p className={paragraphStyles}>{paragraphSection}</p>
    </section>
  );
}
