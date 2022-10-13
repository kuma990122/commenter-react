import rootReducer from "./reducers";
import thunk from "redux-thunk";
import {compose, applyMiddleware, createStore} from "redux";
import api from "./middleware/api";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk,api)));

export default store 

