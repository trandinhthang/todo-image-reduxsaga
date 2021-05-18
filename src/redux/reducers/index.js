import { combineReducers } from "redux";

import TodoImage from "./TodoImageReducer";

const rootReducers = combineReducers({
  TodoImage: TodoImage,
});

export default rootReducers;
