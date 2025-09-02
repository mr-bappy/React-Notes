// import { useBioContext } from "../../hooks/useContext"

import { use } from "react"
import { BioContext } from "../../hooks/useContext"

export const About = () => {

    // const {about} = useBioContext();
    // let about = use(BioContext);
    let about;

    let newHook = true;
    if(newHook){
        ({about} = use(BioContext))
    }

    return (
        <div>
            <h1>
                {about}
            </h1>
        </div>
    )
}