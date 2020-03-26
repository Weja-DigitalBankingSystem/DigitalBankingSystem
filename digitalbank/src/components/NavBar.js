import React from 'react';
import { withRouter, Link, NavLink  } from 'react-router-dom'
import logo from './img/logo.png';
import {Button} from 'reactstrap';

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
                  &nbsp;&nbsp;
                  <Button type="button" className="btn btn-danger bg-mainred" href="/">Sign out</Button>
              </div>
          </div>
  
          <div className="nav-scroller bg-mainblue shadow-sm col-12">
              <nav className="d-flex nav nav-underline" id="nav">
                  <NavLink className="nav-link" activeClassName="navactivity" to="/accountsummary">Accounts Summary</NavLink>
                  <NavLink className="nav-link" activeClassName="navactivity" to="/paymenttransfers">Payments & Transfers</NavLink>
                  <NavLink className="nav-link" activeClassName="navactivity" to="/productservices">Products & Services</NavLink>
                  <NavLink className="nav-link" activeClassName="navactivity" to="/myprofile">My Profile</NavLink>
                  <NavLink className="nav-link" activeClassName="navactivity" to="/locatebranch">Locate an ATM or Branch</NavLink>
                  <NavLink className="nav-link" activeClassName="navactivity" to="/contactus">Contact Us</NavLink>
              </nav>
          </div>
      </nav>
        );
    }

}
export default withRouter(NavBar);