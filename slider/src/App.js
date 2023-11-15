import { useState, useContext } from "react";
import "./App.css";
import { ThemeProvider, useThemeUpdate, useTheme } from "./Hooks/ThemeContext";

import Slider from "./Components/Slider";
import Controls from "./Components/Controls";

function App() {
  const [slideIndex, setSlideIndex] = useState(0);

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const ThemeStyle = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <ThemeProvider>
      <div className="App" style={ThemeStyle}>
        
        <div>
          <div className="Container">
            <Slider slideIndex={slideIndex} />
          </div>
          <Controls setSlideIndex={setSlideIndex} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
