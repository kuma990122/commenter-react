import React, { Component } from 'react';
import { OrderItemWrapper,
         OrderItemPic,
         OrderItemContentWrapper,
         OrderItemShop,
         OrderItemName,
         OrderItemAmount,
         OrderItemPrice,
         OrderItemCheckDetail } from './style';
import './style.css';


class OrderItem extends Component {
    render() {
        const{
            id,
            shop,
            product,
            price,
            amount,
            pic
        } = this.props.data
        return (
            <OrderItemWrapper>
                <OrderItemPic style= {{ backgroundImage: "url(" + pic +")"}}/>
                <OrderItemContentWrapper>
                    <OrderItemShop>Shop:{shop}</OrderItemShop>
                    <OrderItemName>{product}</OrderItemName>
                    <OrderItemAmount>Amount:{amount}</OrderItemAmount>
                    <OrderItemPrice>{price}HUF</OrderItemPrice>
                </OrderItemContentWrapper>
                <OrderItemCheckDetail to={`/detail/${id}`}>Product Info</OrderItemCheckDetail>
            </OrderItemWrapper>
        );
    }
}

export default OrderItem;