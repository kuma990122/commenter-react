import React, { Component } from 'react';
import { dataSource } from './shoppingListData';
import './style.css';
import ShoppingItem from '../ShoppingItem'; 


class ShoppingList extends Component {
    render() {
        return (
        <div className="shopList">
        <div className="shopList__list">
          {dataSource.map((item, index) => {
            return (
              <div key={item.id}>
                <ShoppingItem data={item} />
                <div className="shopList__divider" />
              </div>
            );
          })}
        </div>
      </div>
        );
    }
}

export default ShoppingList;