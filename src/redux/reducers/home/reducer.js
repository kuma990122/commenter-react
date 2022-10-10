import * as constants from './constants';

const defaultState = {

}
// UI状态
const reducer = (state = defaultState, action) =>{
    if(action.type === constants.FETCH_LIKES_REQUEST){
        //todo
    }
    if(action.type === constants.FETCH_LIKES_SUCCESS){
        //todo
    }
    if(action.type === constants.FETCH_LIKES_FAILURE){
        //todo
    }
    return state;
}

export default reducer;