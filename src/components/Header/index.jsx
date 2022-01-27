import PropTypes from "prop-types";

/**
 * @description - Header Component.
 * @returns {Node} - Header View Component
 */
function Header({ Tag, className, text }) {
  return (
    <Tag
      className={`${className} font-bold text-base text-center cursor-pointer `}
    >
      {text}
    </Tag>
  );
}

Header.defaultProps = {
  Tag: "",
  className: "",
  text: "",
};

Header.propTypes = {
  Tag: PropTypes.string.isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Header;
