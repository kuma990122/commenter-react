import { FETCH_DATA } from "../../middleware/api";
import { schema as shopSchema ,getShopById} from "../domains/shops";
import * as constants from "./constants";
import { schema as productSchema, getProductDetail} from "../domains/products";
import url from "../../../utils/url";

const fetchProductDetail = (endpoint, id) => ({
    [FETCH_DATA]: {
        types: [
          constants.FETCH_PRODUCT_DETAIL_REQUEST,
          constants.FETCH_PRODUCT_DETAIL_SUCCESS,
          constants.FETCH_PRODUCT_DETAIL_FAILURE,
        ],
        endpoint,
        schema: productSchema
      },
      id
})

const fetchShopById = (endpoint, id) => ({
    [FETCH_DATA]: {
        types: [
          constants.FETCH_SHOP_REQUEST,
          constants.FETCH_SHOP_SUCCESS,
          constants.FETCH_SHOP_FAILURE,
        ],
        endpoint,
        schema: shopSchema
      },
      id
})

export const loadProductDetail = (id) =>{
   return (dispatch, getState) =>{
    const product = getProductDetail(getState(),id);
      if(product) {
        return dispatch(fetchProductDetailSuccess(id))
      }
    const endpoint = url.loadProductDetail(id);
    return dispatch(fetchProductDetail(endpoint,id));
   }
}

export const loadShopById = (id) =>{
    return (dispatch, getState) =>{
        const shop = getShopById(getState(),id);
          if(shop) {
            return dispatch(fetchShopSuccess(id))
          }
        const endpoint = url.loadShopById(id);
        return dispatch(fetchShopById(endpoint,id));
       }
}

//The actions
const fetchProductDetailSuccess = (id) =>({
    type: constants.FETCH_PRODUCT_DETAIL_SUCCESS,
    id,
}) 

const fetchShopSuccess = (id) => ({
    type: constants.FETCH_SHOP_SUCCESS,
    id,
})