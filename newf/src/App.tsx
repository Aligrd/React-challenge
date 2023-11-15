import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Light from './Light'


function App(): JSX.Element {
  const GO = "go"
  const STOP = "stop"
  const SLOW = "slow"


  return (
    <div className='container'>
      <div className='set1'>
        <Light intialState={GO} />
        <Light intialState={SLOW} />
        <Light intialState={STOP} />
      </div>
      <div className='set2'>
        <Light intialState={STOP} />
        <Light intialState={SLOW} />
        <Light intialState={GO} />
      </div>
    </div >
  );
}

export default App;
