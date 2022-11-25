import React, { Component } from 'react';
import { OrderItemWrapper,
         OrderItemPic,
         OrderItemContentWrapper,
         OrderItemShop,
         OrderItemName,
         OrderItemAmount,
         OrderItemPrice,
         OrderItemCheckDetail } from './style';


class OrderItem extends Component {
    render() {
        const {
            picture,
            title,
            shop,
            currentPrice,
            id
        } = this.props.data;
        return (
            <OrderItemWrapper>
                <OrderItemPic src={picture}/>
                <OrderItemContentWrapper>
                    <OrderItemShop>Shop:{shop}</OrderItemShop>
                    <OrderItemName>{title}</OrderItemName>
                    <OrderItemAmount>Amount:</OrderItemAmount>
                    <OrderItemPrice>{currentPrice}HUF</OrderItemPrice>
                </OrderItemContentWrapper>
                <OrderItemCheckDetail to={`/detail/${id}`}>Product Info</OrderItemCheckDetail>
            </OrderItemWrapper>
        );
    }
}

export default OrderItem;