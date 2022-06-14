import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const SkipLink = props => {
  const { skipLinkVisible } = props;
  const location = useLocation();
  const skipLinkRef = useRef(null);

  useEffect(() => {
    if (skipLinkVisible && skipLinkRef) {
      skipLinkRef.current.focus();
    }
  }, [location, skipLinkVisible]);

  return (
    <a
      className="elastic-skip-link"
      href="#main"
      ref={skipLinkRef}
    >
      Skip to content
    </a>
  );
}

export default SkipLink;
