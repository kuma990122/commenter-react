import React, { Component } from 'react';
import LikeItem from './LikeItem';
import './style.css';
import './button.css';
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
            <div  className="likeList"> 
               <div className="likeList__list">
                <Slider {...SliderSettings}>
                  {
                     dataSource.map((item, index) => {
                        if(btnClicked){
                        return( 
                           <LikeItem key={index} data={item}/>
                        )
                        }
                  })
                  }
                </Slider>
                </div>
                <div>
                <button id="more" className="btn-two cyan block" onClick={()=> this.handleBtnClick()}>more</button>
                </div>
                
            </div>
        );
    }

componentDidUpdate(){
   
   if(this.state.btnClicked){
     document.getElementById("more").innerHTML = "View All";
     this.props.fetchData();
   }
}
  handleBtnClick(){
     this.setState({
        btnClicked:true
     })
  }
}

export default LikeList;