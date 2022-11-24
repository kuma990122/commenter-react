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
import { getLoginStatus } from '../../redux/reducers/login/selectors';

class ProductDetail extends Component {
    render() {
        const {product, relatedShop,loginStatus} =this.props;
        return (
            <div>
                <Header title="Detail info" onBack={this.handleBack} grey />
                {product && <ProductOverview data={product} loginStatus={loginStatus}/>}
                {relatedShop && <ShopInfo data={relatedShop} productData={product}/>}
                {product && <Detail data={product}/>}
                {product && <Remark data={product}/>}
                {product && <PurchaseButton productId={product.id} loginStatus={loginStatus}/>}
            </div>
        );
    }
    componentDidMount(){
        const { product } =this.props;
        if(!product){
            const productId = this.props.match.params.id;
            this.props.LoadProductDetail(productId);
        }else if (!this.props.relatedShop) {
            this.props.detailActions.loadShopById(product.nearestShop);
          }
        console.log(product,"Product INFO");
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
        relatedShop: getShop(state, productId),
        loginStatus: getLoginStatus(state)
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