import styled from "styled-components";

export const SearchWrapper = styled.div`
     font-size: 14px;
     background-color:#fff;
     width: 50%;
     transform: translate(50%, 0%);
`

export const SearchContainer = styled.div`
     height: 45px;
     color: rgb(51, 190, 255);
     padding-left: 8px;
     display: flex;
     align-items: center;
`

export const SearchInput = styled.input`
     background-color: #f0f0f0;
     width: calc(100% - 68px);
     height: 30px;
     padding-left: 10px;
     padding-right: 30px;
     border: none;
     border-radius: 15px;
`
export const SearchClear = styled.span`
     background-image: url("https://www.dpfile.com/app/node-mobile-m-isomorphism-web/static/d53930bbff0bf22cb8cea72503da44d9.png");
     background-size: 250px;
     background-repeat: no-repeat;
     background-position: 3px -185px;
     width: 22px;
     height: 34px;
     margin-left: -25px;
`

export const SearchCancel = styled.span`
     width: 48px;
     height: 45px;
     line-height: 45px;
     padding: 0 10px;
     display: inline-block;
     font-size: 14px;
     text-align: center;
`
export const SearchSuggest = styled.span`
     float: center;
     font-size: 16px;
     text-align: center;
     display: block;
     font-family: Open Sans;
     font-weight: bolder;
     color: #5199f8;
     margin-right: 3px;
`

export const SearchList = styled.ul`
     position: relative;
     width: 95%;
     box-sizing: border-box;
     top: 0px;
     border-radius: 5px;
     padding: 0 0 0 15px;
     z-index: 9999;
     background-color: rgb(240, 238, 238);
`
export const SearchItem = styled.li`
     padding: 15px 10px 15px 0;
     font-size: 15px;
     line-height: 15px;
     position: relative;
     display: block;
     color: #333;
     overflow: hidden;
`

export const SearchItemKeyword = styled.span`
     float: left;
     color: #666;
`

export const SearchItemQuantity = styled.span`
     float: right;
     color: rgb(79, 166, 248);
     font-size: 12px;
`