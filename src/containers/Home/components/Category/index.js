import React, { Component } from 'react';
import Slider from "react-slick";
import { dataSource } from './dataSource';
import './style.css';

//On category component we import Slider package to achieve some animation effects
class Category extends Component {
    render() {
        //The configuration of slider animation
        const settings ={
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow:false,
            swipeToSlide: true,
            autoplay: true
        }
        return (
            
            <div className="category">
                <Slider {...settings}>
                      {
                         dataSource.map((section,index) => {
                            return (
                                <div key={index}>
                                    {
                                        section.map((item, i) =>{
                                             return(
                                                <div className="category__section" key={i}>
                                                    <img alt="" className="category__icon" scr={item.src} />
                                                    <div>
                                                        <span className='category__text'>{item.name}</span>
                                                    </div>
                                                </div>
                                             );
                                        })}
                                </div>
                            )})
                      }
                </Slider>
            </div>
             );
    }
}



export default Category;