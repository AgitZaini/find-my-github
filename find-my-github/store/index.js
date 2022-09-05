import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducer";

const middlewares = applyMiddleware(thunk);
const store = createStore(dataReducer, middlewares);
export default store;
