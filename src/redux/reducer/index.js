import { combineReducers , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { addTodo } from "./addTodo";

export const rootReducer = combineReducers({
    todo : addTodo
});