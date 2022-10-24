import React, { Component } from 'react';
import './style.css';

class SearchBox extends Component {
    
    render() {
        const {inputText, searchKeywords} = this.props;
        return (
            <div className='searchBox'>
                <div className='searchBox__container'>
                    <input className='searchBox__text' value = {inputText} onChange={this.handleInputChange}/>
                    <span className='searchBox__clear' onClick = {this.handleInputClear}></span>
                    <span className='searchBox__cancel'onClick = {this.handleCancleEvent}>Cancel</span> 
                </div>
                {this.props.searchKeywords.length > 0 ? this.ListSuggestions() :null}
            </div>
        );
    }

    ListSuggestions(){
        return(
            <ul>
                {
                   this.props.searchKeywords.map(item => {
                    return (
                    <li key={item.id} className='searchBox__item' onClick={this.handleClickItem.bind(this, item)}>
                        <span className='searchBox__itemKeyword'>{item.keyword}</span>
                        <span className='searchBox__itemQuantity'>with {item.quantity} results</span>
                    </li>
                    )
                   })
                }
            </ul>
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