//合并所有的UI状态和领域状态
import { combineReducers } from "redux";
import domains from "./domains";
import {reducer as HomeReducer} from "./home";
import {reducer as DetailReducer} from "./detail";
import {reducer as AppReducer} from "./app";
import {reducer as SearchReducer} from "./search";

const rootReducer = combineReducers({
    domains,
    HomeReducer,
    DetailReducer,
    AppReducer,
    SearchReducer
})

export default rootReducer;