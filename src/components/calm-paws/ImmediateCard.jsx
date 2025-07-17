import PropTypes from "prop-types";

export default function ImmediateCard({
  immediateTitle,
  description,
  color,
  descriptionColor,
}) {
  return (
    <section className="p-2">
      <h1 className={`${color} text-3xl font-bold`}>{immediateTitle}</h1>
      <p className={`text-2xl ${descriptionColor}`}>{description}</p>
    </section>
  );
}

ImmediateCard.propTypes = {
  immediateTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  descriptionColor: PropTypes.string.isRequired,
};
