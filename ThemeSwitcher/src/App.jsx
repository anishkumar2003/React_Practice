import { useEffect, useState } from "react";
import Card from "./componenets/Card";
import ThemeBtn from "./componenets/ThemeBtn";
import { ThemeProvider } from "./Contexts/Theme";

function App() {
  const [theme, settheme] = useState("light");
  const darkTheme = () => {
    settheme("dark");
  };

  const lightTheme = () => {
    settheme("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    console.log(theme);
    document.querySelector("html").classList.add(theme);
  }, [theme]);
  return (
    <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
      <div className="mainbody flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
