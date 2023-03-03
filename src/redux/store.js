import {  createStore } from "redux"
import { myInitialState } from "./initialState";
import { mainReducer } from "./reducer/useReducer";

export let state = createStore(mainReducer, myInitialState);