import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer__container">
      <h2 className="footer_text">My Social Media</h2>
      <ul className="footer__ul">
        <li className="footer__li-icon">
          <a
            href="https://www.instagram.com/j0rdanw3bst3r/"
            className="footer__icon-img"
          >
            <FaInstagram />
          </a>{" "}
        </li>
        <li className="footer__li-icon">
          <a
            href="https://www.linkedin.com/in/jose-medina-3946ab258/"
            className="footer__icon-img"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="footer__li-icon">
          <a href="https://github.com/DeiNas77" className="footer__icon-img">
            <FaGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
