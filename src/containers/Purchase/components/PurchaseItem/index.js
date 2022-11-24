import React, { Component } from 'react';
import {dataSource} from './dataSource.js';
import {PurchaseItemWrapper,
        PurchaseItemPic,
        PurchaseItemInfoContainer,
        PurchaseShopName,
        PurchaseItemTitle,
        PurchaseItemBreakline,
        PurchasePriceContainer,
        PurchaseCurrentPriceContainer,
        PurchaseCurrentPriceTitle,
        PurchasePriceAfterDiscount,
        PurchaseOldPriceContainer,
        PurchaseOldPriceTitle,
        PurchasePriceBeforeDiscount,
        PurchaseSavedPriceContainer,
        PurchaseSavedPriceTitle,
        PurchasePriceSaved,
        PurchaseAmountContainer,
        PurchaseAmountCounterMinus,
        PurchaseAmountCounterPlus,
        PurchaseItemAmount,
        PurchaseItemSubmitBtnContainer,
        PurchaseItemSubmitButton} from './style.js';
class PurchaseItem extends Component {
    state = {
        count:1
    };
    render() {
        const {
            picture,
            title,
            shop,
            currentPrice,
            oldPrice,
        } = this.props.data;

        
        return (
            <PurchaseItemWrapper>
                <PurchaseItemPic src={picture}/>
                <PurchaseItemInfoContainer>
                <PurchaseItemTitle>{title}</PurchaseItemTitle>
                <PurchaseShopName>{shop}</PurchaseShopName>
                <PurchaseItemBreakline/>
                
                
                <PurchasePriceContainer>
                    <PurchaseCurrentPriceContainer>
                       <PurchaseCurrentPriceTitle>After discount:</PurchaseCurrentPriceTitle>
                       <PurchasePriceAfterDiscount>{currentPrice * this.state.count}HUF</PurchasePriceAfterDiscount>
                    </PurchaseCurrentPriceContainer>
                    <PurchaseOldPriceContainer>
                       <PurchaseOldPriceTitle>Before discount:</PurchaseOldPriceTitle>
                       <PurchasePriceBeforeDiscount>{oldPrice * this.state.count}HUF</PurchasePriceBeforeDiscount>
                    </PurchaseOldPriceContainer>
                    <PurchaseSavedPriceContainer>
                       <PurchaseSavedPriceTitle>Voucher Saved</PurchaseSavedPriceTitle>
                       <PurchasePriceSaved>{(oldPrice - currentPrice)* this.state.count}HUF</PurchasePriceSaved>
                    </PurchaseSavedPriceContainer>
                    <PurchaseItemBreakline/>
                </PurchasePriceContainer>
                <PurchaseAmountContainer>
                <PurchaseAmountCounterMinus onClick={this.handleMinus}/>
                <PurchaseItemAmount>{this.state.count}</PurchaseItemAmount>
                <PurchaseAmountCounterPlus onClick={this.handlePlus}/>
                </PurchaseAmountContainer>
                <PurchaseItemBreakline/>
                <PurchaseItemSubmitBtnContainer>
                    <PurchaseItemSubmitButton to={`/success`}>Submit Order</PurchaseItemSubmitButton>
                </PurchaseItemSubmitBtnContainer>    
                </PurchaseItemInfoContainer>
                <PurchaseItemBreakline/>
            </PurchaseItemWrapper>
        );
    }

    handleMinus = () =>{
       if(this.state.count>0){
       this.setState({
        count: this.state.count-1
       })
       }
    }

    handlePlus = () =>{
        this.setState({
            count: this.state.count+1
        })
    }
}

export default PurchaseItem;