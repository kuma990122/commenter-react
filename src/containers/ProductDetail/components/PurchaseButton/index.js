import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { PurchaseBtn } from './style';

class PurchaseButton extends Component {
    render() {
        const { productId } = this.props;
        if(!this.props.loginStatus){
            return (
            <PurchaseBtn to={`/user`}>
              Go Sign In
            </PurchaseBtn>
            );
        }
        else{
        return (
            
            <PurchaseBtn to={`/purchase/${productId}`}>
              Purchase Now!
            </PurchaseBtn>
        );
        }
    }
}

export default PurchaseButton;