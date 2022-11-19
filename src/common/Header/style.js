import styled from "styled-components";

export const HeaderWrapper = styled.header`
    height: 45px;
    line-height: 35px;
    padding: -3px;
    text-align: center;
    position: relative;
    width: 50%;
    transform: translate(50%, 0%);
    background: linear-gradient(70deg, aqua, 50%, deeppink);
    border-radius:14px;
    
`
export const HeaderBox = styled.div`
    position: relative;
    height: 100%;
    background: linear-gradient(to right, #b8e2ef, #f7bee0);
    border: 4px solid transparent;
    border-radius:16px;
    background-clip: padding-box;
    z-index: 0;
`

export const HeaderBackButton = styled.div`
    padding-left: 16px;
    position: absolute;
    left: 15px;
    color: #00adf5;
    font-size: 16px;
    float: left;
    font-weight: 600;
    font-color: #00adf5
    z-index: 5;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;

    &:before{
        border: rgb(93, 200, 250) solid 3px;
        position: absolute;
        left: 0;
        top: 53%;
        margin-top: -8px;
        display: block;
        content: '';
        width: 12px;
        height: 12px;
        border-top: none;
        border-right: none;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
     }
     &:hover{
        transform: scale(1.2);
        font-weight : 400;
    }
`
export const HeaderTitle = styled.div`
    color: #333;
    font-size: 16px;
    font-weight: 500;
    
`
