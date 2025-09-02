import styled from "styled-components"

export const EventHandling = () => {

    function handleClick(){
        alert("Hey I am onClick Event.")
    }

    const handleWelcomeUser = (username) => {
        alert('hey welcome, ' + username);
    }

    return (
        <BodyStyle>
            {/* function component with named function, here we can't pass arguments here */}
            <ButtonStyle onClick={handleClick}>Click Me</ButtonStyle>
            <br />
            <br />
            {/* function calling with fat arrow function and we can pass arguments here */}
            <ButtonStyle onClick={(event) => handleClick(event)}>Click Me 2</ButtonStyle>
            <br />
            <br />
            {/* Inline event handlers */}
            <ButtonStyle onClick={(event) => console.log(event)}>Inline Function</ButtonStyle>
            <br />
            <br />
            {/* Function component with Inline arrow function */}
            <ButtonStyle onClick={() => alert('Hey I am Inline event function')}>Inline Arrow Function</ButtonStyle>
            <br />
            <br />
            {/* Passing arguments to event handlers */}
            <ButtonStyle onClick={()=>handleWelcomeUser("human being")}>Passing arguments</ButtonStyle>
        </BodyStyle>
    )
}

// styled components
const BodyStyle = styled.div({
    padding: '20px 30px'
})

const ButtonStyle = styled.button`
    padding: 1rem 2rem;
    color: white;
    background-color: black;
    cursor: pointer;
    font-size: 18px;
`