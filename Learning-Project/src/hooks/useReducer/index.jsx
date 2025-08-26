// import { useState } from "react";

import { useReducer } from "react"


export const UseReducer = () => {

    // const [count, setCount] = useState(0);

    const initialState = {
        count:0,
        inc:2,
        dec:2
    }

    function reducer(state, action){
        // if(action.type==="INCREMENT") return state+1;
        // if(action.type==="DECREMENT") return state<=0?state=0:state-1;
        // if(action.type==="RESET") return state=0;

        switch(action.type){
            case "INCREMENT":
                return {
                    ...state,
                    count: state.count+state.inc
                }
            case "DECREMENT":
                return {
                    ...state,
                    count: state.count<=0?0:state.count-state.dec
                }
            case "RESET":
                return {
                    ...state,
                    count:0
                }
            default:
                return state;
        }
    }

    // const [current state, to send actions to reducer function] = useReducer(function to perform action, initialState)
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div
        className="p-4 h-lvh flex flex-col justify-center items-center"
        >
            <h1 className="text-[100px]">{state.count}</h1>
            <button 
            className="text-white text-[25px]"
            onClick={()=> dispatch({type:"INCREMENT"})} // we are passing an object as argument in dispatch function
            >Increment</button>
            <button 
            className="text-white text-[25px]"
            onClick={()=>dispatch({type:"DECREMENT"})} // we are passing an object as argument in dispatch function
            >Decrement</button>
            <button 
            className="text-white text-[25px]"
            onClick={()=>dispatch({type:"RESET"})} // we are passing an object as argument in dispatch function
            >Reset</button>
        </div>
    )
}