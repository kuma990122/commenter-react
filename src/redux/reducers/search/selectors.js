import { getKeywordById } from "../domains/keywords";

//用于获取搜索框中的联想词汇
export const getInputKeywords = state =>{
    const word = state.SearchReducer.inputText;
    if(!word || word.trim().length === 0){
        return [];
    }
    const SearchKeywords = state.SearchReducer.SearchKeywords[word];
    if(!SearchKeywords){
        return [];
    }
    
    return SearchKeywords.ids.map(id =>{
        return getKeywordById(state, id);
    })
}

export const getInputText = state =>{
    return state.SearchReducer.inputText;
}

//为什么这里historyKeywordsText显示的是未定义属性呀
export const getHistoryText = state =>{
    return state.SearchReducer.historyKeywordsText.map(id =>{
        return getKeywordById(state, id)
    })
}