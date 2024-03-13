import Context from "./Context";
import React from "react";
function ContextProvider({ Children }) {
  const [user, setUser] = useState({ name: "John Doe", age: 25 });
  return (
    <Context.Provider value={{ user, setUser }}>
      {Children}
    </Context.Provider>
  );
}

export default ContextProvider;
