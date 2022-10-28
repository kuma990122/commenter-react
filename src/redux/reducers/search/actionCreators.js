import * as constants from './constants';
import url from '../../../utils/url';
import { FETCH_DATA } from '../../middleware/api';
import { schema as searchSchema} from '../domains/keywords';

const fetchSearchKeywords = (text, endpoint) => ({
    [FETCH_DATA]:{
        types:[
            constants.FETCH_INPUT_KEYWORDS_REQUEST,
            constants.FETCH_INPUT_KEYWORDS_SUCCESS,
            constants.FETCH_INPUT_KEYWORDS_FAILURE
        ],
        endpoint,
        schema: searchSchema
    },
    text
})
//load the related keywords as a list
export const loadKeywordsList =(text) =>{
    return (dispatch, getState) =>{
        const  keywordsList  = getState().SearchReducer.searchKeywordsReducer;
        if(keywordsList[text]){
            return keywordsList[text];
        }
        const endpoint = url.getSearchKeywords(text);
        return dispatch(fetchSearchKeywords(text, endpoint))
    }
}

//for setting the input text of the input
export const setInputKeyword = (text) =>({
   type: constants.SET_INPUT_KEYWORD_TEXT,
   text
})

//Click to clear the text in the input
export const clearKeywordText = () =>({
   type: constants.CLEAR_HISTORY_KEYWORD_TEXT
})

//add the used input to history list
export const addInputToHistory = (keywordId) =>({
   type: constants.ADD_HISTORY_KEYWORD_TEXT,
   keywordId
})

//clear all the content inside the history list
export const clearHistoryText = () =>({
   type: constants.CLEAR_HISTORY_KEYWORD_TEXT
})

export const selectKeyword = (text) =>({
   type: constants.SELECT_KEYWORD_TEXT,
   text
})