import React, { useContext, useState } from "react";
import { FaCalculator, FaSun } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { PiMaskHappy } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { ThemeContext } from "../../context/Context.jsx";
import { ImBooks } from "react-icons/im";
import "../styles/Header.css";
import "../styles/App.css";
import "../styles/normalize.css";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="Header__container">
      <nav className="Header__nav">
        <div className="Header__nav-calculator">
          <Link to="/" className="Header__nav-link-calculator">
            <FaCalculator className="Header__nav-link-icon" />
            Calculator
          </Link>
        </div>
        <div className="Header__Menu">
          <FiMenu
            className="Header__Menu-Icon"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          ></FiMenu>
        </div>
        <div className="Header__nav-div">
          <div className="Header__div-sun">
            <FaSun className="Header__icon-Sun"  onClick={() => toggleTheme()}/> 
          </div>
          <ul
            className={
              menuOpen ? "Header__nav-div--ul" : "Header__nav-div--ul-close"
            }
          >
             <li className="Header__li">
              <Link to="/" className="Header__a">
                <FaHouseChimney
                  className="Header__icon-books "
                  href=""
                ></FaHouseChimney>
                Home
              </Link>
            </li>
            <li className="Header__li">
              <Link to="/documentation" className="Header__a">
                <ImBooks
                  className="Header__icon-books "
                  href=""
                ></ImBooks>
                Documentation
              </Link>
            </li>
            <li className="Header__li">
              <a href="https://www.linkedin.com/in/jose-medina-3946ab258/" className="Header__a-More Header__li-More">
                <PiMaskHappy
                  className="Header__icon-mask"
                  href=""
                ></PiMaskHappy>
                About Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

//className="Header__nav-div--ul"
