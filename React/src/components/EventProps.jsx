
export const EventProps = () => {

    function handleWelcomeUser(str){
        alert("Hey welcome " + str);
    }

    function handleHover(){
        alert("Hey thanks for hovering on me.")
    }

    return (
        <>
            <WelcomeUser 
            onClick={()=> handleWelcomeUser("human being")} 
            onMouseEnter={handleHover}
            />
        </>
    )
}


const WelcomeUser = (props) => {

    const {onClick, onMouseEnter} = props;

    function handleGreeting(){
        alert("Hey User, Welcome");
        onClick();
    }

    return (
        <>
            <button onClick={onClick}>Click me</button>
            <button onMouseEnter={onMouseEnter}>Hover me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}