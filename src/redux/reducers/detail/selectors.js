import { getShopById } from "../domains/shops";
import { getProductById, getProductDetail } from "../domains/products";

//Selectors
export const getProduct = (state,id) =>{
    return getProductDetail(state, id);
}

export const getShop = (state, productId) => {
    const product = getProductById(state, productId);
    let shopId = product ? product.nearestShop : null;
    if(shopId){
        return getShopById(state, shopId);
    }
    return null;
}