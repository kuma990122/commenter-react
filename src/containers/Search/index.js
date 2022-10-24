import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchBox from './components/SearchBox';
import SearchHistory from './components/SearchHistory';
import {loadKeywordsList, setInputKeyword, clearKeywordText, addInputToHistory, clearHistoryText} from '../../redux/reducers/search/actionCreators';
import {getInputKeywords, getInputText, getHistoryText } from '../../redux/reducers/search/selectors';

class Search extends Component {
    render() {
        const {inputText, searchKeywords, history} = this.props;
        return (
            <div>
                <SearchBox inputText={inputText} searchKeywords={searchKeywords}
                onChange={this.handleInputChange}
                onClear={this.handleInputClear}
                onCancel={this.handleCancel}
                onClickItem={this.handleItemClick}/>
                <SearchHistory history={history}
                onClickItem={this.handleItemClick}
                onClear={this.handleClearHistory}/>
            </div>
        );
    }
    
    handleInputChange = text =>{
        this.props.setInput(text);
        this.props.loadKeywordsList(text);
    }

    handleInputClear =() =>{
        this.props.clearKeyword();
    }

    handleCancel = () =>{
        this.props.clearKeyword();
        this.props.history.goBack();
    }
    
    //Clicking logic of the keyword
    handleItemClick = item =>{
        this.props.setInput(item.keyword);
        this.props.addInput(item.id);
    }

    handleClearHistory = () =>{
        this.props.clearHistory();
    }

    componentWillUnmount = ()=>{
        this.props.clearKeyword();
    }
}

const mapStateToProps = (state, props) =>{
    return{
        searchKeywords: getInputKeywords(state),
        inputText: getInputText(state),
        history: getHistoryText(state)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        loadKeywords: bindActionCreators(loadKeywordsList,dispatch),
        setInput: bindActionCreators(setInputKeyword, dispatch),
        clearKeyword: bindActionCreators(clearKeywordText, dispatch),
        addInput: bindActionCreators(addInputToHistory,dispatch),
        clearHistory: bindActionCreators(clearHistoryText, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search);