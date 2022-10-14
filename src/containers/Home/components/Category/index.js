import React, { Component } from 'react';
import Slider from "react-slick";
import { dataSource } from './dataSource';
import './style.css';
import {SliderSettings} from './SliderSettings';

//On category component we import Slider package to achieve some animation effects
class Category extends Component {
    render() {
        
        return (
            
            <div className="category">
                <Slider {...SliderSettings}>
                      {
                         dataSource.map((section,index) => {
                            return (
                                <div key={index}>
                                    {
                                        section.map((item, i) =>{
                                             return(
                                                <div className="category__section" key={i}>
                                                    <a href={item.url}>
                                                    <img alt="" className="category__icon" src={item.src} />
                                                    <div>
                                                        <span className='category__text'>{item.name}</span>
                                                    </div>
                                                    </a>
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