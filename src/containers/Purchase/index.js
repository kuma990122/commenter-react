import React, { Component } from 'react';
import Header from '../../common/Header';
import PurchaseItem from './components/PurchaseItem';
import { connect } from 'react-redux';
import { loadProductById } from '../../redux/reducers/order/actionCreators'; 
import { getOrder } from '../../redux/reducers/order/selectors';
import { bindActionCreators } from 'redux';
import { loadUserOrderById } from '../../redux/reducers/user/actionCreators';

class Purchase extends Component {
    render() {
        const {order} = this.props;
        return (
            <div>
                <Header title="Purchase Info" onBack={this.handleBack}/>
                {order&&<PurchaseItem data={order} onSubmitClick={this.handleSubmitClick}/>}
            </div>
        );
    }
    componentDidMount(){
        const { order } = this.props;
        if(!order){
            const orderId = this.props.match.params.id;
            this.props.loadOrder(orderId);
        }
        console.log('Order Mounted!');
    }
    handleBack = () => {
        this.props.history.push('/');
    };

    handleSubmitClick =(amount) =>{
        const orderId = this.props.match.params.id;
        console.log('Order '+ orderId);
        this.props.loadOrderToUser(orderId,amount);
        console.log('it submitted');
    }
}

const mapStateToProps = (state, props) =>{
    const orderId = props.match.params.id;
    return {
        order: getOrder(state, orderId)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loadOrder: bindActionCreators(loadProductById,dispatch),
        loadOrderToUser: bindActionCreators(loadUserOrderById,dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Purchase);