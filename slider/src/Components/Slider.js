import React from "react";
import { useThemeUpdate, useTheme } from "../Hooks/ThemeContext";

const SLIDES = [
  "https://picsum.photos/id/40/800/500",
  "https://picsum.photos/id/50/800/500",
  "https://picsum.photos/id/60/800/500",
];
function Slider({ slideIndex }) {
  const darkTheme = useTheme();
  
  const ThemeStyle = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div className="img-container" style={ThemeStyle}>
      <img src={SLIDES[slideIndex]} />
    </div>
  );
}

export default Slider;
