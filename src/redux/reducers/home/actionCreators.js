import * as constants from './constants';
import {get} from '../../../utils/request';
import url from '../../../utils/url';
import { FETCH_DATA } from '../../middleware/api';
import { schema } from "../domains/products";

//用中间件可处理的action结构 
const fetchLikes = (endpoint) => ({
    [FETCH_DATA]: {
      types: [
        constants.FETCH_LIKES_REQUEST,
        constants.FETCH_LIKES_SUCCESS,
        constants.FETCH_LIKES_FAILURE
      ],
      endpoint,
      schema
    }
})


export const loadList = () =>{
    return (dispatch, getState) => {
        const endpoint = url.getProductList(0, 10)
        return dispatch(fetchLikes(endpoint))
      }
}

/*const fetchLikesRequest = () =>({
    type: constants.FETCH_LIKES_REQUEST
})

const fetchLikesSuccess = (data) =>({
    type: constants.FETCH_LIKES_SUCCESS,
    data
})

const fetchLikesFailure = (error) =>({
    type: constants.FETCH_LIKES_REQUEST,
    error
})


//The action for loading the main page recommendation list
export const loadList = () =>{
    return (dispatch,getState) =>{
       dispatch(fetchLikesRequest());
       return get(url.getProductList(0,10)).then(
        data => {
            dispatch(fetchLikesSuccess(data))
        },
        error => {
            dispatch(fetchLikesFailure(error))
        }
       )
    }
}*/

