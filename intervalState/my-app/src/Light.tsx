import React from 'react'
import { useState, useEffect } from 'react';

type StopLightState = "stop" | "slow" | "go"

const Light = ({ intialState }: { intialState?: StopLightState }) => {


    const [state, setState] = useState<StopLightState>(intialState ?? "stop")

    const STOP_DELAY = 3000;
    const SLOW_DELAY = 2000;
    const GO_DELAY = 10000;

    useEffect(() => {
        switch (state) {
            case "stop":
                setTimeout(() => { setState("slow") }, STOP_DELAY)
                break;

            case "slow":
                setTimeout(() => { setState("go") }, SLOW_DELAY)

                break;

            case "go":
                setTimeout(() => { setState("stop") }, GO_DELAY)

                break;
        }

    }, [state])



    const getStopLightClass = (lightstate: StopLightState) => {
        return `light ${lightstate} ${state === lightstate ? "on" : ""}`
    }
    return (

        <div className='lightContainer '>
            <div className={getStopLightClass("stop")}></div>
            <div className={getStopLightClass("slow")}></div>
            <div className={getStopLightClass("go")}></div>
        </div>
    )
}

export default Light
