import { taskStore } from "../../store";
import { addTask, deleteTask } from "./taskSlice";

taskStore.dispatch(addTask("Buy Tooth Brush"));
// console.log("updated state: ", taskStore.getState());

<taskStore className="dispatch"></taskStore>(addTask("Buy chips & cold drinks"));
// console.log("updated state: ", taskStore.getState());

taskStore.dispatch(addTask("Buy corn flour"));
// console.log("updated state: ", taskStore.getState());

taskStore.dispatch(addTask("Buy fruits"));
// console.log("updated state: ", taskStore.getState());

taskStore.dispatch(deleteTask(0));
// console.log("deleted state: ", taskStore.getState());