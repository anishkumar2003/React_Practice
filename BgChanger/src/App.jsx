import { useState } from "react";

function App() {
  let [color, setcolor] = useState("olive");

  const Changecolor = (newColor) => {
    setcolor(newColor);
  };
  return (
    <>
      <div
        className="main w-full h-screen duration-500"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
          <div className="btns flex flex-wrap border justify-center bg-white p-4 rounded-md gap-4">
            <button
              className="px-5 py-2 rounded-2xl text-white"
              style={{ backgroundColor: "red" }}
              onClick={() => Changecolor("red")}
            >
              red
            </button>
            <button
              className="px-5 py-2 rounded-2xl text-white"
              style={{ backgroundColor: "green" }}
              onClick={() => setcolor("green")}
            >
              green
            </button>
            <button
              className="px-5 py-2 rounded-2xl text-white"
              style={{ backgroundColor: "blue" }}
              onClick={() => setcolor("blue")}
            >
              blue
            </button>
            <button
              className="px-5 py-2 rounded-2xl text-white"
              style={{ backgroundColor: "pink" }}
              onClick={() => setcolor("pink")}
            >
              pink
            </button>
            <button
              className="px-5 py-2 rounded-2xl text-white"
              style={{ backgroundColor: "orange" }}
              onClick={() => setcolor("orange")}
            >
              orange
            </button>
            <button
              className="px-5 py-2 rounded-2xl text-white"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setcolor("yellow")}
            >
              yellow
            </button>
            <button
              className="px-5 py-2 rounded-2xl text-white"
              style={{ backgroundColor: "black" }}
              onClick={() => setcolor("black")}
            >
              black
            </button>
            <button
              className="px-5 py-2 rounded-2xl text-white"
              style={{ backgroundColor: "purple" }}
              onClick={() => setcolor("purple")}
            >
              purple
            </button>
            <button
              className="px-5 py-2 rounded-2xl text-white"
              style={{ backgroundColor: "aqua" }}
              onClick={() => setcolor("aqua")}
            >
              aqua
            </button>
            <button
              className="px-5 py-2 rounded-2xl text-white"
              style={{ backgroundColor: "grey" }}
              onClick={() => setcolor("grey")}
            >
              grey
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
