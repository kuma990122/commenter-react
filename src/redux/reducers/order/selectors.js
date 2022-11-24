import { getProductById } from "../domains/orders";

//Selectors
export const getOrder = (state,id) =>{
    return getProductById(state, id);
}