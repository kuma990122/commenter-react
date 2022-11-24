export const transformationalSchema = {
    name : 'orders',
    id : 'id',
}

const reducer = (state = {}, action) =>{
    if(action.response && action.response.orders) {
        return {...state, ...action.response.orders}
    }
    return state;
}

export default reducer;

export const getProductById = (state, id) =>{
    const product = state.domains.orders[id];
    return product;
}