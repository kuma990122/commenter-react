import React, { Component } from 'react';
import { dataSource } from './dataSource';
import { OrderItemListWrapper,
         OrderItemL1st } from './style.js';
import OrderItem from '../OrderItem';

class OrderList extends Component {
    render() {
        const {data} = this.props;
        return (
            <OrderItemListWrapper>
                <OrderItemL1st>
                    {
                        data.map((item, index) =>{
                            return (
                                <div key={index}>
                                    <OrderItem data={item} />
                                </div>
                            )
                        })
                    }
                </OrderItemL1st>
            </OrderItemListWrapper>
        );
    }
}

export default OrderList;