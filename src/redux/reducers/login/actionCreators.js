import axios from 'axios';
import * as constants from './constants';

const changeLoginStatus = () =>( {
    type: constants.CHANGE_LOGIN_STATUS,
    value: true
})

export const logOut = () =>({
    type: constants.LOG_OUT,
    value: false
})

export const login = (account, password) =>{
    return(dispatch) => {
        axios.get('/mock/login/loginStatus.json?account=' + account + '&password=' + password)
        .then((result) =>{
           const status = result.data.data;
           if(status){
            dispatch(changeLoginStatus());
           }
        })
    }
}