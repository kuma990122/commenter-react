import styled from "styled-components";

export const FooterWrapper = styled.footer`
    height: 45px;
    line-height: 35px;
    padding: -3px;
    text-align: center;
    position: relative;
    width: 50%;
    transform: translate(50%, 0%);
    background: linear-gradient(70deg, deeppink, 50%, aqua);
    border-radius:14px;

`
export const FooterBox = styled.div`
    position: relative;
    height: 100%;
    background: linear-gradient(to right, #f7bee0, #b8e2ef);
    border: 4px solid transparent;
    border-radius:16px;
    background-clip: padding-box;
    z-index: 0;
    
`

export const FooterTitle = styled.div`
    color: #333;
    font-size: 16px;
    font-weight: 500;

    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
    }
`