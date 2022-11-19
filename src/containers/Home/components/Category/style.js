import styled from "styled-components";

export const CategoryWrapper = styled.div`
    width: 50%;
    text-align: left;
    border-top: solid 1px #e1e1e1;
    border-bottom: solid 1px #e1e1e1;
    padding: 0 0 30px;
    color: #fff;
    background-color: #fff;
    transform: translate(50%, 0%);
`

export const CategoryContainer = styled.div`
`

export const CategorySection = styled.div`
    width: 20%;
    padding: 13px 0 0;
    float: left;
    font-size: 13px;
    text-align: center;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover{
        background: linear-gradient(to right, #b8e2ef, #f7bee0);
        opacity: 0.7;
        border-width:1px;
        border-radius: 5px;
        transform: scale(1.2);
    }
`
export const CategoryIcon = styled.img`
    width: 44px;
    height:44px;
    margin: 0 auto 2px; 
`

export const CategoryText = styled.span`
    display: inline-block;
    vertical-align: top;
    margin: 0;
`