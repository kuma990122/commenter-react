import React, { Component } from 'react';
import {ProductOverviewWrapper,
        ProductOverviewHeaderContainer,
        ProductOverviewImgContainer,
        ProductOverviewImg,
        ProductOverviewInfo,
        ProductOverviewTitle,
        ProductOverviewContent,
        ProductOverviewPurchaseContainer,
        ProductOverviewCurrentPrice,
        ProductOverviewPriceSymbol,
        ProductOverviewOldPrice,
        ProductOverviewPurchaseBtn,
        ProductOverviewBreakline} from './style.js';      
class ProductOverview extends Component {
    render() {
      const { 
        id, 
        picture, 
        description, 
        currentPrice, 
        oldPrice,
        product
        } = this.props.data;
        if(!this.props.loginStatus){
          return(
            <ProductOverviewWrapper>
            <ProductOverviewHeaderContainer>
              <ProductOverviewImgContainer>
                <ProductOverviewImg src={picture} />
              </ProductOverviewImgContainer>
              <ProductOverviewInfo>
                <ProductOverviewTitle>{product}</ProductOverviewTitle>
                <ProductOverviewContent>
                  {description}
                </ProductOverviewContent>
              </ProductOverviewInfo>
            </ProductOverviewHeaderContainer>
            <ProductOverviewPurchaseContainer>
              <ProductOverviewCurrentPrice>{currentPrice}</ProductOverviewCurrentPrice>
              <ProductOverviewPriceSymbol>Ft</ProductOverviewPriceSymbol>
              <ProductOverviewOldPrice>{oldPrice}Ft</ProductOverviewOldPrice>
              <ProductOverviewPurchaseBtn to={`/user`}>Purchase Now</ProductOverviewPurchaseBtn>
              
            </ProductOverviewPurchaseContainer>
            <ProductOverviewBreakline/>
          </ProductOverviewWrapper>
          )
        }
        else{
        return (
        <ProductOverviewWrapper>
        <ProductOverviewHeaderContainer>
          <ProductOverviewImgContainer>
            <ProductOverviewImg src={picture} />
          </ProductOverviewImgContainer>
          <ProductOverviewInfo>
            <ProductOverviewTitle>{product}</ProductOverviewTitle>
            <ProductOverviewContent>
              {description}
            </ProductOverviewContent>
          </ProductOverviewInfo>
        </ProductOverviewHeaderContainer>
        <ProductOverviewPurchaseContainer>
          <ProductOverviewCurrentPrice>{currentPrice}</ProductOverviewCurrentPrice>
          <ProductOverviewPriceSymbol>Ft</ProductOverviewPriceSymbol>
          <ProductOverviewOldPrice>{oldPrice}Ft</ProductOverviewOldPrice>
          <ProductOverviewPurchaseBtn to={`/purchase/${id}`}>Purchase Now</ProductOverviewPurchaseBtn>
          
        </ProductOverviewPurchaseContainer>
        <ProductOverviewBreakline/>
      </ProductOverviewWrapper>
        );
      }
    }
}

export default ProductOverview;