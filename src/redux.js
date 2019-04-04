//create a store
import { createStore } from 'redux';

//initial State 
const initialState = {
  newTaskList: [],
  newTask: ''
};

//action
export const addNewTask = () => ({
  //console.log(task);
  type: "ADD TASK",
});

//delete a task
export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  payload: id,
})

export const captureInput = (task) => ({
  type: "CAPTURE_INPUT",
  payload: task,
})

//edit
export const editItem = (id, task) => {
  console.log(task);
  return {
    type: "EDIT_ITEM",
    payload: {
      id: id,
      value: task
    }
  }
}

// Reducer
export const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD TASK":
      // let newState = state;
      // newState.newTaskList = [...state.newTaskList, action.payload];
      //newState.newTask = action.payload;
      // return newState;
      return {
        ...state,
        newTaskList: [...state.newTaskList, state.newTask],
        newTask: ""
      }
    case "CAPTURE_INPUT":
      // let captureState = state;
      // captureState.newTask = action.payload;
      // return captureState;
      return {
        ...state,
        newTask: action.payload
      }
    case "DELETE_TASK":
      return {
        ...state,
        newTaskList: [...state.newTaskList.slice(0, action.payload), ...state.newTaskList.slice(action.payload + 1)]
      }
    case "EDIT_ITEM":
      return {
        ...state,
        newTaskList: [
          ...state.newTaskList.slice(0, action.payload.id),
          state.newTaskList[action.payload.id] = action.payload.value,
          ...state.newTaskList.slice(action.payload.id + 1)
        ]
      }
    // return {
    //   ...state,
    //   newTaskList: state.newTaskList.map(t => (
    //     if(t.id === action.payload.id) {
    //   return {
    //     ...t, t: action.payload.value
    //   }
    //   return t;
    // }
    //   ))
    // }

    default:
      return state;
  }

}

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());