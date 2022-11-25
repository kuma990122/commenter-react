import { combineReducers } from "redux";
import products from "./products";
import orders from "./orders";
import shops from "./shops";
import users from "./users";
import keywords from "./keywords";
import results from "./results";


//Merge the domain states
const mainReducer = combineReducers({
    products,shops,orders,users,keywords,results
})

export default mainReducer;