import * as constants from './constants';
import url from '../../../utils/url';
import {transformationalSchema as ResultSchema} from '../domains/results';
import { API_DATA } from '../../middleware/api';

const  fetchShopResults = (text,finalUrl) =>({
    [API_DATA]: {
        types: [
          constants.FETCH_RESULT_REQUEST,
          constants.FETCH_RESULT_SUCCESS,
          constants.FETCH_RESULT_FAILURE
        ],
        finalUrl,
        transformationalSchema:ResultSchema
      },
      text
})

export const loadShopResults = () =>{
    return(dispatch, getState) => {
        // const { searchKeywordsReducer:shopKeyword } = getState().SearchResultReducer;
        const keyword = getState().SearchReducer.selectedTextReducer;
        // console.log(keyword,getState(),'897');
        if( getState().SearchResultReducer === keyword){  return [] }

        const finalUrl = url.getShopResults(keyword);
        return dispatch(fetchShopResults(keyword,finalUrl));
    }
}