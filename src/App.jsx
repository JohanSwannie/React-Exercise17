import { useState, useEffect } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("#root").classList.remove("dark", "light");
    document.querySelector("#root").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-10">
            <ThemeBtn />
          </div>
          <div inline-grid grid-cols-3 gap-4>
            <div className="w-full max-w-2xl mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
