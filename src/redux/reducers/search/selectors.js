import { getKeywordById } from "../domains/keywords";

//用于获取搜索框中的联想词汇
export const getInputKeywords = state =>{
    const word = state.SearchReducer.searchInputReducer;
    if(!word || word.trim().length === 0){
        return [];
    }
    const SearchKeywords = state.SearchReducer.searchKeywordsReducer[word];
    if(!SearchKeywords){
        return [];
    }
    
    return SearchKeywords.ids.map(id =>{
        return getKeywordById(state, id);
    })
}

export const getInputText = state =>{
    return state.SearchReducer.searchInputReducer;
}

//为什么这里historyKeywordsText显示的是未定义属性呀
export const getHistoryText = state =>{
    return state.SearchReducer.historyReducer?.map(id =>{
        return getKeywordById(state, id)
    })
}