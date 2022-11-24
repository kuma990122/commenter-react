import React, { Component } from 'react';
import Header from '../../common/Header';
import PurchaseItem from './components/PurchaseItem';
import { connect } from 'react-redux';
import { loadProductById } from '../../redux/reducers/order/actionCreators'; 
import { getOrder } from '../../redux/reducers/order/selectors';
import { bindActionCreators } from 'redux';

class Purchase extends Component {
    render() {
        const {order} = this.props;
        return (
            <div>
                <Header title="Purchase Info" onBack={this.handleBack}/>
                {order&&<PurchaseItem data={order}/>}
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
}

const mapStateToProps = (state, props) =>{
    const orderId = props.match.params.id;
    return {
        order: getOrder(state, orderId)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loadOrder: bindActionCreators(loadProductById,dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Purchase);