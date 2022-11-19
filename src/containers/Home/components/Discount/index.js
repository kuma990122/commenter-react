import React, { Component } from 'react';
import './style.css';
import { DiscountWrapper,
         DiscountHeader,
         DiscountTitle,
         DiscountMore,
         DiscountArrow,
         DiscountContent,
         DiscountItem,
         DiscountItemPicContainer,
         DiscountItemPicture,
         DiscountItemTitle,
         DiscountItemPrice,
         DiscountCurrentPrice,
         DiscountOldPrice} from './style';
import Slider from 'react-slick';
import { SliderSettings } from './SliderSettings';

class Discount extends Component {

    render() {
        const {dataSource} = this.props;
        return (
            <DiscountWrapper>
                <DiscountHeader>
                    <DiscountTitle>Super Discount!</DiscountTitle>
                    <DiscountMore to={`/discounts`}>Look for more</DiscountMore>
                    <DiscountArrow />
                 </DiscountHeader>
                <DiscountContent>
                    <Slider {...SliderSettings}>
                    {dataSource.map((item,index) =>{
                        return(
                        <DiscountItem to={`detail/${item.id}`} key={item.id}>
                        <DiscountItemPicContainer>
                             <DiscountItemPicture src={item.picture} />
                        </DiscountItemPicContainer>
                        <DiscountItemTitle>
                            {item.shop}
                        </DiscountItemTitle>
                        <DiscountItemPrice>
                           <DiscountCurrentPrice>{item.currentPrice}</DiscountCurrentPrice>
                           <div><DiscountOldPrice>{item.oldPrice} </DiscountOldPrice></div>
                        </DiscountItemPrice>
                     </DiscountItem>)
                    })}
                    </Slider>
                 </DiscountContent>
            </DiscountWrapper>
        );
    }
    
}

export default Discount;