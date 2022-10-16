import * as constants from './constants';
import { combineReducers } from "redux";

const defaultState = {
    likes:{
        isFetching: false,
        ids:[],
    },
    discounts:{
        isFetching:false,
        ids:[],
    }
}

const likesReducer = (state = defaultState.likes, action) => {
    if(action.type === constants.FETCH_LIKES_REQUEST){
        return { ...state, isFetching : true};
    }
    if(action.type === constants.FETCH_LIKES_SUCCESS){
        return {
            ...state,
            isFetching: false,
            ids: state.ids.concat(action.response.ids)
        };
    }
    if(action.type === constants.FETCH_LIKES_FAILURE){
        return {...state, isFetching: false}
    }
    return state;
}

const discountsReducer = (state = defaultState.discounts, action) =>{
    if(action.type === constants.FETCH_DISCOUNTS_REQUEST){
        return {...state, isFetching: true}
    }
    if(action.type === constants.FETCH_DISCOUNTS_SUCCESS){
        return {
            ...state,
            isFetching: false,
            ids: state.ids.concat(action.response.ids)
        };
    }
    if(action.type === constants.FETCH_DISCOUNTS_FAILURE){
        return {...state, isFetching: false}
    }
    return state;
}

const reducer = combineReducers({
    likesReducer,
    discountsReducer
})


export default reducer;