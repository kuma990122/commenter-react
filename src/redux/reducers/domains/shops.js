export const schema = {
    name: 'shops',
    id: 'id'
}

const reducer = (state = {}, action) =>{
    if(action.response && action.response.shops) {
        return {...state, ...action.response.shops}
    }
    return state;
}

export default reducer;

// selectors
export const getShopById = (state, id) => {
    const shop = state.domains.shops[id];
    return shop;
};