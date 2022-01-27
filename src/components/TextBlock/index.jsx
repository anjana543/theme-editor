import PropTypes from "prop-types";

/**
 * @description - TextBlock Component.
 * @returns {Node} - TextBlock View Component
 */
function TextBlock({ text, isDisplay }) {
  return (
    <span
      className={`w-full font-bold text-black text-center ${
        isDisplay ? "inline-block" : "hidden"
      }`}
    >
      {text}
    </span>
  );
}

TextBlock.defaultProps = {
  text: "",
  isDisplay: true,
};

TextBlock.propTypes = {
  text: PropTypes.string.isRequired,
  isDisplay: PropTypes.bool,
};

export default TextBlock;
