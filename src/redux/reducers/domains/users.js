export const transformationalSchema = {
    name: 'users',
    id: 'id'
}

const reducer = (state = {}, action) =>{
    if(action.response && action.response.users) {
        return {...state, ...action.response.users}
    }
    console.log(action,'action');
    return state;
}

export default reducer;

export const getUsersOrderById = (state, id) =>{
    const orderItem = state.domains.users[id];
    return orderItem;
}