import { useEffect, useRef, useState } from "react";

const PageLiveRegion = props => {
  const { pageTitle } = props;
  const [ titleState, setTitleState ] = useState('');
  const liveRef = useRef(null);

  useEffect(() => {
    setTitleState(pageTitle);

    if (liveRef) {
      liveRef.current.focus();
    }

    return () => {
      setTitleState('');
    }
  }, [pageTitle]);

  return (
    <div
      aria-atomic="true"
      aria-live="polite"
      aria-relevant="text additions"
      className="continuum-sr-only"
      ref={liveRef}
      role="status"
      tabIndex="-1"
    >
      {`Viewing ${titleState}`}
    </div>
  );
}

export default PageLiveRegion;
