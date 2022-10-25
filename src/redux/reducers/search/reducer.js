import { combineReducers } from 'redux';
import * as constants from './constants';

const defaultState = {
    inputText:'',
    /* 
     structure of SearchKeywords:
     {
        'Cake':{
            isFetching: false,
            ids:[]
        }
     }
    */
    SearchKeywords:{},
    historyKeywordsText: [] 
    //save the keywords' id
};

const searchKeywordsReducer = (state = defaultState.SearchKeywords, action) =>{
    switch(action.type){
        case constants.FETCH_INPUT_KEYWORDS_REQUEST:
        case constants.FETCH_INPUT_KEYWORDS_SUCCESS:
        case constants.FETCH_INPUT_KEYWORDS_FAILURE:
            return {
                ...state,
                [action.text]: searchKeywordByText(state[action.text],action)
            }
        default:
            return state;
    }
}

//因为reducer获取的数据结构为嵌套式，因此这里再使用一个reducer以获取对应数据
const searchKeywordByText = ( state ={isFetching: false, ids:[]}, action) =>{
    switch(action.type){
        case constants.FETCH_INPUT_KEYWORDS_REQUEST:
            return {...state, isFetching: true}
        case constants.FETCH_INPUT_KEYWORDS_SUCCESS:
            return {...state, isFetching: false, ids:state.ids.concat(action.response.ids)}
        case constants.FETCH_INPUT_KEYWORDS_FAILURE:
            return {...state, isFetching: false};
        default:
            return state;
    }
}

const searchInputReducer = (state = defaultState.inputText, action) =>{
    if(action.type === constants.SET_INPUT_KEYWORD_TEXT){
        return action.text
    }
    if(action.type === constants.CLEAR_INPUT_KEYWORD_TEXT){
        return ""
    }

    return state;
}

const historyReducer = (state = defaultState.historyKeywordsText, action) => {
    if(action.type === constants.ADD_HISTORY_KEYWORD_TEXT){
        const data = state.filter(item => {
            if(item !== action.text){
                return true;
            }
            return false;
        })
        return [action.text, ...data];
    }
    if(action.type === constants.CLEAR_HISTORY_KEYWORD_TEXT){
        return [];
    }

    return state;
}

const reducer = combineReducers({
    searchKeywordsReducer,
    searchInputReducer,
    historyReducer
})

export default reducer;

