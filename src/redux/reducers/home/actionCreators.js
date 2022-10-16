import * as constants from './constants';
import {get} from '../../../utils/request';
import url from '../../../utils/url';
import { FETCH_DATA } from '../../middleware/api';
import { schema } from "../domains/products";
import * as urlParams from './requestConst';

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

const fetchDiscounts = endpoint => ({
    [FETCH_DATA]: {
      types: [
        constants.FETCH_DISCOUNTS_REQUEST,
        constants.FETCH_DISCOUNTS_SUCCESS,
        constants.FETCH_DISCOUNTS_FAILURE
      ],
      endpoint,
      schema
    }
  });


export const loadList = () =>{
    return (dispatch, getState) => {
        const {pageCount} = getState().HomeReducer.likesReducer;
        const rowIndex = pageCount * urlParams.params.PAGE_SIZE_LIKES;
        const endpoint = url.getProductList(urlParams.params.PATH_LIKES, rowIndex, urlParams.params.PAGE_SIZE_LIKES); 
        return dispatch(fetchLikes(endpoint))
      }
}

export const loadDiscounts = () => {
    return (dispatch, getState) => {
        const endpoint = url.getProductList(
          constants.params.PATH_DISCOUNTS,
          0,
          constants.params.PAGE_SIZE_DISCOUNTS
        );
        return dispatch(fetchDiscounts(endpoint));
      };
}

