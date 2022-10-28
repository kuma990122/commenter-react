export default {
    getProductList: (path,rowIndex, pageSize) => `/mock/products/${path}.json?rowIndex=${rowIndex}&pageSize=${pageSize}`,
    getProductDetail: (id) => `/mock/product_detail/${id}.json`,
    getShopById: (id) => `/mock/shops/${id}.json`,
    getSearchKeywords:(word) => `/mock/search/search.json?keyword=${word}`,
    getShopResults : (word) => `/mock/search_result/${word}.json`
  }