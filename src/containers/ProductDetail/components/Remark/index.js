import React, { Component } from 'react';
import {RemarkContainer,
        RemarkHeaderContainer,
        RemarkHeaderIcon,
        RemarkListContainer,
        RemarkListItem,
        RemarkListItemTitle,
        RemarkListItemDescription} from './style.js';


class Remark extends Component {
    render() {
      const{
        validityPeriod,
        purchaseNotes
      } = this.props.data;
        return (
     <RemarkContainer>
        <RemarkHeaderContainer>
          Remark
          <RemarkHeaderIcon />
        </RemarkHeaderContainer>
        <RemarkListContainer>
          <RemarkListItem>
            <RemarkListItemTitle>Validity Period</RemarkListItemTitle>
            <RemarkListItemDescription>{validityPeriod}</RemarkListItemDescription>
          </RemarkListItem>
          {purchaseNotes.map((item, index) => {
            return (
              <RemarkListItem key={index}>
                <RemarkListItemTitle>{item.title}</RemarkListItemTitle>
                <RemarkListItemDescription>{item.content}</RemarkListItemDescription>
              </RemarkListItem>
            );
          })}
         
        </RemarkListContainer>
      </RemarkContainer>
        );
    }
}

export default Remark;