import React, { Component } from 'react';
import "./style.css";

//通用错误处理的展示组件, 定义message为组件的属性
class ErrorDisplay extends Component {
    render() {
        const { message } = this.props
        return (
            <div className="errorDisplay">
              <div className="errorDisplay_text">
                 {message}
              </div>
            </div>
        );
    }
    componentDidMount() {
        this.timer = setTimeout(() => {
          this.props.clearError();
        }, 3000);
    }
    componentWillUnmount() {
        if(this.timer) {
          clearTimeout(this.timer)
        }
      }
}

export default index;