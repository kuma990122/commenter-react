import React, { Component } from 'react';
import { dataSource } from './dataSource';  
import './style.css';
import Slider from 'react-slick';
import { SliderSettings } from './SliderSettings';

class Discount extends Component {

    render() {
        return (
            <div className="discount">
                <a className='discount__header'>
                    <span className='discount__title'>SuperDiscount!</span>
                    <span className='discount__more'>Look for more</span>
                    <span className='discount__arrow' />
                </a>
                <div className='discount__content'>
                    <Slider {...SliderSettings}>
                    {dataSource.map((item,index) =>{
                        return(
                        <a key={index} className='discount__item' href={item.url}>
                        <div className='discount__itemPic'>
                             <img width="100%" height="100%" src={item.picture} />
                        </div>
                        <div className='discount__itemTitle'>
                            {item.shop}
                        </div>
                        <div className='discount__itemPriceWrapper'>
                           <ins className='discount__itemCurrentPrice'>{item.currentPrice}</ins>
                           <del className='discount__itemCurrentPrice::before'>{item.oldPrice} </del>
                        </div>
                     </a>)
                    })}
                    </Slider>
                 </div>
            </div>
        );
    }
}

export default Discount;