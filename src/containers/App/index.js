import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import ErrorDisplay from '../../common/ErrorDisplay';
import { actions as appActions, getError } from '../../redux/reducers/app/reducer';
import { connect } from "react-redux";
import './style.css';

class App extends Component {
  render() {
    //destructuring the actions imported from reducer and assign the clearError function to appActions for sending the dispatch request
    const { error, appActions: { clearError }} = this.props;
    return (
      <div className="App">
       {error ? <ErrorDisplay msg={error} clearError={clearError} /> : null}  
      </div>
    );
  }
}

    //When initiate the component, get the state of ErrorDisplay to decide if we display it.
const mapStateToProps = (state, props) =>{
   return {
    error: getError(state)
  };
}

//bind the clearError function with dispatch  
const mapDispatchToProps = () =>{
   return {
    appActions: bindActionCreators(appActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
