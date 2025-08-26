import { useBioContext } from "../../hooks/useContext"

export const Home = () => {
    
    const {username, email} = useBioContext();

    return (
        <div>
            <h1>Welcome User!</h1>
            <h1>Your name: {username}</h1>
            <h1>Your email: {email}</h1>
        </div>
    )
}