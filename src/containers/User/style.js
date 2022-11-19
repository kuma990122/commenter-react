import styled from "styled-components"; 

export const LoginWrapper = styled.div` 
   position: absolute;
   margin-left:8px;
   left: 0;
   right: 0;
   bottom: 0;
   top: 0px;
   background: #eee;
   z-index: 0;
`

export const LoginBox = styled.div` 
   width:400px;
   height: 180px;
   margin:100px auto;
   background: #fff;
   background-color: #00000060;
   text-align: center;
   box-shadow: 0 0 8px rgba(0,0,0,.1);
   padding: 2rem 4rem;

   
`

export const LoginInput = styled.input` 
   display: block;
   border-radius: 15px;
   width:200px;
   height: 30px;
   line-height: 30px;
   color:#777;
   padding: 0 10px;
   margin:10px auto;
   background: transparent;
`

export const LoginButton = styled.div` 
   display: block;
   width:220px;
   height: 30px;
   line-height: 30px;
   color:#fff;
   margin:10px auto;
   border-radius: 15px;
   text-align: center;
   background: #3194d0;
   background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
`