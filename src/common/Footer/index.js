import React, { Component } from 'react';
import './style.css'
class Footer extends Component {
    render() {
        const { grey, title, onBack } = this.props;
        const backgroundColor = grey ?'#f0f0f0': '#fff';
        return (
            <footer className="footer" style={{'backgroundColor':backgroundColor }}>
        
              <div className="footer__title" onClick={onBack} >{title}</div>
            </footer>
        );
    }
}

export default Footer;