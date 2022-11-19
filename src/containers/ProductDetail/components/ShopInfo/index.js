import React, { Component } from 'react';
import {ShopInfoWrapper,
        ShopInfoMid,
        ShopInfoMiddleLeft,
        ShopInfoName,
        ShopInfoStarsWrapper,
        ShopInfoStars,
        ShopInfoStarScore,
        ShopInfoSaleDesciption,
        ShopInfoTag1,
        ShopInfoTag2,
        ShopInfoTagText,
        ShopInfoTagList,
        ShopInfoTag3,
        ShopInfoPhoneIconWrapper,
        ShopInfoBreakline,
        ShopInfoMiddleRight,
        ShopInfoPhoneIcon,
        ShopInfoBottom,
        ShopInfoLocation,
        ShopInfoDeliveryContainer,
        ShopInfoDeliveryTitle,
        ShopInfoDeliveryContent,
       
        } from './style.js';

import './style.css'
class ShopInfo extends Component {
    render() {
        const { data: relatedShop } = this.props;
        const { saleDesc } = this.props.productData;
        const { shop: name, star, address, phone, tag , region} = relatedShop;
        return (
            <ShopInfoWrapper>
        <ShopInfoMid>
          <ShopInfoMiddleLeft>
            <ShopInfoName>
            {name}   {region}
            </ShopInfoName>
            <ShopInfoStarsWrapper>
              <ShopInfoStars></ShopInfoStars>
              <ShopInfoStarScore>{star/10} /5</ShopInfoStarScore>
              <ShopInfoSaleDesciption>({saleDesc})</ShopInfoSaleDesciption>
              
                {tag.map((item,index)=>{
                  return(
                    <ShopInfoTagList key={index}>
                    <ShopInfoTag1 >
                    <ShopInfoTagText>{item.tagName}</ShopInfoTagText>  
                    </ShopInfoTag1>
                    <ShopInfoTag2>
                      <ShopInfoTagText>{item.service}</ShopInfoTagText>  
                    </ShopInfoTag2>
                    <ShopInfoTag3>
                    <ShopInfoTagText>{item.shipping}</ShopInfoTagText>
                    </ShopInfoTag3>
                    </ShopInfoTagList>
                  )
                })}
              
            </ShopInfoStarsWrapper>
          </ShopInfoMiddleLeft>
          <ShopInfoMiddleRight href={`tel://${phone}`}>
            <ShopInfoPhoneIconWrapper>
            <ShopInfoPhoneIcon></ShopInfoPhoneIcon>
            </ShopInfoPhoneIconWrapper>
          </ShopInfoMiddleRight>
        </ShopInfoMid>
        <ShopInfoBreakline/>
        <ShopInfoBottom>
          <ShopInfoLocation/>{address}
        </ShopInfoBottom>
        <ShopInfoBreakline/>
        <ShopInfoDeliveryContainer>
           <ShopInfoDeliveryTitle>DELIVERY UP TO HUF 0</ShopInfoDeliveryTitle>
           <ShopInfoDeliveryContent>For purchases over HUF 6,500, we provide free delivery!</ShopInfoDeliveryContent>
         </ShopInfoDeliveryContainer>
         <ShopInfoBreakline/>
      </ShopInfoWrapper>
        );
    }
}

export default ShopInfo;