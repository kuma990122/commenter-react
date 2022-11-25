import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductOverviewWrapper = styled.div`
    background-color: #fff;
    width: 50%;
    transform: translate(50%, 0%);
`
export const ProductOverviewHeaderContainer = styled.div`
    position: relative;
    width: 100%;
`

export const ProductOverviewImgContainer = styled.div`
    min-height: 100px;
    max-height: 300px;
    overflow: hidden;
    width: 50%;
    transform: translate(50%, 0%);
`

export const ProductOverviewImg = styled.img`
    width: 100%;
    min-height: 100px;
    display: block;

    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover{
        transform: scale(1.5);
    }

`

export const ProductOverviewInfo = styled.div`
    position: absolute;
    bottom: 0;
    padding: 8px 12px;
    width: 100%;
    
    background:linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.6)
    );
`
export const ProductOverviewTitle = styled.div`
    color: #fff;
    font-size: 16px;
    font-family: Georgia, serif;
    font-weight: 500;
    margin-bottom: 3px;
`

export const ProductOverviewContent = styled.div`
    color: #fff;
    display: block;
    font-family: Georgia, serif;
    font-size: 12px;
    
`
export const ProductOverviewPurchaseContainer = styled.div`
    padding-left: 15px;
    display: -webkit-box;
    margin-top: 0;
    height: 50px;
    -webkit-box-pack: justify;
    background-size: auto 10px;
    line-height: 50px;
`
export const ProductOverviewCurrentPrice = styled.span`
    font-size: 30px;
    font-family: Fjalla One;
    margin-right: 3px;
    padding-right: 0;
    display: inline-block;
    color: #f63;
`
export const ProductOverviewPriceSymbol = styled.span`
    padding-right: 0;
    display: inline-block;
    font-size: 21px;
    color: #f63;
`
export const ProductOverviewOldPrice = styled.span`
    color: #8c8c8c;
    display: inline-block;
    margin-bottom: 5px;
    margin-left: 10px;
    font-size: 14px;
    line-height: 12px;
    text-decoration: line-through;
`
export const ProductOverviewPurchaseBtn = styled(Link)`
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
    margin: 8px;
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
export const ProductOverviewBreakline = styled.div`
    display:block;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
`