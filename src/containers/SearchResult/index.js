import React, { Component } from 'react';
import { connect } from "react-redux";
import ShoppingList from './components/ShoppingList';
import Header from '../../common/Header';   
import Footer from '../../common/Footer';
import {getResultShops} from '../../redux/reducers/searchResult/selectors';
import {loadShopResults} from '../../redux/reducers/searchResult/actionCreators';
import { bindActionCreators } from 'redux';
class SearchResult extends Component {
    constructor(props){
        super(props)
        this.state={
            resultInfo:{}
        }
    }
    render() {
        const {resultShops} = this.props; 
        return (
            <div>
                <Header title="Search Result" onBack={this.handleBack}/>
                <ShoppingList dataSource={resultShops}/>
                <Footer title="Back To Main Page" onBack={this.handleBackToMainPage}/>
            </div>
        );
    }

    handleBack = () => {
        this.props.history.goBack();
    };

    handleBackToMainPage = () => {
        this.props.history.push('/');
    };
    componentDidMount(){
        this.props.getResult()
    }
}

const mapStateToProps = (state, props) =>{
    return{
        resultShops: getResultShops(state),
        
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getResult: bindActionCreators(loadShopResults,dispatch),
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);