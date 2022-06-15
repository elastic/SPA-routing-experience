import { Link } from "react-router-dom";
import './header.css';

const Header = props => {
  const { handleSkipLink, skipLinkVisible } = props;

  const handleClick = e => {
    // offsetX and offsetY were the only reliable measurements
    // across evergreen browsers to derive mouse click from 
    // Enter keypress
    const { offsetX, offsetY } = e.nativeEvent;
    
    if ((offsetX !== 0) || (offsetY !== 0)) {
      if (skipLinkVisible) {
        handleSkipLink(false);
        console.log('Flipped show skip link to false');
      }
    }

    if ((offsetX === 0) && (offsetY === 0)) {
      if (!skipLinkVisible) {
        handleSkipLink(true);
        console.log('Flipped show skip link to true');
      }
    }
  }

  return (
    <header className="continuum-global-header">
      <nav className="continuum-global-nav">
        <Link to="/" onClick={handleClick}>Home</Link>
        <Link to="/invoices" onClick={handleClick}>Invoices</Link>
        <Link to="/expenses" onClick={handleClick}>Expenses</Link>
      </nav>
    </header>
  );
}

export default Header;
