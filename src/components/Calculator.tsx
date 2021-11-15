import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import Backspace from "./BackSpaceButton"
import ClearAll from "./ClearAllButton";
import Equals from "./EqualButton"
import Percentage from "./PercentageButton";
import Toggle from "./ToggleButton";


function Calculator() {
    const button = [
        "AC",
        "C",
        "%",
        "/",
        "9",
        ".",
        "+/-",
        "*",
        "8",
        "7",
        "6",
        "-",
        "5",
        "4",
        "3",
        "+",
        "2",
        "1",
        "0",
        "=",
      ];
    
      const [result, setResult] = useState("");
      const InputRef = useRef<string|any>("");
      useEffect(() => InputRef.current.focus());
  
      const clickHandler = (value: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const myValue = value.target as HTMLElement
        console.log(myValue.innerText);
        setResult(result.concat(myValue.innerText));
      };
    
      const clearAll = () => {
        setResult("");
      };
    
      const backSpace = () => {
        setResult(result.slice(0, -1));
      };
    
      const resultHandler = () => {
        // eslint-disable-next-line
        setResult(eval(result).toString());
      };
    
      const percent = () => {
        setResult(String(parseFloat(result) / 100));
      };
    
      const toggleNegative = () => {
        const storedNum = result.charAt(0);
        if (storedNum !== "-") {
          setResult((prev) => "-" + prev);
        } else {
          setResult(result.substring(1));
        }
      };
    
      const displayBtn = button.map((btn, index) => {
        if (btn === "AC") {
          return <ClearAll key={index} value={btn} clearFunc={clearAll} />;
        } else if (btn === "C") {
          return <Backspace key={index} value={btn} backFunc={backSpace} />;
        } else if (btn === "%") {
          return <Percentage key={index} value={btn} percentFunc={percent} />;
        } else if (btn === "+/-") {
          return <Toggle key={index} value={btn} minusPlusFunc={toggleNegative} />;
        } else if (btn === "=") {
          return (
            <Equals key={index} value={btn} resultHandlerFunc={resultHandler} />
          );
        } else {
          return <Button key={index} value={btn} clickHandler={clickHandler} />;
        }
      });
      return (
        <div className="main-container">
          <div className="display-field">
            <form>
              <input
                type="text"
                className="input-field"
                value={result}
                ref={InputRef}
              />
            </form>
          </div>
          <div className="button-container">
            {displayBtn}
          </div>
        </div>
      );
}

export default Calculator