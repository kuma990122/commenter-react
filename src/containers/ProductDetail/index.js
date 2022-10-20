import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Detail from './components/Detail';
import ProductOverview from './components/ProductOverview';
import PurchaseButton from './components/PurchaseButton';
import Remark from './components/Remark';
import ShopInfo from './components/ShopInfo';
import Header from '../../common/Header';
import { loadProductDetail, loadShopById} from '../../redux/reducers/detail/actionCreators';
import { getProduct, getShop } from '../../redux/reducers/detail/selectors';

class ProductDetail extends Component {
    render() {
        const {product, shop} =this.props;
        return (
            <div>
                <Header title="Detail info" onBack={this.handleBack} grey />
                <ProductOverview />
                <ShopInfo />
                <Detail />
                <Remark />
                <PurchaseButton />
            </div>
        );
    }
    componentDidMount(){
        const { product } =this.props;
        if(!product){
            const productId = this.props.match.params.id;
            this.props.LoadProductDetail( productId);
        }
    }
    
    componentDidUpdate(preProps){
        if(!preProps.product && this.props.product){
            this.props.LoadShop(this.props.product.nearestShop);
        }
    }

    handleBack = () => {
        this.props.history.goBack();
    };
}


const mapStateToProps = (state, props) =>{
    const productId = props.match.params.id;
    return {
        product: getProduct(state, productId),
        shop: getShop(state, productId)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        LoadProductDetail: bindActionCreators(loadProductDetail,dispatch),
        LoadShop: bindActionCreators(loadShopById,dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductDetail);