import React, { Component } from 'react';
import './style.css';
import {SearchWrapper,
        SearchContainer,
        SearchInput,
        SearchClear,
        SearchCancel,
        SearchSuggest,
        SearchList,
        SearchItem,
        SearchItemKeyword,
        SearchItemQuantity} from './style.js';

class SearchBox extends Component {
    
    render() {
        const {inputText, searchKeywords} = this.props;
        return (
            <SearchWrapper>
                <SearchContainer>
                    <SearchInput value = {inputText} onChange={this.handleInputChange}/>
                    <SearchClear onClick = {this.handleInputClear}></SearchClear>
                    <SearchCancel onClick = {this.handleCancleEvent}>Cancel</SearchCancel> 
                </SearchContainer>
                {this.props.searchKeywords.length > 0 ? this.ListSuggestions() :null}
            </SearchWrapper>
        );
    }

    ListSuggestions(){
        return(
            <SearchList>
                <SearchSuggest>You may interested in :</SearchSuggest>
                {
                   this.props.searchKeywords.map(item => {
                    return (
                    <SearchItem key={item.id} onClick={this.handleClickItem.bind(this, item)}>
                        <SearchItemKeyword>{item.keyword}</SearchItemKeyword>
                        <SearchItemQuantity>with {item.quantity} results</SearchItemQuantity>
                        <br />
                    </SearchItem>
                    )
                   })
                }
            </SearchList>
        )
    }

    handleInputChange = (e) =>{
        this.props.onChange(e.target.value)
    }

    handleInputClear = () =>{
        this.props.onClear();
    }

    handleCancleEvent = () =>{
        this.props.onCancel();
    }
    handleClickItem = (item) =>{
        this.props.onClickItem(item)
    }
}

export default SearchBox;