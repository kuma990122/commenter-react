
//name标识了领域实体的类型， id标识了领域实体的字段，使用id来检索对应数据 
export const transformationalSchema = {
    name : 'products',
    id : 'id',
}

const reducer = (state = {}, action) =>{
    if(action.response && action.response.products) {
        return {...state, ...action.response.products}
    }
    return state;
}

export default reducer;

//selectors
export const getProductDetail = (state, id) => {
    const product = state.domains.products[id];
    return product && product.detail && product.purchaseNotes ? product :  null;
}

export const getProductById = (state, id) =>{
    const product = state.domains.products[id];
    return product;
}