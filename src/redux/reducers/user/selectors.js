export const getUserOrders = state =>{
    return state.UserOrderReducer.ids.map(id =>{
        return state.domains.products[id]
    })
}