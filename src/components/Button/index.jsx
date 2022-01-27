import PropTypes from "prop-types";

/**
 * @description - Button Component.
 * @returns {Node} - Button View Component
 */
function Button({ text, className, onClickHandler, isDisabled }) {
  return (
    <button
      type="button"
      className={`w-auto ${className} font-bold rounded-lg text-base px-10 py-5 text-center mb-2 outline-0 ${
        isDisabled && "cursor-not-allowed"
      }`}
      onClick={onClickHandler}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "",
  className: "",
  onClickHandler: () => {},
  isDisabled: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClickHandler: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default Button;
