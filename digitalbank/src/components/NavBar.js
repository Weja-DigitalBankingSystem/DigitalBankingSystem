import React from 'react';
import { withRouter, Link  } from 'react-router-dom'

class NavBar extends React.Component {

    render()
    {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <li className="nav-item">
                        <Link className="nav-link" to="/AccountSummary">Account Summary</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Sign in</Link>
                    </li>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <a class="navbar-brand mr-auto mr-lg-0" href="#">Offcanvas navbar</a>
            <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Notifications</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Profile</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Switch account</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                  <div class="dropdown-menu" aria-labelledby="dropdown01">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
              
            </div>
          </nav>
          </div>
        );
    }

}
export default withRouter(NavBar);