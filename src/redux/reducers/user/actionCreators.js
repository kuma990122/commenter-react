import { API_DATA } from "../../middleware/api";
import { transformationalSchema as userSchema, getUsersOrderById } from "../domains/users";
import url from "../../../utils/url";
import * as constants from "./constants.js";

const fetchUserOrderById = (finalUrl, id,count) => ({
    [API_DATA]: {
        types: [ 
          constants.FETCH_USER_ORDER_REQUEST,
          constants.FETCH_USER_ORDER_SUCCESS,
          constants.FETCH_USER_ORDER_FAILURE,
        ],
        finalUrl,
        transformationalSchema: userSchema
      },
      id,
      count
})

export const loadUserOrderById = (id,count) =>{
    return (dispatch, getState) =>{
        const order = getUsersOrderById(getState(),id);
          if(order) {
            return dispatch(fetchUserOrderSuccess(id))
          }
        const finalUrl = url.getProductDetail(id);
        return dispatch(fetchUserOrderById(finalUrl,id,count));
       }
}

const fetchUserOrderSuccess = (id) =>({
    type: constants.FETCH_USER_ORDER_SUCCESS,
    id,
}) 

