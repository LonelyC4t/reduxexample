import { combineReducers } from "redux";
import { counterReducer } from "../reducer/counterReducer";
import { secCounterReducer } from "../reducer/secCounterReducer";

export const mainReducer = combineReducers({
    secCounter: secCounterReducer ,
    counter: counterReducer 
});