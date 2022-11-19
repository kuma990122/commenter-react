import styled from "styled-components";

export const DetailWrapper = styled.div`
    padding: 0;
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
    background-color: #fff;
    color: #333;
    font-size: 14px;
    width: 50%;
    transform: translate(50%, 0%);
`
export const DetailHeader = styled.div`
    background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.79/css/img/repeat-x.png")
      repeat-x 0 bottom;
    background-size: auto 10px;
    height: 40px;
    line-height: 42px;
    font-weight: 400;
    font-size: 14px;
    margin-left: 13px;
`
export const DetailProductInfo = styled.span`
`


export const DetailHeaderIcon = styled.i`
    background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.79/css/img/icon-comm.png")
      center 0 no-repeat;
    background-size: 14px auto;
    display: inline-block;
    width: 14px;
    position: relative;
    top: 2px;
    height: 14px;
    background-position: 0 -38px;
    margin-left: 4px;
`
export const DetailTable = styled.table`
    width: calc(100% - 13px);
    margin-top: 12px;
    margin-bottom: 15px;
    margin-left: 13px;
    border-spacing: 0;
    border-collapse: collapse;
    line-height: 22px;

    &:first-child{
        text-align: left;
        width: 70%;
    }
`
export const DetailTableRow = styled.tr`
    background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.79/css/img/repeat-x.png")
      repeat-x 0 bottom;
    background-size: auto 10px;
`

export const DetailCategory = styled.th`
    color: #999;
    font-weight: 500;
    padding: 10px 0;
`

export const DetailTableDataRight = styled.td`
    text-align: right;
    padding: 10px 0;
    white-space: nowrap;
    padding-right: 5px;
`
export const DetailTableDataPrice = styled.td`
    color: #999;
    text-decoration: line-through;
    text-align: right;
    padding: 10px 5px 10px 0;
`

export const DetailTableDataNewPrice = styled.strong`
    margin-top: 5px;
    color: #f63;
    display: inline-block;
`

export const DetailRemark = styled.div`
    margin-top: 12px;
    margin-left: 13px;
    padding-bottom: 10px;
    background: url("https://www.dpfile.com/mod/app-m-tuangou/1.3.79/css/img/repeat-x.png")
      repeat-x 0 bottom;
    background-size: auto 10px;
`

export const DetailMore = styled.div`
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #333;
    padding: 0 10px 0 15px;
`
export const DetailNotice = styled.span`
    color: #999;
    padding-left: 5px;
    font-size: 10px;
    line-height: 12px;
`

export const DetailArrow = styled.i`
    float: right;
    margin-top: 17px;
    margin-right: 5px;
    width: 8px;
    height: 8px;
    border-right: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    cursor: pointer;
    transform: rotate(-45deg);
`