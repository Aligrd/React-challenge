import React from "react";

const Number = ({ obj }) => {
  const [arr, setArr, setTrigger] = obj.state;

  const addNumber = () => {
    if (arr.length != 4) {
      arr.push(obj.number);
      setArr(arr);
      setTrigger((prev) => !prev);
    }
  };

  return (
    <button onClick={addNumber} className="number">
      {obj.number}
    </button>
  );
};

export default Number;
