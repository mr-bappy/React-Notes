import { configureStore, createSlice } from '@reduxjs/toolkit'
import { addTask, fetchTasks, taskReducer } from './features/tasks/taskSlice';

// const FETCH_TASKS = "task/fetch_tasks";

// creating store using redux toolkit
export const taskStore = configureStore({
    reducer: {
        taskReducer: taskReducer.reducer,
    },
})

// export const fetchTasks = () => {
//     return async (dispatch) => {
//         try{
//             const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
//             const task = await res.json();
//             dispatch({
//                 type: FETCH_TASKS,
//                 payload: task.map((curTask) => curTask.title)
//             })
//         }catch(error){  
//             console.log(error);
//         }
//     }
// }


// taskStore.dispatch(addTask("Buy fruits"));