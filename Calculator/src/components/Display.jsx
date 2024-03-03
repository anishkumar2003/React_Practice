import { useState } from "react";
function Display() {
  let [display,updatedisplay]=useState('0')
  return (
    <>
      <h1 className="font-bold text-center text-5xl m-5">Calculator</h1>
      <input type="text" value={display} className="border text-end p-5 " readOnly />
    </>
  );
}

export default Display;
