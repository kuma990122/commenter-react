import styled from "styled-components";
import { Link } from "react-router-dom";

export const LikeItemWrapper = styled(Link)`
    display: block;
    padding: 11px 10px 11px 15px;
    -webkit-transition-duration: 0.6s;
    transition-duration: 0.6s;
    cursor: pointer;

    &:hover{
         border-style: dashed;
        border-radius: 15px;
        border-width:5px;
        border-image: linear-gradient(70deg, #b8e2ef, #f7bee0) 1;
    }
`

export const LikeItemPicContainer = styled.div`
    padding-right: 10px;
    display: inline-block;

    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
    }
`
export const LikeItemPic = styled.img`
    width: 90px;
    vertical-align: center;
    object-fit: cover;

    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
        border-radius: 15px;
        animation: shake 5000ms ease-in-out;
    }

    @keyframes shake{
        10%, 90% { transform: rotate(10deg); }
        20%, 80% { transform: rotate(-10deg); }
        30%, 70% { transform: rotate(10deg); }
        40%, 60% { transform: rotate(-10deg); }
        50% { transform: rotate(10deg); }
    }
`
export const LikeItemContent = styled.div`
    display: inline-block;
    width: calc(100% - 100px);
`

export const LikeItemShop = styled.div`
    max-width: 237px;
    font-size: 14px;
    font-weight: 500;
    color: #111;
    padding-right: 8px;
    box-sizing: border-box;
    overflow: hidden;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover{
        font-size: 18px;
        font-weight: 700;
        color: #f5734b;
    }
`

export const LikeItemProduct = styled.div`
    overflow: hidden;
    font-size: 13px;
    color: #777;
    padding-top: 9px;
    padding-bottom: 13px;

    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover{
        font-size: 16px;
        font-weight: 500;
    }
`

export const LikeItemDetailWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 22px;
    line-height: 22px;
    padding-right: 4px;
`

export const LikeItemPriceWrapper = styled.div`
    max-width: 145px;
`

export const LikeItemCurrentPrice = styled.ins`
    float: left;
    font-size: 21px;
    text-decoration: none;
    font-weight:  500;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
    -webkit-background-clip: text;
    color: rgb(136, 234, 252);

    &:before{
        content: "HUF";
        font-size: 14px;
        margin-right: 2px;
        vertical-align: 1px;
    }

    &:hover{
        background: linear-gradient(to right, rgb(136, 234, 252), blue);
        fontsize: 24px;
        font-weight: 700;
        -webkit-background-clip: text;
        color: transparent;
    }
`
export const LikeItemOldPrice = styled.del`
    font-size: 13px;
    color: #777;
    text-decoration: line-through;
    vertical-align: 1px;
    margin-left: 10px;

    &:before{
        content: "HUF";
        margin-right: 1px;
    }
`
export const LikeItemSale = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;
    font-size: 13px;
    color: #777;
    line-height: 24px;

    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover{
        font-size: 16px;
        color: black;
        font-family: Open San;
        font-weight: 500;
    }
`