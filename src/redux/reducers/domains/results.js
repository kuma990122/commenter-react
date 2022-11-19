export const schema = {
    name: 'results',
    id: 'id'
}

const reducer = (state = {}, action) =>{
    if(action.response && action.response.results) {
        return {...state, ...action.response.results}
    }
    console.log(action,'deb')
    return state;
}

export default reducer;