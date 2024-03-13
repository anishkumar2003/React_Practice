// import ContextProvider from "./Context/ContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import userContext from "./Context/userContext";
import { useState } from "react";
function App() {
  const [user, setUser] = useState({
    name: "John Doe",
    age: 25,
    profile: "Software Developer",
  });
  return (
    <userContext.Provider value={{ user, setUser }}>
      <Profile />
      <Login />
    </userContext.Provider>
  );
}
export default App;
