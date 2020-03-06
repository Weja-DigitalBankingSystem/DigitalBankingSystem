import React from 'react';
import { withRouter, Link  } from 'react-router-dom'
import logo from './img/logo.png';

class NavBar extends React.Component {

    render()
    {
        return (
          <nav>
          <div className="row p-3 bg-white">
              <div className="col-4">
                  <Link className="navbar-brand" to="/"><img src={logo} className="logo mr-3" alt="WEJA BANK" />WEJA BANK</Link>
              </div>
              <div className="col-8 d-flex justify-content-end">
                  <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">Other Sites</Link>
                  <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/">WEJA bank site 1</Link>
                      <Link className="dropdown-item" to="/">WEJA bank site 2</Link>
                  </div>
  
                  <button type="button" className="btn bg-mainblue text-white">
                      My Messages <span className="badge badge-light">4</span>
                  </button>
                  <Link type="button" className="btn btn-danger bg-mainred" to="/">Sign out</Link>
              </div>
          </div>
  
          <div className="nav-scroller bg-mainblue shadow-sm col-12">
              <nav className="d-flex nav nav-underline">
                  <Link className="nav-link active" to="/accountsummary">Accounts Summary</Link>
                  <Link className="nav-link" to="/paymenttransfers">Payments & Transfers</Link>
                  <Link className="nav-link" to="/productservices">Products & Services</Link>
                  <Link className="nav-link" to="/myprofile">My Profile</Link>
                  <Link className="nav-link" to="/locatebranch">Locate an ATM or Branch</Link>
                  <Link className="nav-link" to="/contactus">Contact Us</Link>
              </nav>
          </div>
      </nav>
        );
    }

}
export default withRouter(NavBar);