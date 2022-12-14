import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchBox from './components/SearchBox';
import SearchHistory from './components/SearchHistory';
import {loadKeywordsList, setInputKeyword, clearKeywordText, addInputToHistory, clearHistoryText, selectKeyword} from '../../redux/reducers/search/actionCreators';
import {getInputKeywords, getInputText, getHistoryText } from '../../redux/reducers/search/selectors';

class Search extends Component {
    render() {
        const {inputText, searchKeywords, historyKeywords} = this.props;
        return (
            <div>
                <SearchBox inputText={inputText} searchKeywords={searchKeywords}
                onChange={this.handleInputChange}
                onClear={this.handleInputClear}
                onCancel={this.handleCancel}
                onClickItem={this.handleItemClick}/>
                <SearchHistory historyKeywords={historyKeywords}
                onClickItem={this.handleItemClick}
                onClear={this.handleClearHistory}/>
            </div>
        );
    }
    
    handleInputChange = text =>{
        this.props.setInput(text);
        this.props.loadKeywords(text);
    }

    handleInputClear =() =>{
        this.props.clearKeyword();
    }

    handleCancel = () =>{
        this.props.clearKeyword();
        // this.props.history.goBack();
        window.history.back()
    }
    
    //Clicking logic of the keyword
    handleItemClick = item =>{
        this.props.setInput(item.keyword);
        this.props.addInput(item.id);
        this.props.selectKeyword(item.keyword);
        this.props.history.push("/search_result");
    }

    handleClearHistory = () =>{
        this.props.clearHistory();
    }

    componentWillUnmount = ()=>{
        this.props.clearKeyword();
    }
}

const mapStateToProps = (state, props) =>{
    console.log(state)
    return{
        searchKeywords: getInputKeywords(state),
        inputText: getInputText(state),
        historyKeywords: getHistoryText(state)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        loadKeywords: bindActionCreators(loadKeywordsList,dispatch),
        setInput: bindActionCreators(setInputKeyword, dispatch),
        clearKeyword: bindActionCreators(clearKeywordText, dispatch),
        addInput: bindActionCreators(addInputToHistory,dispatch),
        clearHistory: bindActionCreators(clearHistoryText, dispatch),
        selectKeyword: bindActionCreators(selectKeyword,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search);