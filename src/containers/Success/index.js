import React, { Component } from 'react';
import Header from '../../common/Header';
import { SuccessLogoContainer,
         SuccessLogoPic,
         SuccessWrapper,
         SuccessContentContainer,
         SuccessContent,
         SuccessBackButton,
         SuccessBackButtonText } from './style';

class Success extends Component {
    render() {
        return (
            <SuccessWrapper>
                <Header title="Order Success" onBack={this.handleBack}/>
                <SuccessLogoContainer>
                    <SuccessLogoPic/>
                </SuccessLogoContainer>
                <SuccessContentContainer>
                    <SuccessContent>Your Order is submitted</SuccessContent>
                    <SuccessContent>Enjoy your meal~</SuccessContent>
                    <SuccessBackButton onClick={this.handleToOrder}>
                        <SuccessBackButtonText>Check your order</SuccessBackButtonText>
                    </SuccessBackButton>
                </SuccessContentContainer>
            </SuccessWrapper>
        );
    }

    handleBack = () =>{
        this.props.history.push('/');
    }

    handleToOrder = () =>{
        this.props.history.push('/user');
    }
}

export default Success;