import React, { Component } from 'react';
import Slider from "react-slick";
import { dataSource } from './dataSource';
import { SliderSettings } from './SliderSettings';
import './style.css';

class Headline extends Component {

    render() {
        return (
            <div>
                <div className="headline__slider">
                   <Slider {...SliderSettings}>
                    {dataSource.map((item,index) =>{
                        return(
                            <a key={index} className="headline__sliderInner" href={item.url}>
                            <div className="headline__sliderTitle">{item.title}</div>
                            <div className="headline__sliderImgWrapper">
                            <img className="headline__sliderImg" src={item.pic} />
                            </div>
                            </a>
                        );
                    })}
                   </Slider>
                </div>
            </div>
        );
    }
}

export default Headline;