import PropTypes from "prop-types";

/**
 * @description - InputField Component.
 * @returns {Node} - InputField View Component
 */
function InputField({ type, placeholder, className, handleChange, value }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      className={`w-full px-6 py-4 text-sm font-normal text-gray-400 ${className} form-select form-select-lg mb-3 appearance-none bg-white border-2 border-solid border-b-gray rounded-sm focus:outline-none`}
    />
  );
}

InputField.defaultProps = {
  type: "text",
  value: "",
  placeholder: "",
  className: "",
  handleChange: () => {},
};

InputField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func,
};

export default InputField;
