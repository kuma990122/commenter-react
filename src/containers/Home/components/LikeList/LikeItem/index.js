import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LikeItemWrapper,
         LikeItemPicContainer,
         LikeItemPic,
         LikeItemContent,
         LikeItemShop,
         LikeItemProduct,
         LikeItemDetailWrapper,
         LikeItemPriceWrapper,
         LikeItemCurrentPrice,
         LikeItemOldPrice,
         LikeItemSale } from './style';
import './style.css';
class LikeItem extends Component {
    render() {
        const {
            id,
            shop,
            picture,
            product,
            currentPrice,
            oldPrice,
            saleDesc
          } = this.props.data;
        return (
            <LikeItemWrapper to={`/detail/${id}`}>
              <LikeItemPicContainer> 
                <LikeItemPic src={picture} />
              </LikeItemPicContainer>
              <LikeItemContent>
                <LikeItemShop>{shop}</LikeItemShop>
                <LikeItemProduct>{product}</LikeItemProduct>
                <LikeItemDetailWrapper>
                  <LikeItemPriceWrapper>
                  <LikeItemCurrentPrice>{currentPrice}</LikeItemCurrentPrice>
                  <LikeItemOldPrice>{oldPrice}</LikeItemOldPrice>
                  </LikeItemPriceWrapper>
                <LikeItemSale>{saleDesc}</LikeItemSale>
              </LikeItemDetailWrapper>
              </LikeItemContent>
           </LikeItemWrapper>
        );
    }
}

export default LikeItem;