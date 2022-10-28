import * as constants from './constants';
import url from '../../../utils/url';
import {schema as ResultSchema} from '../domains/results';
import { FETCH_DATA } from '../../middleware/api';

const fetchShopResults = (endpoint) =>({
    [FETCH_DATA]: {
        types: [
          constants.FETCH_RESULT_REQUEST,
          constants.FETCH_RESULT_SUCCESS,
          constants.FETCH_RESULT_FAILURE
        ],
        endpoint,
        ResultSchema
      }
})

export const loadShopResults = () =>{
    return(dispatch, getState) => {
        const { shopKeyword } = getState().SearchResultReducer;
        const keyword = getState().SearchReducer.selectedTextReducer;
        console.log(keyword);
        if( shopKeyword[keyword] ){  return null }

        const endpoint = url.getShopResults(keyword);
        return dispatch(fetchShopResults(endpoint));
    }
}