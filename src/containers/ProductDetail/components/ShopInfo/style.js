import styled from "styled-components";
import star from "./imgs/SingleStar.png";
import phone from "./imgs/mobile.png";
import location from "./imgs/location.png";
import logo from "./imgs/delivery.svg";

export const ShopInfoWrapper = styled.div`
    padding: 0;
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
    background-color: #fff;
    position: relative;
    width: 50%;
    transform: translate(50%, 0%);
`
export const ShopInfoMid = styled.div`
    padding-left: 15px;
    display: flex;
    background-size: auto 10px;
`
export const ShopInfoMiddleLeft = styled.div`
    background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.79/css/img/repeat-right.png")
      repeat-y right;
    background-size: 1px auto;
    -webkit-box-flex: 1;
    flex: 1;
    margin: 15px 0;
`
export const ShopInfoName = styled.div`
    color: #000000;
    font-weight: 700;
    font-size: 18px;
`

export const ShopInfoStarsWrapper = styled.div`
    font-size: 14px;
    margin-top: 15px;
    
`
export const ShopInfoStars = styled.span`
    width: 16px;
    height: 16px;
    background: url(${star});
    background-size: 100% 100%;
    display: inline-block;
`
export const ShopInfoStarScore = styled.span`
    font-size: 14px;
    font-weight: 600;
    margin-left: 10px;
      no-repeat;
    display: inline-block;
    height: 16px;
    overflow: hidden;
    background-size: auto 100%;
`
export const ShopInfoSaleDesciption = styled.span`
    font-size: 14px;
    font-weight: 400;
    margin-left: 3px;
    height: 16px;
    padding:5px;
    overflow: hidden;
    background-size: auto 100%;
`
export const ShopInfoTagList = styled.div`
    display: inline-block;
    background-size: auto 100%;
    padding-left: 20px;
`
export const ShopInfoTag1 = styled.div`
    margin-right: -5px;
    background-color: #5effb6;
    display: inline-block;
    border-radius: 20px;
    max-width: 232px;
    padding: 0px 8px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
        animation: shake 2000ms ease-in-out;
    }

    @keyframes shake{
        10%, 90% { transform: rotate(10deg); }
        20%, 80% { transform: rotate(-10deg); }
        30%, 70% { transform: rotate(10deg); }
        40%, 60% { transform: rotate(-10deg); }
        50% { transform: rotate(10deg); }
    }
`
export const ShopInfoTag2 = styled.div`
    margin-left: -15px;
    margin-right: -2px;
    background:linear-gradient(to right, #b8e2ef, #f7bee0);
    display: inline-block;
    border-radius: 20px;
    max-width: 232px;
    padding: 0px 8px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
        animation: shake 2000ms ease-in-out;
    }

    @keyframes shake{
        10%, 90% { transform: rotate(10deg); }
        20%, 80% { transform: rotate(-10deg); }
        30%, 70% { transform: rotate(10deg); }
        40%, 60% { transform: rotate(-10deg); }
        50% { transform: rotate(10deg); }
    }
`
export const ShopInfoTag3 = styled.div`
    margin-left: -15px;
    background:linear-gradient(to right, #FFD700, #FF8C00);
    display: inline-block;
    border-radius: 20px;
    max-width: 232px;
    padding: 0px 8px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
        animation: shake 2000ms ease-in-out;
    }

    @keyframes shake{
        10%, 90% { transform: rotate(10deg); }
        20%, 80% { transform: rotate(-10deg); }
        30%, 70% { transform: rotate(10deg); }
        40%, 60% { transform: rotate(-10deg); }
        50% { transform: rotate(10deg); }
    }
`

export const ShopInfoTagText = styled.span`
    color:#333333;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 1.6rem;
`

export const ShopInfoMiddleRight = styled.a`
    margin: 15px 0;
    padding: 0 22px;
    display: -webkit-box;
    -webkit-box-align: center;
`

export const ShopInfoPhoneIconWrapper = styled.span`
      width: 30px;
      height: 30px;
      display: inline-block;
      line-height: 20px;
      text-align: center;
      padding: 5px;
      margin: 5px;
      border-radius: 20px;
      background: linear-gradient(to right, #b8e2ef, #f7bee0);

      &:hover{
        transform: scale(1.1);
        animation: shake 2000ms ease-in-out;
    }

    @keyframes shake{
        10%, 90% { transform: rotate(10deg); }
        20%, 80% { transform: rotate(-10deg); }
        30%, 70% { transform: rotate(10deg); }
        40%, 60% { transform: rotate(-10deg); }
        50% { transform: rotate(10deg); }
    }

      
`
export const ShopInfoPhoneIcon = styled.i`
      width: 20px;
      height: 20px;
      margin-left: -1px;
      background: url(${phone}) no-repeat;
      background-size: 20px auto;
      background-position: center 0;
      display: inline-block;
`

export const ShopInfoBreakline = styled.div`
    display:block;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
`
export const ShopInfoBottom = styled.div`
    padding: 14px 0 14px 15px;
    line-height: 14px;
    font-size: 14px;
    color: #333;
    position: relative;
    display: flex;  
`

export const ShopInfoLocation = styled.i`
    background: url(${location});
    background-position: 0 -29px;
    margin-right: 3px;
    background-size: 14px auto;
    display: inline-block;
    width: 14px;
    position: relative;
    top: 2px;
    height: 14px;
`
export const ShopInfoDeliveryContainer = styled.div`
    display: block;
    width: 100%;
    height: 100px;
    background: url(${logo}) no-repeat;
    background-position: 100% 100%;
    background-color: rgba(0,0,0,0.1);
`
export const ShopInfoDeliveryTitle = styled.p`
    display: block;
    text-transform: uppercase;
    width: 100%;
    font-weight: 600;
    font-size: 30px;
    margin-left: 20px;
    padding-bottom: 0px;
    padding-top: 10px;
    margin-top:0px;
`
export const ShopInfoDeliveryContent = styled.p`
    display: block;
    font-family: Georgia, serif;
    text-align: left;
    width: 100%;
    
    font-weight: 300;
    font-size: 16px;
    margin-left: 20px;
    margin-top: -10px;
`

