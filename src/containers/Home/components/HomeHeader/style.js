import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeHeaderWrapper = styled.div`
    display: block;
    width:50%;
    height: 50px;
    content: '';
    transform: translate(50%, 0%);
    background: linear-gradient(70deg, aqua, 50%, deeppink);
`

export const HomeHeaderContainer = styled.header`
    position: fixed;
    width: 99%;
    height: 45px;
    line-height: 50px;
    margin-top: 2.5px;
    margin-left: 4px;
    padding: 0 10px;
    text-align: center;
    display: -webkit-box;
    z-index: 5;
    box-sizing: border-box;
    background-clip: padding-box;
    background: linear-gradient(to right, #b8e2ef, #f7bee0);
`

export const HomeHeaderCity = styled.a`
    position: relative;
    padding-right: 10px;
    color: #fff;
    max-width: 70px;
    margin-top: -2px;
    display: block;
    
`

export const HomeHeaderLink = styled(Link)`
    display:block;
    background-color: #fff;
    padding: 0 0 0 15px;
    width:85%;
    height: 30px;
    margin: 9px 6px 9px 5px;
    line-height: 25px;
    color: lightgray;
    text-align: left;
    font-size: 13px;
    border-radius: 25px;
    position: relative;
    border-style: dashed;
`

export const HomeHeaderUser = styled(Link)`
    display: block;
    width: 28px;
    height: 100%;
`

export const HomeHeaderUserPic = styled.div`
    height: 22px;
    width: 22px;
    border: 1px solid #fff;
    border-radius: 17px;
    position: relative;
    top: 13px;
    overflow: hidden;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;

    &:before{
        border: 1px solid #fff;
        position: absolute;
        right: 6px;
        top: 4px;
        display: block;
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 5px;       
    }

    &:after{
        border: 1px solid #fff;
        position: absolute;
        right: 2px;
        top: 13px;
        display: block;
        content: "";
        width: 16px;
        height: 16px;
        border-radius: 10px;        
    }

    &:hover{
        transform: scale(1.4);
    }
`