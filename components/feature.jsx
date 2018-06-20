import PropTypes from "prop-types";

function Feature(props) {
  return (
    <div>
      <img src={props.img.src} alt={props.img.alt} />
      <p>{props.name}</p>
    </div>
  );
}

Feature.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired
};

export default Feature;
