import * as constants from './constants';
import url from '../../../utils/url';
import {schema as ResultSchema} from '../domains/results';
import { FETCH_DATA } from '../../middleware/api';

const  fetchShopResults = (text,endpoint) =>({
    [FETCH_DATA]: {
        types: [
          constants.FETCH_RESULT_REQUEST,
          constants.FETCH_RESULT_SUCCESS,
          constants.FETCH_RESULT_FAILURE
        ],
        endpoint,
        schema:ResultSchema
      },
      text
})

export const loadShopResults = () =>{
    return(dispatch, getState) => {
        // const { searchKeywordsReducer:shopKeyword } = getState().SearchResultReducer;
        const keyword = getState().SearchReducer.selectedTextReducer;
        // console.log(keyword,getState(),'897');
        if( getState().SearchResultReducer === keyword){  return [] }

        const endpoint = url.getShopResults(keyword);
        return dispatch(fetchShopResults(keyword,endpoint));
    }
}