import styled from "styled-components";
import minusIcon from "../imgs/minus.png";
import plusIcon from "../imgs/plus.png";
import { Link } from "react-router-dom";
import logo from "../../../ProductDetail/components/ShopInfo/imgs/delivery.svg";

export const PurchaseItemWrapper = styled.div`
    color: #fff;
    width: 50%;
    transform: translate(50%, 0%);
    background: url(${logo}) no-repeat;
    background-position: 100% 100%;
    z-index: 1000;
`
export const PurchaseItemPic = styled.img`
    width: 300px;
    height: auto;
    display:inline-block;
    border-style: solid;
    border-radius: 2px;
    border-width: 0px;
    background: #fff;
    margin-top:3px;

`
export const PurchaseItemInfoContainer = styled.div`
    display: inline-block;
    background:#fff;
    position:absolute;
    width: 68%;
    height: 300px;
    margin-top: 3px;
`
export const PurchaseShopName = styled.span`
    
    font-weight:400;
    font-size: 20px;
    font-family: Georgy;
    color: black;
    margin-left: 15px;
`

export const PurchaseItemTitle = styled.span`
    display:block;
    font-size: 25px;
    font-weight: 500;
    width: 200px;
    height: 50px;
    color: aqua;
    margin-top: 15px;
    margin-left: 15px;
`
export const PurchaseItemBreakline = styled.div`
    margin-top:5px;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #74ebd5 0%, #9face6 100%);

`
export const PurchasePriceContainer = styled.div`
    background:#fff;
`
export const PurchaseCurrentPriceContainer = styled.div`
    display:block;
`

export const PurchaseCurrentPriceTitle = styled.span`
    margin-left: 15px;
    font-size: 20px;
    font-weight: 500;
    color: orange;
`
export const PurchasePriceAfterDiscount = styled.span`
    margin-left: 5px;
    font-size:20px;
    font-weight:500;
    color: orange;
`
export const PurchaseOldPriceContainer = styled.div`
    display:block;
`
export const PurchaseOldPriceTitle = styled.span`
    margin-left: 15px;
    font-size: 16px;
    font-weight: 400;
    color: gray;
`
export const PurchasePriceBeforeDiscount = styled.del`
    margin-left: 5px;
    font-size:20px;
    font-weight:400;
    color: gray;
`
export const PurchaseSavedPriceContainer = styled.div`
    display:block;
`
export const PurchaseSavedPriceTitle = styled.span`
    margin-left: 15px;
    font-size: 20px;
    font-weight: 500;
    color: lightblue;
`
export const PurchasePriceSaved = styled.span`
    margin-left: 5px;
    font-size:20px;
    font-weight:500;
    color: lightblue;
`
export const PurchaseAmountContainer = styled.div`
    display:block;
    background: rgba(0,0,0,0);
    height: 50px;
`

export const PurchaseAmountCounterMinus = styled.span`
    display: inline-block;
    background: url(${minusIcon});
    width: 20px;
    height:20px;
    background-size: contain;
    margin-left: 15px;
    margin-top: 20px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
    }
`
export const PurchaseAmountCounterPlus = styled.span`
    display: inline-block;
    background: url(${plusIcon});
    width: 20px;
    height:20px;
    background-size: contain;
    margin-left: 10px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
    }
`
export const PurchaseItemAmount = styled.span`
    margin-left: 10px;
    font-size: 30px;
    color: rgba(0,0,0,1);
`
export const PurchaseItemSubmitBtnContainer = styled.div`
    width:20%;
    background-color: rgba(0,0,0,0);
`
export const PurchaseItemSubmitButton = styled(Link)`
    height: 35px;
    width: 100px;
    color: #fff;
    overflow: hidden;
    background: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
    border-radius: 7px;
    text-align: center;
    line-height: 35px;
    display: block;
    font-size: 16px;
    font-family: Georgia, serif;
    margin-left: 20px;
    margin-top: 15px;
    &:hover{
        animation: scale 2000ms ease-in-out;
        transform: scale(1.2);
    }

    @keyframes scale{
        10%, 90% { transform: scale(1.2); }
        20%, 80% { transform: scale(1.3); }
        30%, 70% { transform: scale(1.2); }
        40%, 60% { transform: scale(1.3); }
        50% { transform: scale(1.2); }
    }
`