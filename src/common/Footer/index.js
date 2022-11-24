import React, { Component } from 'react';
import { FooterWrapper,
         FooterBox,
         FooterTitle } from './style';
class Footer extends Component {
    render() {
        const {title, onBack } = this.props;
         return (
            <FooterWrapper>
              <FooterBox>
              <FooterTitle onClick={onBack} >{title}</FooterTitle>
              </FooterBox>
            </FooterWrapper>
        );
    }
}

export default Footer;