import React, { Component } from 'react';
import Slider from "react-slick";
import { dataSource } from './dataSource';
import { SliderSettings } from './SliderSettings';
import { HeadlineWrapper,
         HeadlineSlider,
         HeadlineSliderInner,
         HeadlineSliderTitle,
         HeadlineSliderImgWrapper,
         HeadlineSliderImg } from './style';

class Headline extends Component {

    render() {
        return (
            <HeadlineWrapper>
                <HeadlineSlider>
                   <Slider {...SliderSettings}>
                    {dataSource.map((item,index) =>{
                        return(
                            <HeadlineSliderInner key={index} href={item.url}>
                            <HeadlineSliderTitle>{item.title}</HeadlineSliderTitle>
                            <HeadlineSliderImgWrapper>
                            <HeadlineSliderImg src={item.pic} />
                            </HeadlineSliderImgWrapper>
                            </HeadlineSliderInner>
                        );
                    })}
                   </Slider>
                </HeadlineSlider>
            </HeadlineWrapper>
        );
    }
}

export default Headline;