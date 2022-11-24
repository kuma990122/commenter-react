import { API_DATA } from "../../middleware/api";
import { transformationalSchema as orderSchema, getProductById} from "../domains/orders";
import url from "../../../utils/url";
import * as constants from "./constants";

const fetchProductById = (finalUrl, id) => ({
    [API_DATA]: {
        types: [ 
          constants.FETCH_ORDER_REQUEST,
          constants.FETCH_ORDER_SUCCESS,
          constants.FETCH_ORDER_FAILURE,
        ],
        finalUrl,
        transformationalSchema: orderSchema
      },
      id
})

export const loadProductById = (id) =>{
    return (dispatch, getState) =>{
        const order = getProductById(getState(),id);
          if(order) {
            return dispatch(fetchOrderSuccess(id))
          }
        const finalUrl = url.getProductDetail(id);
        return dispatch(fetchProductById(finalUrl,id));
       }
}

//The action
const fetchOrderSuccess = (id) =>({
    type: constants.FETCH_ORDER_SUCCESS,
    id,
}) 