import React, { Component } from 'react';
import LikeItem from './LikeItem';
import { LikelistWrapper,
         ProductList,
         ListButton } from './style';
import Slider from 'react-slick';
import { SliderSettings } from './SliderSettings';

class LikeList extends Component {
    constructor(props){
        super(props)
        this.state = {
            btnClicked: false
        }
    }
    render() {
        const {btnClicked} = this.state;
        const {dataSource} = this.props;
        return (
            <LikelistWrapper> 
               <ProductList>
                <Slider {...SliderSettings}>
                  {
                     dataSource.map((item, index) => {
                        if(btnClicked){
                        return( 
                           <LikeItem key={index} data={item}/>
                        )
                        }})
                  }
                </Slider>
                </ProductList>
                <ListButton id='more' onClick={()=> this.handleBtnClick()}>more</ListButton>
            </LikelistWrapper>
        );
    }
componentDidUpdate(){
   if(this.state.btnClicked){
     document.getElementById("more").innerHTML = "View All";
   }
}
  handleBtnClick(){ 
     if(!this.state.btnClicked){
     this.props.fetchData();
     this.setState({
        btnClicked:true
     })
    }
  }
}

export default LikeList;