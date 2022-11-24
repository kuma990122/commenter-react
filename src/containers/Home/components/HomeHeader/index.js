import React, { Component } from 'react';
import { HomeHeaderWrapper,
         HomeHeaderContainer,
         HomeHeaderCity,
         HomeHeaderLink,
         HomeHeaderUser,
         HomeHeaderUserPic } from './style';  

class HomeHeader extends Component {
    render() {
        return (
            <HomeHeaderWrapper>
            <HomeHeaderContainer>
              <HomeHeaderCity>Budapest</HomeHeaderCity>
              <HomeHeaderLink to="/search">Enter the name of shop
              </HomeHeaderLink>
              <HomeHeaderUser to="/user">
                <HomeHeaderUserPic/>
              </HomeHeaderUser>
            </HomeHeaderContainer>
             </HomeHeaderWrapper>
        );
    }
}

export default HomeHeader;