import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware, createStore} from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export default store 

