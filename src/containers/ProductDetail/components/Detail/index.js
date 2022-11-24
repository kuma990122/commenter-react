import React, { Component } from 'react';
import { DetailWrapper,
         DetailHeader,
         DetailProductInfo,
         DetailHeaderIcon,
         DetailTable,
         DetailTableRow,
         DetailCategory,
         DetailTableDataRight,
         DetailTableDataPrice,
         DetailTableDataNewPrice,
         DetailRemark,
         DetailMore,
         DetailNotice,
         DetailArrow } from './style';

class Detail extends Component {
    render() {
      const {
        detail: {category, products, remark},
        currentPrice,
        oldPrice} = this.props.data;
        return (
        <DetailWrapper>
        <DetailHeader>
          <DetailProductInfo>Product Info</DetailProductInfo>
          <DetailHeaderIcon></DetailHeaderIcon>
        </DetailHeader>
        <DetailTable cellPadding="0" cellSpacing="0">
          <tbody>
            <DetailTableRow>
              <DetailCategory colSpan="3">
                {category}
              </DetailCategory>
            </DetailTableRow>

            {products.map((item, index) => {
              return (
                <DetailTableRow key={index}>
                  <td>{item.name}</td>
                  <DetailTableDataRight>{item.quantity}</DetailTableDataRight>
                  <DetailTableDataRight>{item.price}</DetailTableDataRight>
                </DetailTableRow>
              );
            })}
            <DetailTableRow>
              <td/>
              <DetailTableDataPrice>
                Highest Price
                <br/>
                <DetailTableDataNewPrice>
                  After discount
                </DetailTableDataNewPrice>
              </DetailTableDataPrice>
              <DetailTableDataPrice>
                {oldPrice}HUF
                <br/>
                <DetailTableDataNewPrice>
                 {currentPrice}HUF
                </DetailTableDataNewPrice>
              </DetailTableDataPrice>
            </DetailTableRow>
          </tbody>
        </DetailTable>
        <DetailRemark>
          {remark}
        </DetailRemark>
        <DetailMore>
          <span>More info</span>
          <DetailNotice>(Recommend to comment under Wi-Fi environment)</DetailNotice>
          <DetailArrow/>
        </DetailMore>
      </DetailWrapper>
    );
    }
}

export default Detail;