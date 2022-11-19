import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ShopItemWrapper,
         ShopItemPic,
         ShopItemContentWrapper,
         ShopItemTitle,
         ShopItemComment,
         ShopItemQuantity,
         ShopItemPrice,
         ShopItemInfoContainer,
         ShopItemRegion,
         ShopItemCategory } from './style.js';
import './style.css'

class ShoppingItem extends Component {
    render() {
        const {
            id,
            url,
            pic,
            shop,
            star,
            price,
            quantity,
            region,
            category
          } = this.props.data;
        return (
      <ShopItemWrapper to={`/detail/${id}`}>
        <ShopItemPic  style={{ backgroundImage: "url(" + pic + ")" }} />
        <ShopItemContentWrapper>
          <ShopItemTitle>{shop}</ShopItemTitle>
          <ShopItemComment>
            <span className={"shopItem__star shopItem__star--" + star} />
            <ShopItemQuantity>{quantity}</ShopItemQuantity>
            <ShopItemPrice>{price}/person</ShopItemPrice>
          </ShopItemComment>
          <ShopItemInfoContainer>
            <ShopItemRegion>{region}</ShopItemRegion>
            <ShopItemCategory>{category}</ShopItemCategory>
          </ShopItemInfoContainer>
        </ShopItemContentWrapper>
      </ShopItemWrapper>
        );
    }
}

export default ShoppingItem;