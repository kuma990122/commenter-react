import * as constants from './constants';
import {get} from '../../../utils/request';
import {url} from '../../../utils/url';

const fetchLikesRequest = () =>({
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
}

