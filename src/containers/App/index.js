import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import ErrorDisplay from '../../common/ErrorDisplay';
import { actions as appActions, getError } from '../../redux/reducers/app/reducer';
import { connect } from "react-redux";
import './style.css';

class App extends Component {
  render() {
    const { error, appActions: { clearError }} = this.props;
    return (
      <div className="App">
       {error ? <ErrorDisplay msg={error} clearError={clearError} /> : null}  
      </div>
    );
  }
}

const mapStateToProps = (state, props) =>{
   return {
    error: getError(state)
  };
}

const mapDispatchToProps = () =>{
   return {
    appActions: bindActionCreators(appActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
