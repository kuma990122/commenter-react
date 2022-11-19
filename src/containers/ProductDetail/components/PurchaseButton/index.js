import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { PurchaseBtn } from './style';
import './style.css';

class PurchaseButton extends Component {
    render() {
        const { productId } = this.props;
        return (
            <PurchaseBtn to={`/purchase/${productId}`}>
              Purchase Now!
            </PurchaseBtn>
        );
    }
}

export default PurchaseButton;