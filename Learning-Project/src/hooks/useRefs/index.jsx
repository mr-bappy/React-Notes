import { useRef } from "react";


export const UseRef = () => {

    // in normal javascript taking referece of element
    // const username = document.getElementById('username');
    // const password = document.getElementById('password');

    // in react taking reference - recommended because you are using react not vanilla js
    const username = useRef(null);
    const password = useRef(null);

    function handleSubmit(e){
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                style={{border:'2px solid black', margin:'20px'}}
                // id="username"
                ref={username}
                />
                <input 
                type="text" 
                style={{border:'2px solid black', margin:'20px'}}
                // id="password"
                ref={password}
                /> <br />
                <button>submit</button>
            </form>
        </div>
    )
}