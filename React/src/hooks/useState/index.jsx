import { useState } from "react"

export const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div 
        className="container state-container"
        style={{textAlign:'center'}}
        >
            <h1 style={{fontSize:'3rem'}}>useState Hook!</h1>
            <br />
            <p>Count: {count} </p>
            <button
            style={{color:'#fff'}}
            onClick={()=>setCount(count+1)}
            >Increment</button>
        </div>
    )
}