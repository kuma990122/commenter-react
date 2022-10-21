import React, { Component } from 'react';
import './style.css';

class Remark extends Component {
    render() {
      const{
        validityPeriod,
        purchaseNotes
      } = this.props.data;
        return (
            <div className="remark">
        <div className="remark__header">
          Remark
          <i className="remark__icon" />
        </div>
        <div className="remark__list">
          <dl className="remark__item">
            <dt className="remark__itemTitle">Validity Period</dt>
            <dd className="remark__itemDesc">{validityPeriod}</dd>
          </dl>
          {purchaseNotes.map((item, index) => {
            return (
              <dl key={index} className="remark__item">
                <dt className="remark__itemTitle">{item.title}</dt>
                <dd className="remark__itemDesc">{item.content}</dd>
              </dl>
            );
          })}
         
        </div>
      </div>
        );
    }
}

export default Remark;