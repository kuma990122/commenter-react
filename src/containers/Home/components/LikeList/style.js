import styled from "styled-components";

export const LikelistWrapper = styled.div`
    background-color: #fff;
`

export const ProductList = styled.div`
    margin-top: 10px;
    width: 50%;
    background-color: #fff;
    transform: translate(50%, 0%);
`

export const ListButton = styled.button`
    width: 50%;
    background-color: rgb(51, 214, 255);
    border-radius: 10px;
    border-color: white;
    color: white;
    padding: 15px;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;
    transform: translate(50%, 0%);

    &:hover{
        background-color: #9face6;
        color: white;
        border-color: white;
        font-size: 20px;
    }
`