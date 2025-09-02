import { forwardRef, useId, useRef } from "react";


export const ForwardRef = () => {

    const username = useRef(null);
    const password = useRef(null);

    function handleSubmit(e){
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <BeforeReact19 label="username" ref={username}/>
            <BeforeReact19 label="password" ref={password}/>
            <button>submit</button>
        </form>
    )
}

// const BeforeReact19 = forwardRef((props, ref) => {
//     const id = useId();
//     return (
//         <div>
//             <label htmlFor={id}>{props.username}</label>
//             <input 
//             type="text"
//             style={{border:'2px solid black', margin:'20px'}} 
//             ref={ref}
//             />
            
//         </div>
//     )
// })


// after react 19
const BeforeReact19 = (props, ref) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{props.username}</label>
            <input 
            type="text"
            style={{border:'2px solid black', margin:'20px'}} 
            ref={props.ref}
            />
            
        </div>
    )
}