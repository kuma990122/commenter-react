import styled from "styled-components"; 
import successlogo from "./imgs/success.png";
export const SuccessWrapper = styled.div`
      background:#fff;
`

export const SuccessLogoContainer = styled.div`
      display:inline-block;
      transform: translate(140%, 0%);

`

export const SuccessLogoPic = styled.div`
      background:url(${successlogo}) no-repeat;
      width: 400px;
      height: 400px;
      transform: scale(0.5);
      
`
export const SuccessContentContainer = styled.div`
      display:inline-block;
      transform: translate(160%, 0%);
      position:absolute;
      margin-top: 120px;

`
export const SuccessContent = styled.span`
      display:block;  
      font-size: 30px;  
      font-weight: 500;
`

export const SuccessBackButton = styled.div`
      display:block;
      width: 150px;
      height:50px;
      background: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
      border-style: solid;
      border-width: 2px;
      border-radius: 16px;
      margin: 20px;

      &:hover{
        background: linear-gradient(to left, #74ebd5 0%, #9face6 100%);
        animation: fade 3000ms ease-in-out;
    }

    @keyframes fade {
        10%, 90% { transform: rotate(5deg);background: linear-gradient(to right, #74ebd5 0%, #9face6 100%);}
        20%, 80% { transform: rotate(-5deg); background: linear-gradient(to left, #74ebd5 0%, #9face6 100%);}
        30%, 70% { transform: rotate(5deg); background: linear-gradient(to right, #74ebd5 0%, #9face6 100%);}
        40%, 60% { transform: rotate(-5deg); background: linear-gradient(to left, #74ebd5 0%, #9face6 100%);}
        50% { transform: rotate(5deg);background: linear-gradient(to right, #74ebd5 0%, #9face6 100%); }
    }
`

export const SuccessBackButtonText = styled.span`
      font-size: 15px;
      font-weight: 500;
      line-height:50px;
      margin-left: 20px;
      margin-top: -25px;
`