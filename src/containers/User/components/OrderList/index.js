import React, { Component } from 'react';
import { dataSource } from './dataSource';
import { OrderItemListWrapper,
         OrderItemL1st } from './style.js';
import OrderItem from '../OrderItem';

class OrderList extends Component {
    render() {
        return (
            <OrderItemListWrapper>
                <OrderItemL1st>
                    {
                        dataSource.map((item, index) =>{
                            return (
                                <div key={item.itemId}>
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