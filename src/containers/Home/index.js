import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Category from './components/Category';
import Headline from './components/Headline';
import Discount from './components/Discount';
import LikeList from './components/LikeList';
import HomeHeader from './components/HomeHeader';
import {getLikes, getDiscounts} from '../../redux/reducers/home/selectors';
import {loadList, loadDiscounts} from '../../redux/reducers/home/actionCreators';

class Home extends Component {
    render() {
        const {likes, discounts} = this.props;
        return (
            <div>
                <HomeHeader/>
                <Category/>
                <Headline/>
                <Discount dataSource ={discounts}/>
                <LikeList  dataSource ={likes} fetchData = {this.fetchMoreData}/>
            </div>
        );
    }
    componentDidMount(){
        this.props.LoadDiscounts()
    }

    fetchMoreData = () =>{
        this.props.LoadList()
    }
}

const mapStateToProps = (state, props) =>{
    return {
        likes:getLikes(state),
        discounts:getDiscounts(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        LoadList: bindActionCreators(loadList,dispatch),
        LoadDiscounts: bindActionCreators(loadDiscounts,dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);