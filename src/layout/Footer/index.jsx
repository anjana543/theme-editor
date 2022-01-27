import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { resetTheme } from "../../store/actions";

/**
 * @description - Footer Component.
 * @returns {Node} - Footer View Component
 */
function Footer({ text, align, path }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    if (path === "/") {
      dispatch(resetTheme());
    }
    navigate(path);
  }

  return (
    <footer
      className={`text-${align} font-normal text-lg text-blue-600 absolute bottom-0 cursor-pointer`}
      onClick={() => handleClick()}
      data-testid="footer"
    >
      {text}
    </footer>
  );
}

Footer.defaultProps = {
  text: "",
  align: "center",
  path: "",
};

Footer.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string,
  path: PropTypes.string.isRequired,
};

export default Footer;
