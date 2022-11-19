import styled from "styled-components";

export const SearchHistoryWrapper = styled.div`
    background-color: #fff;
    font-size: 15px;
    color: #323232;
    margin-top: 1px;
    width: 47%;
    transform: translate(54%, 0%);
    border-radius : 5px;
`

export const SearchHistoryHeader = styled.div`
     background-color: #f0f0f0;
     padding: 8px 15px;
     color: #999;
`
export const SearchHistoryList = styled.ul`
     padding-left: 15px;
     margin: 0;
`

export const SearchHistoryItem = styled.li`
    display: block;
    color: #323232;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-image: linear-gradient(0, #e1e1e1, #e1e1e1 50%, transparent 50%);
    background-position: 100% 100%;
    background-size: 100% 1px;
    background-repeat: no-repeat;
`

export const SearchHistoryClear = styled.div`
    height: 45px;
    line-height: 45px;
    color: #333;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
    display: block;
    border: none;
`

