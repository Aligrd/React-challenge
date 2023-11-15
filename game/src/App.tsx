import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [score, setScore] = useState(0)
  const [spotState, setSpotState] = useState<boolean[]>(new Array<boolean>(9).fill(false)) // setting intial state for spots
  const [active, setActive] = useState()
  let spotStyle = { background: "red", width: "200px", height: "200px", margin: "10px", borderRadius: "20px" }
  let activeStyle = { background: "green", width: "200px", height: "200px", margin: "10px", borderRadius: "20px" }
  const SPEED = 1000

  const clear = () => {
    setSpotState(new Array(9).fill(false))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      //access array and change a spot state to 
      const rndIndex = Math.floor((Math.random() * 9))
      const newArr = new Array(9).fill(false)
      newArr[rndIndex] = true
      setSpotState(newArr)


    }, SPEED)

    // clean up function 
    return () => {
      clearInterval(interval)
    }
  }, [spotState])

  return (
    <div className="App">
      <h1>{score}</h1>
      <div className='container'>
        {spotState.map((spot, index) => {
          if (!spot) {
            return <div key={index} className='spot' style={spotStyle} ></div >
          } else return <div key={index} className='spot' style={activeStyle} onClick={() => {
            clear()
            setScore(score => score + 1)
          }}></div >
        })}
      </div>
    </div>
  );
}

export default App;
