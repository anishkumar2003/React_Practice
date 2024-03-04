import { BtnList } from "./components/BtnList";
import Btn from "./components/Btn";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");

  // Function to handle special button clicks
  const handleBtnClick = (btn) => {
    switch (btn) {
      case "clear":
        setDisplay("");
        break;
      case "=":
        try {
          const result = evaluateExpression(display);
          setDisplay(result.toString());
        } catch (error) {
          setDisplay("Error");
        }
        break;
      default:
        setDisplay((prevDisplay) => prevDisplay + btn);
        break;
    }
  };

  // Function to evaluate mathematical expression
  const evaluateExpression = (expression) => {
    let result = "";
    try {
      // Using Function constructor to evaluate the expression
      const evalFunc = new Function("return " + expression);
      result = evalFunc();
    } catch (error) {
      result = "Error";
    }
    return result;
  };

  return (
    <>
      <div className="cal flex flex-col border mt-10 p-5 w-80">
        <div className="display flex flex-col">
          <h1 className="font-bold text-center text-5xl m-5">Calculator</h1>
          <input
            type="text"
            value={display}
            className="border text-end p-5"
            readOnly
          />
        </div>
        <div className="flex flex-wrap gap-5 justify-center mt-5">
          {BtnList.map((btn) => (
            <Btn key={btn} BtnName={btn} handleBtnClick={handleBtnClick}></Btn>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
