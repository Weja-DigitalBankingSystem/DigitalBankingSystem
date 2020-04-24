import React from 'react';
import './summary.css';
import NavBar from '../NavBar';
import axios from 'axios';

class PaymentTransfers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                transaction: ''
            },
            errors: {

            }
        };
    }

    componentDidMount() { 
        document.body.style.background= '#fff'; 
    }
    getTransactionHistory = () =>{
        const token = localStorage.getItem('token')
            const url = 'https://apisandbox.openbankproject.com/obp/v4.0.0/banks/gh.29.uk/accounts/1234567888/owner/transaction-requests'
            axios({
              url,
              method: 'GET', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `DirectLogin token="${token}"`
              }
            }).then(result => {
              this.setState({data: result.transaction_requests_with_charges})
              console.log(result.transaction_requests_with_charges)
            },
            (error)=>{
                this.setState({error});
            })
    }
    render() {
        return (
            <div>
                <NavBar component={NavBar}/>
                <div className="row">
                    <container class="container d-flex my-3">
                        <div class="col-4">
                            <div class="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-Transfer-list" data-toggle="list" href="#list-Transfer" role="tab" aria-controls="home">Make a Transfer</a>
                            <a className="list-group-item list-group-item-action" id="list-payment-list" data-toggle="list" href="#list-payment" role="tab" aria-controls="profile">Make a Payment</a>
                            <a className="list-group-item list-group-item-action" id="list-etransfers-list" data-toggle="list" href="#list-etransfers" role="tab" aria-controls="messages">Interac e-Transfers</a>
                            <a className="list-group-item list-group-item-action" id="list-history-list" data-toggle="list" href="#list-history" role="tab" aria-controls="settings" onClick= {this.getTransactionHistory}>Payment & Transfers History</a>
                            </div>
                        </div>
                        <div class="col-8">
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="list-Transfer" role="tabpanel" aria-labelledby="list-Transfer-list">
                                    <h3 className="mb-0">Make a Transfer</h3>
                                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus iaculis velit. Nam tincidunt vitae mi et viverra. Suspendisse finibus ligula ex, ac bibendum nibh ullamcorper ut. In hac habitasse platea dictumst. Maecenas ac risus accumsan, finibus nunc eget, rutrum mauris. </p>
                                    <hr className="mt-4"/>
                                    <p className="text-danger">* Required field</p>
                                    <form className="quick-pay-form">
                                        <div className="d-flex mb-2">
                                            <div className="formGroupPretend col-3">
                                                <span className="text-danger">*</span><span>From:</span>
                                            </div>
                                            <select className="form-element" id="exampleFormControlSelect1">
                                                <option>Select Account</option>
                                                <option>Chequing 2345 6789-012</option>
                                                <option>Student Account 888 6789-123</option>
                                            </select>
                                        </div>
                                        <div className="d-flex mb-2">
                                            <div className="formGroupPretend col-3">
                                                <span className="text-danger">*</span><span>To:</span>
                                            </div>
                                            <select className="form-element" id="exampleFormControlSelect1">
                                                <option>Select Account</option>
                                                <option>Chequing 2345 6789-012</option>
                                                <option>Student Account 888 6789-123</option>
                                            </select>
                                        </div>
                                        <div className="d-flex mb-2">
                                        <div className="formGroupPretend col-3">
                                            <span>Amount</span>
                                        </div>
                                        <input type="text" className="form-element" placeholder="0.00" name="amount" />
                                        <select className="form-element ml-2" id="exampleFormControlSelect1" onChange = {this.handleChange} name="currency">
                                            <option>CAD</option>
                                            <option>EUR</option>
                                            <option>GPB</option>
                                            <option>USD</option>
                                        </select>
                                    </div>
                                        <div className="d-flex mb-2 mt-2 justify-content-end">
                                        <button type="button" className="btn-sm btn-warning mt-3">Verify Transfer</button>
                                        </div>
                                    </form>
                                </div>


                                <div class="tab-pane fade" id="list-payment" role="tabpanel" aria-labelledby="list-payment-list">
                                    <h3 className="mb-0">Make a Payment</h3>
                                    <p className="mt-4">Fusce feugiat quam sed sem varius, sed mollis mauris malesuada. Phasellus sit amet diam non elit blandit dapibus. Ut bibendum quam congue, tincidunt risus lacinia, consectetur dui. Donec vitae nisl congue, blandit nunc ac, facilisis dolor. In dapibus dui eget auctor ultrices. Vivamus varius lorem mi, sed vehicula orci finibus sit amet. Morbi volutpat pharetra diam, eu varius lacus laoreet nec.
                                    </p>
                                    <p>Suspendisse iaculis nulla eget augue ultricies pulvinar ut eu metus. Maecenas in tortor pulvinar dui tincidunt scelerisque in id enim. Vestibulum vulputate ut nunc ut pellentesque. Praesent consequat porta ligula, sit amet euismod lacus tempus vel. Etiam gravida libero eros, vel ullamcorper mi tincidunt ut. Sed enim ligula, lobortis quis sem non, volutpat laoreet metus. </p>
                                    <hr className="mt-4"/>
                                    <p className="text-danger">* Required field</p>
                                    <form className="quick-pay-form">
                                        <div className="d-flex mb-2">
                                            <div className="formGroupPretend col-3">
                                                <span className="text-danger">*</span><span>From:</span>
                                            </div>
                                            <select className="form-element" id="exampleFormControlSelect1">
                                                <option>Select Your Account</option>
                                                <option>Chequing 2345 6789-012</option>
                                                <option>Student Account 888 6789-123</option>
                                            </select>
                                        </div>
                                        <div className="d-flex mb-2">
                                            <div className="formGroupPretend col-3">
                                                <span className="text-danger">*</span><span>To:</span>
                                            </div>
                                            <input type="text" className="form-element" placeholder="Enter an Account" />
                                        </div>
                                        <div className="d-flex mb-2">
                                            <div className="formGroupPretend col-3">
                                                <span className="text-danger">*</span><span>$</span>
                                            </div>
                                            <input type="text" className="form-element" placeholder="Enter Amount" />
                                        </div>
                                        <div className="d-flex mb-2">
                                            <div className="formGroupPretend col-3">
                                                <span className="text-danger">*</span><span>Frequency:</span>
                                            </div>
                                            <select className="form-element" id="exampleFormControlSelect1">
                                                <option>Once</option>
                                                <option>A week</option>
                                                <option>A month</option>
                                            </select>
                                        </div>
                                        <div className="d-flex mb-2 mt-2 justify-content-end">
                                        <button type="button" className="btn-sm btn-warning mt-3">Verify Transfer</button>
                                        </div>
                                    </form>

                                </div>
                                <div class="tab-pane fade" id="list-etransfers" role="tabpanel" aria-labelledby="list-etransfers-list">
                                <h3 className="mb-0">Interac e-Transfers</h3>
                                    <p className="mt-4">Donec venenatis vitae lacus ac consectetur. Suspendisse nec dui sit amet arcu elementum varius. Morbi blandit turpis at luctus rutrum. Nunc eu felis venenatis, egestas arcu ac, condimentum ipsum. Cras commodo diam at ligula pulvinar, ac blandit quam fringilla. In varius lorem orci, ut lacinia tellus ornare eget. In auctor congue ligula, non euismod urna sagittis et. Proin tincidunt enim non lacus scelerisque imperdiet. Nunc eget sem vitae mi dapibus lobortis. Fusce maximus a ipsum eu fringilla. Lorem ipsum dolor sit amet, <a href="/login">consectetur adipiscing elit</a>.
                                    </p>
                                    <hr className="mt-4"/>
                                    <p className="text-danger">* Required field</p>
                                    <form className="quick-pay-form">
                                        <div className="d-flex mb-2">
                                            <div className="formGroupPretend col-3">
                                            <span className="text-danger">*</span><span>From my Account:</span>
                                            </div>
                                            <select className="form-element" id="exampleFormControlSelect1">
                                                <option>Select Your Account</option>
                                                <option>Chequing 2345 6789-012</option>
                                                <option>Student Account 888 6789-123</option>
                                            </select>
                                        </div>
                                        <div className="d-flex mb-2">
                                            <div className="formGroupPretend col-3">
                                            <span className="text-danger">*</span><span>Recipient:</span>
                                            </div>
                                            <select className="form-element" id="exampleFormControlSelect1">
                                                <option>Select</option>
                                                <option>Superstore Market</option>
                                                <option>NSCC Student fee</option>
                                            </select>
                                        </div>
                                        <div className="d-flex mb-2">
                                            <div className="formGroupPretend col-3">
                                            <span className="text-danger">*</span><span>Amount:&nbsp;&nbsp;&nbsp;$</span>
                                            </div>
                                            <input type="text" className="form-element" placeholder="Enter Amount" />
                                        </div>
                                        
                                        <a href="/login">Send to a New Recipient</a>
                                        <div className="d-flex mb-2 mt-2 justify-content-end">
                                        <button type="button" className="btn-sm btn-warning mt-3">Verify Transfer</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="tab-pane fade" id="list-history" role="tabpanel" aria-labelledby="list-history-list">
                                <h3 className="mb-0">Interac e-Transfers</h3>
                                    <p className="mt-4">
                                        Maecenas vitae blandit dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed interdum eget nulla eu placerat. Duis cursus varius erat at pharetra. Vivamus sit amet dapibus sapien. In at lobortis augue. Aenean sit amet aliquet nisi.
                                    </p>
                                    <p>
                                        Sed quis lectus sit amet est eleifend euismod. Praesent iaculis, dui sit amet laoreet sagittis, turpis nisl pellentesque neque, vitae posuere libero dolor eu ipsum. 
                                    </p>
                                    <p>
                                        Nulla lobortis, felis id lacinia vestibulum, arcu lorem egestas elit, vel finibus arcu dolor vitae nulla. Etiam tempus velit sed felis interdum, in condimentum tortor laoreet. Praesent sit amet accumsan tortor, sed consectetur felis. 
                                    </p>
                                    <table class="table table-bordered small-size">
                                        <thead class="thead-light">
                                            <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">To</th>
                                            <th scope="col">From</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Invoice</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>18 MAR 2020</td>
                                            <td>wendy@du.com</td>
                                            <td>Savings 678 6789-679</td>
                                            <td>$123.45</td>
                                            <td>E-Transfer</td>
                                            <td>3306</td>
                                            </tr>
                                            <tr>
                                            <td>4 MAR 2020</td>
                                            <td>Savings 678 6789-679</td>
                                            <td>Mastercard 678 6789-679</td>
                                            <td>$8976.50</td>
                                            <td>Transfer</td>
                                            <td>1234</td>
                                            </tr>
                                            <tr>
                                            <td>15 FEB 2020</td>
                                            <td>Mastercard 678 6789-679</td>
                                            <td>Chequing 2345 6789-012</td>
                                            <td>$236.45</td>
                                            <td>Transfer</td>
                                            <td>3310</td>
                                            </tr>
                                            <tr>
                                            <td>1 FEB 2020</td>
                                            <td>wendy@du.com</td>
                                            <td>Chequing 2345 6789-012</td>
                                            <td>$1123.45</td>
                                            <td>E-Transfer</td>
                                            <td>1306</td>
                                            </tr>
                                            <tr>
                                            <td>20 JAN 2020</td>
                                            <td>Walmart market</td>
                                            <td>Savings 678 6789-679</td>
                                            <td>$89.21</td>
                                            <td>Payment</td>
                                            <td>4306</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                   

                                </div>
                            </div>
                        </div>
                    </container>
                </div>
            </div>
        );
    }
}

export default PaymentTransfers;