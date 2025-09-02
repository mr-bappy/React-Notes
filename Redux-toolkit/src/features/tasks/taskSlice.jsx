import { createSlice } from "@reduxjs/toolkit";


// creating initialState
const initialState = {
    task: []
}

// createSlice in redux toolkit - simplifying action creators & reducers
export const taskReducer = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask(state, action){
            state.task.push(action.payload);
        },
        deleteTask(state, action){
            state.task = state.task.filter((curTask, index) => index !== action.payload);
        },
        fetchTasks(state, action){
            state.task = [...state.task, ...action.payload];
        }
    }
});
// console.log(taskReducer);

export const { addTask, deleteTask, fetchTasks } = taskReducer.actions;
