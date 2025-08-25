import { useState } from 'react';
import './ToggleSwitch.css';

export const ToggleSwitch = () => {

    const [isOn, setIsOn] = useState(false);
    const checkIsOn = isOn ? 'on' : 'off';
    const toggleBgColor = {backgroundColor:isOn ? '#4caf50' : '#f44336'};

    function handleToggleSwitch(){
        setIsOn(!isOn);
    }

    return (
        <div className='toggle-switch' style={toggleBgColor} onClick={handleToggleSwitch}>
            <div className={`switch ${checkIsOn}`} >
                <span className='switch-state'>{checkIsOn}</span>
            </div>
        </div>
    )
}