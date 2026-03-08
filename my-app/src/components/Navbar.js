import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" className="logo">Portfolio</Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li><Link to="/" onClick={handleClick}>Home</Link></li>
        <li><Link to="/project" onClick={handleClick}>Project</Link></li>
        <li><Link to="/about" onClick={handleClick}>About</Link></li>
        <li><Link to="/contact" onClick={handleClick}>Contact</Link></li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#d11a1a" }} />
        ) : (
          <FaBars size={20} style={{ color: "#c82f2f" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;