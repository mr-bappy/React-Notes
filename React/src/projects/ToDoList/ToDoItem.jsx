import { useState } from "react";

export const ToDoItem = ({onAddToDo}) => {

    const [task, setTask] = useState({});

    function handleInputChange(value){
        setTask({
            id: value,
            content: value,
            isChecked: false, 
        });
    }

    function handleFormSubmit(e){
        e.preventDefault();
        if(task.content.trim() === "") return
        onAddToDo(task);
        setTask({
            id: "",
            content: "",
            isChecked: false, 
        });
        return
    }

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input 
                    type="text" 
                    className='todo-input'
                    autoComplete='off'
                    onChange={(e)=>handleInputChange(e.target.value)}
                    value={task.content}
                    />
                </div>
                <div>
                    <button type='submit' className="todo-btn">Add Task</button>
                </div>
            </form>
        </section>
    )
}