import React, { useContext } from "react";
import { ThemeContext } from "../../../context/Context.jsx";
import "../../styles/StylesCalculator/Documentation.css";
import logo from "../../assets/Calculator.jpg";

function Documentation() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={`Theme ${theme}`}>
      <div className="Flex__container">
        <h1 className="Flex__container-tittle">The Calculator</h1>
        <section className="Flex__section">
          <div>
            <h2 className="Flex__h2">
              The calculator was made using ReactJs with the local Vite server.
            </h2>
            <h3 className="Flex__h3">
              It has its respective theme change either light or dark for visual
              enjoyment depending on what the user wants to use.
            </h3>
            <h3 className="Flex__h3">
              It is made using the .eval function which allows to pass any
              string format to number and to perform the respective mathematical
              operations.
            </h3>
            <h3 className="Flex__h3">
              The buttons were made as a base component and then realized with
              their respective characteristics and classes depending on what was
              wanted.
            </h3>
          </div>
          <img src={logo} alt="Calculator Img" className="img-calculator" />
        </section>
        <section>
          <h1 className="Flex__h1-tittle-two">Calculator functions</h1>
          <p className="Flex__p">
            The calculator can perform the basic operations such as addition,
            subtraction, multiplication, division, percentage and use the
            parentheses when executing. when executing.
          </p>
          <p className="Flex__p">
            Also when an error occurs it can be displayed on the screen when the
            error is executed when a mathematical operation is wrongly
            requested.
          </p>
          <p className="Flex__p">You can place the numbers negatively.</p>
          <p className="Flex__p">
            It has a button to delete unwanted numbers in the operation either
            to delete a single number or to clean up the whole operation.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Documentation;
