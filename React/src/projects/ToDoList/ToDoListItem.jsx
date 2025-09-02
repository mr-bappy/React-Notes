import { useState } from "react"
import { MdCheck, MdDeleteForever } from "react-icons/md"


export const ToDoListItem = ({curTask, handleDeleteToDo, checked, handleIsChecked}) => {

    return (
        <li className='todo-item'> 
            <span className={checked ? "checkList" : "notCheckList"}>{curTask}</span>
            <button className="check-btn" onClick={()=>handleIsChecked(curTask)}>
                <MdCheck/>
            </button>
            <button className="delete-btn" onClick={()=>handleDeleteToDo(curTask)}>
                <MdDeleteForever/>
            </button>
        </li>
    )
}