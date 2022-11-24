import { API_DATA } from "../../middleware/api";
import { transformationalSchema as shopSchema ,getShopById} from "../domains/shops";
import * as constants from "./constants";
import { transformationalSchema as productSchema, getProductDetail} from "../domains/products";
import url from "../../../utils/url";

const fetchProductDetail = (finalUrl, id) => ({
    [API_DATA]: {
        types: [
          constants.FETCH_PRODUCT_DETAIL_REQUEST,
          constants.FETCH_PRODUCT_DETAIL_SUCCESS,
          constants.FETCH_PRODUCT_DETAIL_FAILURE,
        ],
        finalUrl,
        transformationalSchema: productSchema
      },
      id
})

const fetchShopById = (finalUrl, id) => ({
    [API_DATA]: {
        types: [
          constants.FETCH_SHOP_REQUEST,
          constants.FETCH_SHOP_SUCCESS,
          constants.FETCH_SHOP_FAILURE,
        ],
        finalUrl,
        transformationalSchema: shopSchema
      },
      id
})

export const loadProductDetail = (id) =>{
   return (dispatch, getState) =>{
    const product = getProductDetail(getState(),id);
      if(product) {
        return dispatch(fetchProductDetailSuccess(id))
      }
    const finalUrl = url.getProductDetail(id);
    return dispatch(fetchProductDetail(finalUrl,id));
   }
}

export const loadShopById = (id) =>{
    return (dispatch, getState) =>{
        const shop = getShopById(getState(),id);
          if(shop) {
            return dispatch(fetchShopSuccess(id))
          }
        const finalUrl = url.getShopById(id);
        return dispatch(fetchShopById(finalUrl,id));
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