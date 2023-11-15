import React, { useEffect, useState } from "react";
import "./App.css";
import Number from "./Number";

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const password = [4, 3, 4, 5];
  const [passwordArr, setPaswordArr] = useState([]);
  const [err, setErr] = useState(false);

  const [trigger, setTrigger] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const CheckPassword = () => {
    const passString = password.join("");
    const passArrString = passwordArr.join("");

    if (passArrString === passString) {
      setIsPasswordCorrect(true);
      setErr("");
    } else {
      setIsPasswordCorrect(false);
      setErr("Wrong Password!");
      setTimeout(() => {
        setErr("");
      }, 300);
    }
  };
  useEffect(() => {
    if (passwordArr.length === 4) {
      CheckPassword();
      setTimeout(() => {
        setPaswordArr([]);
      }, 500);

      setTimeout(() => {
        setIsPasswordCorrect(false);
      }, 700);
    }
  }, [trigger]);

  //TODO show an error
  return (
    <>
    <h1 className="hint">pass-4345</h1>
      <h1 className="err">{err}</h1>
      <div className="output">
        {passwordArr.map((pass, index) => (
          <div key={index} className="pass">
            {pass}
          </div>
        ))}
      </div>
      <h1 className="err">{err}</h1>
      {!isPasswordCorrect ? (
        <div className="App">
          {numbers.map((n) => {
            return (
              <div className={n === 0 ? "zero" : ""} key={n}>
                <Number
                  obj={{
                    number: n,
                    state: [passwordArr, setPaswordArr, setTrigger],
                  }}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="newApp">
          <h1>Successfull login</h1>
        </div>
      )}
    </>
  );
}

export default App;
