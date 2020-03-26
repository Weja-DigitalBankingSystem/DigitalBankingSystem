import React from 'react';
import AccountSummary from './components/accounts/AccountSummary';
import ProductServices from './components/accounts/ProductServices';
import PaymentTransfers from './components/accounts/PaymentTransfers';
import MyProfile from './components/accounts/MyProfile';
import LocateBranch from './components/accounts/LocateBranch';
import ContactUs from './components/accounts/ContactUs';

import Login from './components/login/Login';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        isAuthenticated: '',
        userEmail: '',
      };
  }

  render() {
  return (
    <React.Fragment>
      <div id="main-content">
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path="/accountsummary" component={AccountSummary}/>
          <Route path="/productservices" component={ProductServices}/>
          <Route path="/paymenttransfers" component={PaymentTransfers}/>
          <Route path="/myprofile" component={MyProfile}/>
          <Route path="/locatebranch" component={LocateBranch}/>
          <Route path="/contactus" component={ContactUs}/>          
          <Route path='*'>
            <div>Page not found</div>
          </Route>
        </Switch>
        
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

}

export default App;
