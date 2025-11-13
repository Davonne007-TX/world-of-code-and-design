export default function Info() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 mt-10 ">
      <div>
        <div className="text-3xl font-serif font-semibold text-foreground">
          20
        </div>
        <div className="text-sm text-muted-foreground">Years Experience</div>
      </div>
      <div className="h-12 w-px bg-border" />
      <div>
        <div className="text-3xl font-serif font-semibold text-foreground">
          10,000+
        </div>
        <div className="text-sm text-muted-foreground">Satisfied Customers</div>
      </div>
      <div className="h-12 w-px bg-border" />
      <div>
        <div className="text-3xl font-serif font-semibold text-foreground">
          4.9
        </div>
        <div className="text-sm text-muted-foreground">Average Rating</div>
      </div>
    </section>
  );
}
