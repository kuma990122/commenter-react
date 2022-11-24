import React, { Component } from 'react';
import { ShoppingListWrapper,
         ShoppingL1st,
         ShoppingListBreaker } from './style';
import ShoppingItem from '../ShoppingItem'; 


class ShoppingList extends Component {
    render() {
        const {dataSource} = this.props;
        return (
        <ShoppingListWrapper>
        <ShoppingL1st>
          {dataSource.map((item, index) => {
            return (
              <div key={index}>
                <ShoppingItem data={item} />
                <ShoppingListBreaker />
              </div>
            );
          })}
        </ShoppingL1st>
      </ShoppingListWrapper>
        );
    }
}

export default ShoppingList;