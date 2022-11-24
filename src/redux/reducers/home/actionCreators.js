import * as constants from './constants';
import url from '../../../utils/url';
import { API_DATA } from '../../middleware/api';
import { transformationalSchema } from "../domains/products";
import * as urlParams from './requestConst';

//用中间件可处理的action结构 
const fetchLikes = (finalUrl) => ({
    [API_DATA]: {
      types: [
        constants.FETCH_LIKES_REQUEST,
        constants.FETCH_LIKES_SUCCESS,
        constants.FETCH_LIKES_FAILURE
      ],
      finalUrl,
      transformationalSchema
    }
})

const fetchDiscounts = finalUrl => ({
    [API_DATA]: {
      types: [
        constants.FETCH_DISCOUNTS_REQUEST,
        constants.FETCH_DISCOUNTS_SUCCESS,
        constants.FETCH_DISCOUNTS_FAILURE
      ],
      finalUrl,
      transformationalSchema
    }
  });


export const loadList = () =>{
    return (dispatch, getState) => {
        const {pageCount} = getState().HomeReducer.likesReducer;
        const rowIndex = pageCount * urlParams.params.PAGE_SIZE_LIKES;
        const finalUrl = url.getProductList(urlParams.params.PATH_LIKES, rowIndex, urlParams.params.PAGE_SIZE_LIKES); 
        return dispatch(fetchLikes(finalUrl))
      }
}

export const loadDiscounts = () => {
    return (dispatch, getState) => {
        const finalUrl = url.getProductList(
          constants.params.PATH_DISCOUNTS,
          0,
          constants.params.PAGE_SIZE_DISCOUNTS
        );
        return dispatch(fetchDiscounts(finalUrl));
      };
}

