import React, { useState, useEffect, useCallback, useMemo } from 'react';

import './App.css';

function App() {

  type Points = {
    x: number;
    y: number;
  }

  const [points, setPoints] = useState<Points[]>([]);

  const [popped, setPopped] = useState<Points[]>([]);


  function handleCircleLocation(e: React.MouseEvent<HTMLDivElement>) {

    const { clientX, clientY } = e;

    let point = {
      x: clientX,
      y: clientY
    }

    setPoints([...points, point
    ])


  }

  function handleRedo() {

    if (popped.length != 0) {

      let recoveredPoint = popped.pop();

      let newPoppedArr = [...popped]

      setPopped(newPoppedArr)

      setPoints([...points, recoveredPoint as Points])

    }
  }




  function handleUndo() {

    let newPointArr = [...points];

    let poppedPoint = newPointArr.pop();

    setPopped([...popped, poppedPoint as Points]);

    setPoints(newPointArr);

  }


  return (
    <div className="App">
      <div className="navigation">
        <button disabled = {points.length === 0} onClick={() => handleUndo()} className="back"><b>&#171;</b></button>
        <button disabled = {popped.length === 0}  onClick={() => handleRedo()} className="forward"><b>&#187;</b></button>
      </div>

      <div onClick={e => handleCircleLocation(e)} className="box">

        {
          points.map((point ,index) => (<div key={index} className='point' style={{
            left: point.x - 25 + "px",
            top: point.y - 25 + "px",
          }}></div>))
        }

      </div>
    </div>
  );
}

export default App;
