import { useState } from "react"

export const State = () => {

    // let value = 0;

    
    // console.log(useState());
    
    const [value, setValue] = useState(0)
    console.log('Parent Component rendered');
    function handleButtonClick(){
        // value++;
        // console.log(value);
        setValue(() => value+1);
    }

    return (
        <>
            <div>
                <h1 style={{fontSize: '9rem', padding:'6rem'}}>{value}</h1>
                <button onClick={handleButtonClick}>Increment</button>
            </div>
            <ChildComponent/>
        </>
    )
}


const ChildComponent = () => {
    console.log('Child Component rendered');
    return (
        <h1 style={{fontSize:'4rem'}}>child component</h1>
    )
}


export const SiblingComponent = () => {
    console.log('Sibling Component rendered');
    return (
        <h1 style={{fontSize:'4rem'}}>child component</h1>
    )
}