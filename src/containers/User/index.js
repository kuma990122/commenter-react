import React, { Component } from 'react';
import OrderList from './components/OrderList';
import Header from '../../common/Header';
import { connect } from 'react-redux';
import { getLoginStatus } from '../../redux/reducers/login/selectors';
import { LoginBox, LoginButton, LoginInput, LoginWrapper } from './style';
import { login } from '../../redux/reducers/login/actionCreators'; 
import { bindActionCreators } from 'redux';
class User extends Component {
    render() {
        if(!this.props.loginStatus){
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
                <OrderList/>
            </div>
            </div>
            )
        }
        
    }

    handleLogin = () =>{
        this.props.login(this.account,this.password);
    }

    handleBack = () => {
        this.props.history.goBack();
    };
}

const mapStateToProps = (state, props) =>{
    return{
          loginStatus: getLoginStatus(state)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
          login : bindActionCreators(login,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);