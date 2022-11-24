import React, { Component } from 'react';
import Slider from "react-slick";
import { dataSource } from './dataSource';
import { CategoryWrapper,
         CategoryContainer,
         CategorySection,
         CategoryIcon,
         CategoryText } from './style.js';
import {SliderSettings} from './SliderSettings';

//On category component we import Slider package to achieve some animation effects
class Category extends Component {
    render() {
        
        return (
            
            <CategoryWrapper>
                <Slider {...SliderSettings}>
                      {
                         dataSource.map((section,index) => {
                            return (
                                <CategoryContainer key={index}>
                                    {
                                        section.map((item, i) =>{
                                             return(
                                                <CategorySection key={i}>
                                                    <a href={item.url}>
                                                    <CategoryIcon src={item.src} />
                                                        <CategoryText>{item.name}</CategoryText> 
                                                    </a>
                                                </CategorySection>
                                             );
                                        })}
                                </CategoryContainer>
                            )})
                      }
                </Slider>
            </CategoryWrapper>
             );
    }
}



export default Category;