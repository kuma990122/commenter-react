export const getResultShops = (state) => {
    console.log(state,'state')
    const keyword = state.SearchReducer.selectedTextReducer;
    if(!keyword){
        return []
    }
    return state.SearchResultReducer.ids.map(id =>{
        return state.domains.results[id]
    })
}