import { useState } from "react";
import { FiDelete } from "react-icons/fi";
import Button from "./Button";
import "../styles/FormCalculator.css";

function Calculator() {
  const [data, setData] = useState({ display: "", result: "" });

  const listenEvent = (e) => {
    let value = e.target.innerText;
    let isOperation =
      value == "+" ||
      value == "-" ||
      value == "*" ||
      value == "/" ||
      value == "+/-" ||
      value == "%";

    if (data.display.length >= 14) return;
    if (value == "+/-" && data.display == "") return;
    if (value == "%" && data.display.includes("%")) return;

    if (data.display.includes("Error")) {
      setData({ ...data, display: value });
    } else if (data.result !== "" && data.display == "" && isOperation) {
      setData({ ...data, display: `${data.result}` + value });
    } else if (value == "+/-" && data.display !== "") {
      if (data.display.slice(0, 1 == "-")) {
        setData({
          ...data,
          display: `${data.display.slice(1, data.display.length)}`,
        });
      } else {
        setData({ ...data, display: `-${data.display}` });
      }
    } else {
      setData({ ...data, display: `${data.display}` + value });
    }
  };

  const deleteNumbers = () => {
    setData({
      ...data,
      display: data.display.slice(0, data.display.length - 1),
    });
  };

  const deleteAll = () => {
    setData({ display: "", result: "" });
  };

  const result = () => {
    try {
      let result = "";
      if (data.display.includes("%")) {
        let values = data.display.split("%");
        result = eval(`${values[0]}/100`);
      } else {
        result = eval(data.display);
      }
      setData({ ...data, result, display: "" });
    } catch (error) {
      setData({ ...data, display: "Error" });
    }
  };

  return (
    <section className="Grid__Container">
      <input
        className="Grid__display"
        type="text"
        value={data.display}
        disabled
      />
      <span className="Grid__result" type="text">
        {data.result}
      </span>
      <Button
        value="("
        type="Button__special Button_parenthesis"
        HandleClick={listenEvent}
      />
      <Button
        value=")"
        type="Button__special Button_parenthesis"
        HandleClick={listenEvent}
      />
      <Button value="C" type="Button__special" HandleClick={deleteAll} />
      <Button value="%" type="Button__special" HandleClick={listenEvent} />
      <Button value="/" type="Button__special" HandleClick={listenEvent} />
      <Button value="*" type="Button__special" HandleClick={listenEvent} />
      <Button value="7" type="Button__normal" HandleClick={listenEvent} />
      <Button value="8" type="Button__normal" HandleClick={listenEvent} />
      <Button value="9" type="Button__normal" HandleClick={listenEvent} />
      <Button value="-" type="Button__special" HandleClick={listenEvent} />
      <Button value="4" type="Button__normal" HandleClick={listenEvent} />
      <Button value="5" type="Button__normal" HandleClick={listenEvent} />
      <Button value="6" type="Button__normal" HandleClick={listenEvent} />
      <Button value="+" type="Button__special" HandleClick={listenEvent} />
      <Button value="1" type="Button__normal" HandleClick={listenEvent} />
      <Button value="2" type="Button__normal" HandleClick={listenEvent} />
      <Button value="3" type="Button__normal" HandleClick={listenEvent} />
      <Button
        value={<FiDelete className="Button__icon-delete" />}
        HandleClick={deleteNumbers}
        type="Button__delete"
      />
      <Button value="+/-" type="Button__special" HandleClick={listenEvent} />
      <Button value="." type="Button__special" HandleClick={listenEvent} />
      <Button value="0" type="Button__normal" HandleClick={listenEvent} />
      <Button value="=" type="Button__equal" HandleClick={result} />
    </section>
  );
}

export default Calculator;
