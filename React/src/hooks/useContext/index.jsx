import { createContext, useContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({children}) => {

    const username = "Vishal Yennam";
    const email = "mr.justbappy@gmail.com";
    const about = `Hey guys, My name is ${username}. I am a Web developer and Tech Enthusiast. I am seeking for a internship to gain hands-on experience before graduation. You can contact me at ${email}`

    return <BioContext.Provider value={{username, email, about}}>
        {children}
    </BioContext.Provider>
}

// custom hook
export const useBioContext = () => {
    const context = useContext(BioContext);
    if(context === undefined) throw new Error("chutiya hai kya!! BioProvider ke ander component rakk bsdk!!")
    return context;
}