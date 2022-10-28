import React, { Component } from 'react';
import { connect } from "react-redux";
import ShoppingList from './components/ShoppingList';
import Header from '../../common/Header';   
import Footer from '../../common/Footer';
import {getResultShops} from '../../redux/reducers/searchResult/selectors';

class SearchResult extends Component {
    render() {
        const {resultShops} = this.props; 
        return (
            <div>
                <Header title="Search Result" onBack={this.handleBack} grey />
                <ShoppingList dataSource={resultShops}/>
                <Footer title="<-----Back To Main Page" onBack={this.handleBackToMainPage} grey />
            </div>
        );
    }

    handleBack = () => {
        this.props.history.goBack();
    };

    handleBackToMainPage = () => {
        this.props.history.push('/');
    }
}

const mapStateToProps = (state, props) =>{
    console.log(state)
    return{
        resultShops: getResultShops(state)
    }
}


export default connect(mapStateToProps, null)(SearchResult);