import * as constants from './constants.js';

const defaultState ={
    isFetching: false,
    ids:[],
    counts:[]
}

const reducer = (state = defaultState, action) =>{
    if(action.type === constants.FETCH_USER_ORDER_REQUEST){
        return {...state, isFetching: true};
    }
    if(action.type === constants.FETCH_USER_ORDER_SUCCESS){
        console.log(action.id);
        console.log(action.amount);
        return {...state, ids: state.ids.concat(action.response.ids),counts:state.counts.concat(action.response.counts) , isFetching : false }
    }
    if(action.type === constants.FETCH_USER_ORDER_FAILURE){
        console.log(action.id);
        return {...state, isFetching: false, id:null}
    }
    return state;
}

export default reducer;