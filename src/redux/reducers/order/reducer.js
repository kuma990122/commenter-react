import * as constants from './constants';

const defaultState ={
    isFetching: false,
    ids:[]
}

const orderReducer = (state = defaultState, action) =>{
    if(action.type === constants.FETCH_ORDER_REQUEST){
        return {...state, isFetching: true};
    }
    if(action.type === constants.FETCH_ORDER_SUCCESS){
        console.log(action.id);
        return {...state, ids: state.ids.concat(action.response.ids) , isFetching : false }
    }
    if(action.type === constants.FETCH_ORDER_FAILURE){
        return {...state, isFetching: false, id:null}
    }
    return state;
}

export default orderReducer;