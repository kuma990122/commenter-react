export const transformationalSchema = {
    name: 'results',
    id: 'id'
}

const reducer = (state = {}, action) =>{
    if(action.response && action.response.results) {
        return {...state, ...action.response.results}
    }
    return state;
}

export default reducer;