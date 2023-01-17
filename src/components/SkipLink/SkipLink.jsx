// import { useLocation } from "react-router-dom";
import { MAIN_ID } from "../../constants";
import "./skiplink.css";

const SkipLink = () => {
  const handleClick = e => {
    e.preventDefault();

    const target = document.getElementById(MAIN_ID);
    target.scrollIntoView();
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }

  return (
    <a
      className="continuum-skip-link"
      href="#main"
      onClick={handleClick}
    >
      Skip to content
    </a>
  );
}

export default SkipLink;
