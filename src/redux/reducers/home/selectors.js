//Selectors
export const getLikes = state =>{
    return state.HomeReducer.likesReducer.ids.map(id =>{
        return state.domains.products[id]
    })
}

export const getLikesIsFetching = state =>{
    return state.HomeReducer.likesReducer.isFetching;
}

export const getDiscounts = state =>{
    return state.HomeReducer.discountsReducer.ids.map(id =>{
        return state.domains.products[id]
    })
}