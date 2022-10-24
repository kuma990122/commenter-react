import { combineReducers } from "redux";
import products from "./products";
import orders from "./orders";
import shops from "./shops";
import comments from "./comments";
import keywords from "./keywords";


//Merge the domain states
const mainReducer = combineReducers({
    products,shops,orders,comments,keywords
})

export default mainReducer;