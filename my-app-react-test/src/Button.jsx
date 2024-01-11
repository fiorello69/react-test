import PropTypes from "prop-types";
const Button = ({ text, icon, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {icon} {text}
      <button></button>
    </button>
  );
};
Button.PropTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Button;
