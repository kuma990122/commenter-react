import * as constants from './constants';

const defaultState = {
    error: null
}

const reducer = (state = defaultState, action) =>{
    const { type, error } = action;
    if(type === constants.CLEAR_ERROR){
        return {...state, error: null}
    }
    else if(error){
        return {...state,error:error}
    }
    return state;
}

export default reducer;

//返回值存疑？
export const getError = (state) =>{
    return state.AppReducer.error;
}