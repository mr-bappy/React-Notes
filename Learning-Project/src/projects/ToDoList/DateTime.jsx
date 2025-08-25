import { useEffect } from "react";
import { useState } from "react";

export const DateTime = () => {
    
    const [dateTime, setDateTime] = useState("")

    // todo data and time
    function getDateAndTime(){
        const objDate = new Date();
        const currentDate = objDate.toLocaleDateString();
        const currentTime = objDate.toLocaleTimeString();
        setDateTime(`${currentDate} - ${currentTime}`)
    }

    useEffect(()=>{
        setInterval(()=>{
            getDateAndTime();    
        },1000)

        return ()=>clearInterval();
    },[])

    return (
        <section>
            <h1>{dateTime}</h1>
        </section>
    )
}