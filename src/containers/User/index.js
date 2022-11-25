import React, { Component } from 'react';
import OrderList from './components/OrderList';
import Header from '../../common/Header';
import { connect } from 'react-redux';
import { getLoginStatus } from '../../redux/reducers/login/selectors';
import { getUserOrders } from '../../redux/reducers/user/selectors';
import { LoginBox, LoginButton, LoginInput, LoginWrapper } from './style';
import { login } from '../../redux/reducers/login/actionCreators'; 
import { bindActionCreators } from 'redux';
class User extends Component {
    render() {
        const {loginStatus,userOrders} = this.props
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <Header title="Please Log in" onBack={this.handleBack} grey />
                <LoginBox>
                <LoginInput placeholder='Username' ref={(input)=>{this.account = input}}/>
                <LoginInput placeholder='Password' type='password' ref={(input)=>{this.password = input}}/>
                <LoginButton onClick={ this.handleLogin}>Log In</LoginButton>
                </LoginBox>
            </LoginWrapper>
                )
        }
        else{
            return(
            <div>
            <div>
                <Header title="User Orders" onBack={this.handleBack} grey />
            </div>
            <div className='userPage'>
                <OrderList data={userOrders}/>
            </div>
            </div>
            )
        }
        
    }

    handleLogin = () =>{
        this.props.login(this.account,this.password);
        this.props.history.push('/');
    }

    handleBack = () => {
        this.props.history.push('/');
    };
}

const mapStateToProps = (state, props) =>{
    return{
          loginStatus: getLoginStatus(state),
          userOrders:getUserOrders(state)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
          login : bindActionCreators(login,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);