import React from 'react';
import { Link  } from 'react-router-dom'

import './summary.css';
import NavBar from '../NavBar';


class AccountSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                userAccount: [],
                userName: 'Wendy Du',
            },
            errors: {

            }
        };
    }

    render() {
        return (
            <div className="bg-white">
                <NavBar component={NavBar}/>
                <main role="main" className="container">
                    <div className="d-flex mx-auto">
                        <div className="container">
                            <div className="align-items-center p-3 mt-3 mb-0 text-white-50 bg-secondblue rounded shadow-sm">
                                <div>
                                    <h6 className="mb-0 text-white ">Bank & Credit Card</h6>
                                </div>
                            </div>

                            <div className="bg-white rounded shadow-sm">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Account</th>
                                            <th scope="col">Balance</th>
                                            <th scope="col">Quick Menu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="align-middle col-8"><Link to="/"><u>Chequing</u></Link> 2345 6789-012</td>
                                            <td className="align-middle text-right">$12,345.00</td>
                                            <td className="align-middle">
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions</Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/">action 1</Link>
                                                    <Link className="dropdown-item" to="/">action 2</Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><Link to="/"><u>Student Account</u></Link> 888 6789-123</td>
                                            <td className="align-middle text-right">$7,452.00</td>
                                            <td>
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions</Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/">action 1</Link>
                                                    <Link className="dropdown-item" to="/">action 2</Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><Link to="/"><u>Savings</u></Link> 678 6789-679</td>
                                            <td className="align-middle text-right">$12,123.00</td>
                                            <td>
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions</Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/">action 1</Link>
                                                    <Link className="dropdown-item" to="/">action 2</Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><Link to="/"><u>Mastercard</u></Link> 678 6789-679</td>
                                            <td className="align-middle text-right">$567.00</td>
                                            <td>
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions</Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/">action 1</Link>
                                                    <Link className="dropdown-item" to="/">action 2</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className="align-items-center p-3 mt-3 mb-0 text-white-50 bg-secondblue rounded shadow-sm">
                                <div>
                                    <h6 className="mb-0 text-white ">Investments</h6>
                                </div>
                            </div>
                            <div className="bg-white rounded shadow-sm">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Account</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Quick Menu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="align-middle col-8"><Link to="/"><u>TFSA</u></Link></td>
                                            <td className="align-middle text-right">$23,456.00</td>
                                            <td className="align-middle">
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions</Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/">action 1</Link>
                                                    <Link className="dropdown-item" to="/">action 2</Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><Link to="/"><u>Build GIC</u></Link></td>
                                            <td className="align-middle text-right">$67,452.00</td>
                                            <td>
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions</Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/">action 1</Link>
                                                    <Link className="dropdown-item" to="/">action 2</Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><Link to="/"><u>NONRegisted GIC</u></Link></td>
                                            <td className="align-middle text-right">$2,789.00</td>
                                            <td>
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions</Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/">action 1</Link>
                                                    <Link className="dropdown-item" to="/">action 2</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="align-items-center p-3 mt-2 mb-0 text-white-50 bg-secondblue rounded shadow-sm">
                                <div>
                                    <h6 className="mb-0 text-white ">Mortgage & Loans</h6>
                                </div>
                            </div>
                            <div className="bg-white rounded shadow-sm">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Account</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Quick Menu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="align-middle col-8"><Link to="/"><u>Mortgage</u></Link></td>
                                            <td className="align-middle text-right">$589,000.00</td>
                                            <td className="align-middle">
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions</Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/">action 1</Link>
                                                    <Link className="dropdown-item" to="/">action 2</Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle"><Link to="/"><u>Student Loan</u></Link></td>
                                            <td className="align-middle text-right">$8,123.00</td>
                                            <td>
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions</Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/">action 1</Link>
                                                    <Link className="dropdown-item" to="/">action 2</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div className="my-3 p-0 bg-white rounded shadow-sm col-3">
                            <div className="quick-pay-div bg-secondblue rounded p-3">
                                <p>Quick Payments & Transfers</p>
                                <form className="quick-pay-form">
                                    <div className="d-flex mb-2">
                                        <div className="formGroupPretend">
                                            <span>From:</span>
                                        </div>
                                        <select className="form-element" id="exampleFormControlSelect1">
                                            <option>Chequing 2345 6789-012</option>
                                            <option>Student Account 888 6789-123</option>
                                        </select>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <div className="formGroupPretend">
                                            <span>To:</span>
                                        </div>
                                        <select className="form-element" id="exampleFormControlSelect1">
                                            <option>Select...</option>
                                            <option>Chequing 2345 6789-012</option>
                                            <option>Student Account 888 6789-123</option>
                                        </select>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <div className="formGroupPretend">
                                            <span>$</span>
                                        </div>
                                        <input type="text" className="form-element" placeholder="0.00" />
                                        <select className="form-element ml-2" id="exampleFormControlSelect1">
                                            <option>CAD</option>
                                            <option>USD</option>
                                        </select>
                                    </div>
                                    <div className="d-flex mb-2 mt-2 justify-content-end">
                                    <button type="button" className="btn-sm btn-warning">Submit</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default AccountSummary;