import styled from "styled-components";
import { Link } from "react-router-dom";

export const OrderItemWrapper = styled.div`
    display: flex;
    padding: 10px;
`
export const OrderItemPic = styled.img`
    width: 90px;
    vertical-align: center;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 10px;
    background-position: center;
    background-size: 100% 100%;
    flex-shrink: 0;
    position: relative;
    box-sizing: border-box;
`
export const OrderItemContentWrapper = styled.div`
    flex: 1;
    position: relative;
`
export const OrderItemShop = styled.div`
    overflow: hidden;
    font-family: Open Sans;
    font-weight: bold;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 400;
    color: #323232;
    margin-right: 3px;
`
export const OrderItemName = styled.div`
    overflow: visible;
    font-size: 20px;
    font-weight: 400;
    color: #323232;
    margin-right: 3px;
    font-family: Open Sans;
`

export const OrderItemAmount = styled.div`
    display: inline-block;
    overflow: visible;
    font-size: 20px;
    font-weight: 400;
    color: rgb(59, 156, 248);
    margin-right: 3px;
    font-family: Open Sans;
`
export const OrderItemPrice = styled.div`
    display: inline-block;
    font-size: 20px;
    color: rgb(59, 156, 248);
    line-height: 12px;
    margin-left: 12px;
    font-family: Open Sans;
`
export const OrderItemCheckDetail = styled(Link)`
  background-image: -webkit-linear-gradient(right,#74ebd5 0%, #9face6 100%);
  border-radius: 14px;
  box-shadow: 3px 2px 14px #80c2ee;
  font-family: Open Sans;
  color: #fafafa;
  font-size: 12px;
  padding: 12px;
  text-decoration: none;
  vertical-align: center;
  line-height: 15px;
  height: 50%;
`