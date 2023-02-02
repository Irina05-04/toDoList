import { tasksListSelector } from "../selectors/task.selectors";
import * as tasksGateway from "../tasksGateway";

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';
export const TASK_UPDATE = 'TASK_UPDATE';

export const taskListRecieved = (tasksList) => {
   const action = {
      type: TASKS_LIST_RECIEVED,
      payload: {
         tasksList,
      }
   }
   return action;
}

export const getTasksList = () => {
   const thunkAction = function(dispatch){
      tasksGateway.getAllTasks().then(tasksList => dispatch(taskListRecieved(tasksList)))
   }
   return thunkAction;
}

export const updateTask = (id) => {
   const thunkAction = function(dispatch, getState){
      const state = getState();
      const tasksList = tasksListSelector(state);
      const task = tasksList.find((task) => (task.id === id));
      const updatedTask = {
         ...task,
        done: !task.done,
      };
      tasksGateway.updateTask(id,updatedTask).then(() => dispatch(getTasksList()));
   }
   return thunkAction;
}

export const deleteTask = (id) => {
   const thunkAction = function(dispatch){
      tasksGateway.deleteTask(id).then(() => dispatch(getTasksList()));
   }
   return thunkAction;
}

export const createTask = (text) => {
   const thunkAction = function(dispatch){
      const newTask = {
         text,
         done: false,
       };
      tasksGateway.createTask(newTask).then(() => dispatch(getTasksList()));
   }
   return thunkAction;
}