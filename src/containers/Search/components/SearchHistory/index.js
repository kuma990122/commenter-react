import React, { Component } from 'react';
import './style.css';
import {SearchHistoryWrapper,
        SearchHistoryHeader,
        SearchHistoryList,
        SearchHistoryItem,
        SearchHistoryClear} from './style.js';
class SearchHistory extends Component {
    
    render() {
        const {historyKeywords} = this.props
        return (
            <SearchHistoryWrapper>
              <SearchHistoryHeader>Search Records</SearchHistoryHeader>
              <SearchHistoryList>
                {
                  historyKeywords.map((item, index) =>{
                    return <SearchHistoryItem key={item.id} onClick={this.handleClick.bind(this,item)}>
                      {item.keyword}
                    </SearchHistoryItem>
                  })
                }
              </SearchHistoryList>
              <SearchHistoryClear onClick={this.handleClearHistory}>Clear the search history</SearchHistoryClear>
            </SearchHistoryWrapper>
          );
    }

    handleClick = (item) => {
      this.props.onClickItem(item)
    }

    handleClearHistory = () =>{
      this.props.onClear();
    }
}

export default SearchHistory;