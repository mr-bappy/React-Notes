import { useDispatch, useSelector } from "react-redux"
import { addTask, deleteTask, fetchTasks } from "../features/tasks/taskSlice";
import { useEffect, useState } from "react";


export const ToDo = () => {

    const [taskValue, setTaskValue] = useState("");
    const [data, setData] = useState([]);

    const tasks = useSelector((state) => state.taskReducer.task);
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

    async function fetchData(){
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
            const task = await res.json();
            // const taskTitle = task.map((curTask) => curTask.title);
            setData(task.map((curTask) => curTask.title));
        }catch(error){  
            console.log(error);
        }
    }

    function handleFetchTasks(){
        return dispatch(fetchTasks(data));
    }

    useEffect(()=>{
        fetchData();
    },[])

    // console.log(data);

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
                    tasks?.map((curTask, index) => {
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