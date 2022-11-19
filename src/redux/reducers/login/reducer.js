import * as constants from './constants';

const defaultState = {
    loginStatus: false
}

const reducer = (state = defaultState, action) =>{
    if(action.type === constants.CHANGE_LOGIN_STATUS){
        return {
            loginStatus: action.value
        }
    }
    if(action.type === constants.LOG_OUT){
        return {
            loginStatus: action.value
        }
    }

    return state;
} 

export default reducer;