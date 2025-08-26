import { useId } from "react"


export const UseId = () => {

    // const usernameID = useId();
    // const emailID = useId();
    // const passwordID = useId();

    // return (
    //     <form>
    //         <div>
    //             <label htmlFor={usernameID}>Username:</label>
    //             <input type="text" name="username" id={usernameID}/>
    //         </div>
    //         <div>
    //             <label htmlFor={passwordID}>Password:</label>
    //             <input type="password" name="password" id={passwordID}/>
    //         </div>
    //         <div>
    //             <label htmlFor={emailID}>Email:</label>
    //             <input type="email" name="email" id={emailID}/>
    //         </div>
    //         <button type="submit">Submit</button>
    //     </form>
    // )

    const id = useId();

    return (
        <form>
            <div>
                <label htmlFor={id + "usernameID"}>Username:</label>
                <input type="text" name="username" id={id + "usernameID"}/>
            </div>
            <div>
                <label htmlFor={id + "passwordID"}>Password:</label>
                <input type="password" name="password" id={id + "passwordID"}/>
            </div>
            <div>
                <label htmlFor={id + "emailID"}>Email:</label>
                <input type="email" name="email" id={id + "emailID"}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}