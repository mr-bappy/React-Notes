import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

// creating types or conditions
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASKS = "task/fetch_tasks";

// creating initialState
const initialState = {
    task: [],
    isLoading: false,
}

// creating reducer function
const taskReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TASK:
            return {
                ...state, 
                task: [...state.task, action.payload],
            };
        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index) => index !== action.payload)
            return {
                ...state,
                task: updatedTask,
            };
        case FETCH_TASKS:
            return {
                ...state,
                task: [...state.task, ...action.payload],
            };
        default:
            return state;
    }
}

// creating store 
export const taskStore = createStore(taskReducer, composeWithDevTools(
    applyMiddleware(thunk)
));
// console.log(taskStore);

// calling dispatch method - type: ADD_TASK
// taskStore.dispatch({
//     type: ADD_TASK,
//     payload: "Buy Tomato Ketchup."
// })
// console.log("updated state: ", taskStore.getState());

// calling dispatch method - type: ADD_TASK
// taskStore.dispatch({
//     type: ADD_TASK,
//     payload: "Buy Corn Flour."
// })
// console.log("updated state:", taskStore.getState());

// calling dispatch method - type: DELETE_TASK
// taskStore.dispatch({
//     type: DELETE_TASK,
//     payload: 1,
// })
// console.log("deleted state", taskStore.getState());

// creating actions for different conditions
export const addTask = (data) => {
    return {
        type: ADD_TASK,
        payload: data,
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id,
    }
}

export const fetchTasks = () => {
    return async (dispatch) => {
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
            const task = await res.json();
            dispatch({
                type: FETCH_TASKS,
                payload: task.map((curTask) => curTask.title)
            })
        }catch(error){  
            console.log(error);
        }
    }
}

taskStore.dispatch(addTask("Buy Tooth Brush"));
// console.log("updated state: ", taskStore.getState());

taskStore.dispatch(addTask("Buy chips & cold drinks"));
// console.log("updated state: ", taskStore.getState());

taskStore.dispatch(addTask("Buy corn flour"));
// console.log("updated state: ", taskStore.getState());

taskStore.dispatch(addTask("Buy fruits"));
// console.log("updated state: ", taskStore.getState());

taskStore.dispatch(deleteTask(0));
// console.log("deleted state: ", taskStore.getState());