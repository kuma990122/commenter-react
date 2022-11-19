import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShopItemWrapper = styled(Link)`
    display: flex;
    padding: 10px;
`
export const ShopItemPic = styled.div`
    border-radius: 2px;
    width: 66px;
    height: 66px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    flex-shrink: 0;
    position: relative;
    box-sizing: border-box;
`
export const ShopItemContentWrapper = styled.div`
    flex: 1;
`
export const ShopItemTitle = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 400;
    color: #323232;
    margin-right: 3px;
`
export const ShopItemComment = styled.div`
    font-size: 0;
    margin: 8px 0;
    position: relative;
`
export const ShopItemQuantity = styled.span`
    font-size: 12px;
    color: #333;
    line-height: 12px;
    margin-left: 12px;
    vertical-align: bottom;
`
export const ShopItemPrice = styled.span`
    display: inline-block;
    font-size: 12px;
    color: #333;
    line-height: 12px;
    margin-left: 12px;
    vertical-align: bottom;

    &:before{
        content: "HUF";
        font-size: 12px;
        line-height:12px;
        margin-right: 2px;
        vertical-align: bottom;
        display: inline;
    }
`
export const ShopItemInfoContainer = styled.div`
    font-size: 12px;
    color: #999;
    line-height: 12px;
`

export const ShopItemRegion = styled.span`
    margin-right: 10px;
`
export const ShopItemCategory = styled.span`
    margin-right: 10px;
`