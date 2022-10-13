//合并所有的UI状态和领域状态
import { combineReducers } from "redux";
import domains from "./domains";
import {reducer as HomeReducer} from "./home";
import detail from "./detail";
import {reducer as AppReducer} from "./app";

const rootReducer = combineReducers({
    domains,
    HomeReducer,
    detail,
    AppReducer
})

export default rootReducer;