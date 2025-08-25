import { useState } from 'react'
import './ToDoList.css'
import { ToDoItem } from './ToDoItem';
import { ToDoListItem } from './ToDoListItem';
import { DateTime } from './DateTime';

export const ToDoList = () => {

    const todosKey = "reactToDo";

    const [taskArr, setTaskArr] = useState(()=>{
        const rawToDo = localStorage.getItem(todosKey);
        if(!rawToDo) return [];
        return JSON.parse(rawToDo);;
    });

    function handleFormSubmit(task){

        const { id, content, isChecked } = task;
        // if(taskArr.includes(task)) {
        //     setTask("");
        //     return
        // }

        const ifToDoContentMatched = taskArr.find(
            (curTask) => curTask.content == content
        );

        if(ifToDoContentMatched){
            return
        }


        setTaskArr((prev) => [...prev, {id: id, content: content, isChecked: isChecked}]);
    }  

    // todo - add taskArr in localStorage
    localStorage.setItem(todosKey, JSON.stringify(taskArr));

    // handle delete
    function handleDeleteToDo(value){
        const updateTask = taskArr.filter((curTask) => curTask.content != value);
        setTaskArr(updateTask);
    } 

    function handleIsChecked(content){
        const updatedTask = taskArr.map((curTask) => {
            if(curTask.content === content){
                return {...curTask, isChecked: !curTask.isChecked}
            }else{
                return curTask;
            }
        })
        setTaskArr(updatedTask);
    }

    // console.log(taskArr);

    return (
        <section className='todo-container'>
            <header>
                <h1>To Do List</h1>
            </header>
            <DateTime/>
            <ToDoItem onAddToDo={handleFormSubmit}/>
            <section className="myUnOrdList">
                <ul>
                    {
                        taskArr.map((curTask) => {
                            return <ToDoListItem 
                            key={curTask.id} 
                            curTask={curTask.content}
                            handleDeleteToDo={handleDeleteToDo}
                            handleIsChecked={handleIsChecked}
                            checked={curTask.isChecked}
                            />
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={() => setTaskArr([])}>
                    clear all
                </button>
            </section>
        </section>
    )
}