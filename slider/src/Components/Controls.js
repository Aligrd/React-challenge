import { React, useRef } from "react";
import "./control.css";
import { useThemeUpdate, useTheme } from "../Hooks/ThemeContext";

const Controls = ({ setSlideIndex }) => {
  const interval = useRef();
  const COUNTER = 1000;

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const incrementSlide = () => {
    setSlideIndex((currIndex) => {
      return currIndex + 1 > 2 ? 0 : currIndex + 1;
    });
  };

  const ThemeStyle = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div className="control-container">
      <button className="theme-toggle" onClick={toggleTheme}>
        toggle
      </button>
      <button
        onClick={() =>
          setSlideIndex((currIndex) => {
            return currIndex - 1 < 0 ? 2 : currIndex - 1;
          })
        }
        className="control"
        style={ThemeStyle}
      >
        Prev
      </button>

      <button
        onClick={() => {
          if (!interval.current) {
            interval.current = setInterval(() => incrementSlide(), COUNTER);
          }
        }}
        className="control"
        style={ThemeStyle}
      >
        Play
      </button>

      <button
        onClick={() => {
          clearInterval(interval.current);

          interval.current = null;
        }}
        className="control"
        style={ThemeStyle}
      >
        Pause
      </button>

      <button
        className="control"
        style={ThemeStyle}
        onClick={() => incrementSlide()}
      >
        Next
      </button>
    </div>
  );
};

export default Controls;



