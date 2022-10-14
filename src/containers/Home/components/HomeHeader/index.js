import React, { Component } from 'react';
import './style.css'

class HomeHeader extends Component {
    render() {
        return (
            <div className="homeHeader">
            <header className="homeHeader__wrapper">
              <a className="homeHeader__city">Budapest</a>
              <a className="homeHeader__search">Enter the name of shop</a>
              <a className="homeHeader__self">
                <div className="homeHeader__portrait"/>
              </a>
            </header>
             </div>
        );
    }
}

export default HomeHeader;