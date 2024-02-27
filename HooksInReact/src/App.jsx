import "./App.css";
import { useState } from "react";
function App() {
  let [counter, setcounter] = useState(10);

  const addone = function () {
    if (counter < 20) {
      setcounter((counter += 1));
    } else {
      console.log("limit reach");
    }
  };

  function lesone() {
    if (counter > 0) {
      setcounter((counter -= 1));
    } else {
      console.log("Can't reduce value");
    }
  }

  function plus3() {
    if (counter < 20 - 3) {
      setcounter((counter) => counter + 3);
    }
  }
  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <h1>Hooks in React</h1>
      <button className="btn" onClick={addone}>
        Add 1: {counter}
      </button>
      <br />
      <button className="btn" onClick={lesone}>
        Less 1: {counter}
      </button>
      <br />
      <button className="btn" onClick={() => setcounter((counter = 10))}>
        Reset
      </button>
      <br />
      <button className="btn" onClick={plus3}>
        Plus 3: {counter}
      </button>
    </>
  );
}

export default App;
