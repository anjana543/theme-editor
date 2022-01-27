import PropTypes from "prop-types";
/**
 * @description - SelectField Component.
 * @returns {Node} - SelectField View Component
 */
function SelectField({ val, className, handleChange, options }) {
  return (
    <select
      className={`w-full px-6 py-4 text-sm font-normal text-gray-400 form-select form-select-lg mb-3 appearance-none ${className} bg-white border-2 border-solid border-b-gray rounded-sm cursor-pointer focus:outline-none`}
      aria-label="Select Theme"
      onChange={handleChange}
      value={val}
      data-testid="select"
    >
      <option value="" key="default_0">
        Choose an Organization
      </option>
      {options.map((option, index) => (
        <option value={option.org_name} key={index}>
          {option.org_name}
        </option>
      ))}
    </select>
  );
}

SelectField.defaultProps = {
  val: "",
  className: "",
  handleChange: () => {},
  options: [],
};

SelectField.propTypes = {
  val: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleChange: PropTypes.func,
  options: PropTypes.array.isRequired,
};

export default SelectField;
