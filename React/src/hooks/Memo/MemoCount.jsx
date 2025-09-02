import { memo } from "react";
import { useRef } from "react";


const Counts = () => {
    const renderCount = useRef(0);
    console.log(renderCount);

    return (
        <div>
            <p>
                Nothing changed here but I've been rendered: 
                <span className="text-red-600">{renderCount.current++} time(s)</span>
            </p>
        </div>
    )
}

export default memo(Counts);