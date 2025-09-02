import { useDispatch, useSelector } from "react-redux"
import { addTask, deleteTask, fetchTasks } from "../store";
import { useState } from "react";


export const ToDo = () => {

    const [taskValue, setTaskValue] = useState("");

    const tasks = useSelector((state) => state.task);
    // console.log(tasks);

    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        taskValue===""?alert("enter a task"):dispatch(addTask(taskValue));
        return setTaskValue("");
    }

    function handleDelete(getIndex){
        return dispatch(deleteTask(getIndex));
    }

    function handleFetchTasks(){
        return dispatch(fetchTasks());
    }

    return (
    <div>
        <div>
            <h1>To Do List</h1>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    type="text"
                    placeholder="enter task..."
                    value={taskValue}
                    onChange={(e)=>setTaskValue(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        <div>
            <button onClick={handleFetchTasks}>Fetch Tasks</button>
        </div>
        <div>
            <ul>
                {
                    tasks.map((curTask, index) => {
                        return <li key={index}>
                            <p>{curTask}</p>
                            <button onClick={()=>handleDelete(index)}>delete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
    )
}