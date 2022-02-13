import {createStore} from "redux";
import reducer from "../reducers";

let initialState = {}

let store = createStore(reducer, initialState);

export default store;