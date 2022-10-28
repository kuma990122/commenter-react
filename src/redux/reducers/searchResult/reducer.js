import * as constants from './constants';

const defaultState ={
    shopKeyword :{
        isFetching: false,
        ids:[]
    }
}

const reducer = (state = defaultState.shopKeyword , action) =>{
    if(action.type ===constants.FETCH_RESULT_REQUEST){
        return { ...state, isFetching : true};
    }
    if(action.type === constants.FETCH_RESULT_SUCCESS){
        return {
            ...state,
            isFetching: false,
            ids: state.ids.concat(action.response.ids)
        };
    }
    if(action.type === constants.FETCH_RESULT_FAILURE){
        return {...state, isFetching: false}
    }

    return state;
}

export default reducer;