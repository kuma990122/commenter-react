import React, { Component } from 'react';
import { HeaderWrapper,
         HeaderBackButton,
         HeaderTitle,
         HeaderBox} from './style';
import './style.css';
class Header extends Component {
    render() {
        const {title, onBack } = this.props;
        return (
            <HeaderWrapper>
                <HeaderBox>
              <HeaderBackButton onClick={onBack}>
               back
              </HeaderBackButton>
              <HeaderTitle>{title}</HeaderTitle>
                </HeaderBox>
            </HeaderWrapper>
        );
    }
}

export default Header;