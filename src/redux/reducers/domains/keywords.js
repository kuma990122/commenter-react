export const schema = {
    name: 'keywords',
    id: 'id'
}

const reducer = (state = {}, action) =>{
    if(action.response && action.response.keywords) {
        return {...state, ...action.response.keywords}
    }
    return state;
}

export default reducer;

// selectors

export const getKeywordById = (state, id) => {
    const keyword = state.domains.keywords[id];
    return keyword
}