import React, { Component } from 'react';
import './style.css';

class SearchHistory extends Component {
    
    render() {
        const {history} = this.props
        return (
            <div className="searchHistory">
              <div className="searchHistory__header">Search Records</div>
              <ul className="searchHistory__list">
                {
                  history.map((item, index) =>{
                    return <li key={item.id} onClick={this.handleClick.bind(this,item)}className="searchHistory__item">
                      {item.keyword}
                    </li>
                  })
                }
              </ul>
              <div className="searchHistory__clear" onClick={this.handleClearHistory}>清除搜索记录</div>
            </div>
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