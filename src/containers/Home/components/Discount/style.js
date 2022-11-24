import styled from "styled-components";
import { Link } from 'react-router-dom';
import 'animate.css';

export const DiscountWrapper = styled.div`
    width: 50%;
    border-bottom: 10px solid #f0f0f0;
    padding: 7px 6px 10px;
    background-color: #fff;
    transform: translate(50%, 0%);
`

export const DiscountHeader = styled.span`
    display: block;
    position: relative;
    height: 32px;
    line-height: 32px;
    padding-bottom: 5px;
    padding-left: 3px;
`

export const DiscountTitle = styled.span`
    font-weight: 700;
    height: 30px;
    width: 20%;
    font-size: 18px;
    background: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
    -webkit-background-clip: text;
    color: transparent;
`
export const DiscountMore = styled(Link)`
    display: block;
    line-height:25px;
    font-size: 14px;
    float: right;
    padding-right: 18px;
    color: #74ebd5;
 
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
        margin-right:10px;
        animation: shake 5000ms ease-in-out;
    }

    @keyframes shake{
        10%, 90% { transform: translate3d(0, -1px, 0); transform: rotate(10deg);}
        20%, 80% { transform: translate3d(0, +2px, 0); transform: rotate(-10deg);}
        30%, 70% { transform: translate3d(0, -4px, 0); transform: rotate(10deg)}
        40%, 60% { transform: translate3d(0, +4px, 0); transform: rotate(-10deg)}
        50% { transform: translate3d(0, -4px, 0); transform: rotate(10deg)}
    }
`

export const DiscountArrow = styled.span`
    position: absolute;
    right: 8px;
    top: 55%;
    margin-top: -8px;
    border: 3px solid #9face6;
    transform: rotate(45deg);
    width: 8px;
    height: 8px;
    border-bottom: none;
    border-left: none;
    transform: rotate(45deg);

`

export const DiscountContent = styled.div`
    padding-bottom: 5px;
`

export const DiscountItem = styled(Link)`
    display: inline-block;
    width: 33%;
    height: 80%;
    box-sizing: border-box;
    padding: 0 5px;
    -webkit-transition-duration: 0.6s;
    transition-duration: 0.6s;
    cursor: pointer;

    &:hover{
        background: linear-gradient(to right, #b8e2ef, #f7bee0);
        border-radius: 15px;
        border-color: #f8da86;
    }
`
export const DiscountItemPicContainer = styled.div`
    height: 40%;
    width: 50%; 
`

export const DiscountItemPicture = styled.img`
    width: 100%;
    height: 100%;
    display:block;
    margin-left: 0%;
    transform: translate(50%,0%);
    overflow: hidden;
    

    &:hover{
        animation: shake 5000ms ease-in-out;
        
    } 

    @keyframes shake{
        10%, 90% { margin-left: 50%;transform: rotate(10deg); }
        20%, 80% { transform: rotate(-10deg); }
        30%, 70% { transform: rotate(10deg); }
        40%, 60% { transform: rotate(-10deg); }
        50% { transform: rotate(10deg); }
    }
`

export const DiscountItemTitle = styled.div`
    color: #333;
    font-size: 14px;
    font-weight: 400;
    margin-left: 10%;
    font-family: Arial;
    padding-top: 3px;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    
`

export const DiscountItemPrice = styled.div`
    line-height: 16px;
    height: 30%;
    font-size: 0;
    padding-top: 5px;
    position: relative;
    margin-left: 10%;
    vertical-align: bottom;
    transform: translate(30%,0%);
`

export const DiscountCurrentPrice = styled.ins`
    color: rgb(92, 128, 247);
    text-decoration: none;
    font-size: 20px;

    &:before {
        content: 'HUF';
        font-size: 14px;
        text-align: left;
    }
`

export const DiscountOldPrice = styled.del`
    color: #999;
    font-size: 12px;
    margin-left: 2px;

    &:before{
        content: 'HUF';
        font-size: 14px;
        text-align: left;
    }
`