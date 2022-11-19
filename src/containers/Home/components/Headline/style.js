import styled from "styled-components";

export const HeadlineWrapper = styled.div`
`

export const HeadlineSlider = styled.div`
    height: 65px;
    flex: 1; 
    overflow: hidden;
    width: 50%;
    transform: translate(50%, 0%);
`

export const HeadlineSliderInner = styled.a`
    display: inline-block;
    height: 65px;
    width: 100%;
`

export const HeadlineSliderTitle = styled.div`
    width: calc(100% - 75px);
    height: 100%;
    float: left;
    line-height: 20px;
    font-size: 14px;
    font-weight: bold;
    color: #111;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const HeadlineSliderImgWrapper = styled.div`
    float: left;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const HeadlineSliderImg = styled.img`
    width: 45px;
    height: 45px;
`