import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorDisplay from '../../common/ErrorDisplay';
import { actions as appActions} from '../../redux/reducers/app/actionCreators';
import { getError } from '../../redux/reducers/app/reducer';
import { connect } from "react-redux";
import './style.css';
import Home from '../Home';
import ProductDetail from '../ProductDetail';
import Search from '../Search';


class App extends Component {
  render() {
    //destructuring the actions imported from reducer and assign the clearError function to appActions for sending the dispatch request
    const { error, appActions: { clearError }} = this.props;
    return (
     <div className="App">
      <Router>
        <Switch>
          <Route path="/detail/:id" component={ProductDetail} />
          <Route path="/search" component={Search}/>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
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
const mapDispatchToProps = dispatch =>{
   return {
    appActions: bindActionCreators(appActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
