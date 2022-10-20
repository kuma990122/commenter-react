import * as constants from './constants';
import { combineReducers } from "redux";

const defaultState = {
    product: {
        isFetching: false,
        id: null,
      },
      relatedShop: {
        isFetching: false,
        id: null,
      }
}

const productReducer = (state = defaultState.product, action) =>{
    if(action.type === constants.FETCH_PRODUCT_DETAIL_REQUEST){
        return {...state, isFetching: true};
    }
    if(action.type === constants.FETCH_PRODUCT_DETAIL_SUCCESS){
        return {...state, id: action.id , isFetching : false }
    }
    if(action.type === constants.FETCH_PRODUCT_DETAIL_FAILURE){
        return {...state, isFetching: false, id:null}
    }
    return state;
}

const shopReducer = (state = defaultState.relatedShop,action) =>{
    if(action.type === constants.FETCH_SHOP_REQUEST){
        return {...state,isFetching: true};
    }
    if(action.type === constants.FETCH_SHOP_SUCCESS){
        return {...state, id: action.id, isFetching : false}
    }
    if(action.type === constants.FETCH_SHOP_FAILURE){
        return {...state, isFetching: false, id: null}
    }
    return state;
}   

const reducer = combineReducers(
    {
        productReducer,
        shopReducer
    }
)
export default reducer;