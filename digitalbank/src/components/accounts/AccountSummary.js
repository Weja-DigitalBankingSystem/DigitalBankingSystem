import React from 'react';
import { Link  } from 'react-router-dom'
import SingleAccount from './SingleAccount';
import './summary.css';
import NavBar from '../NavBar';
import axios from 'axios';

const joinPath = (...paths) => paths.map(it=> it.replace(/^\/|\/$/g, '')).join('/')
class AccountSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Accounts: [],
            error: {},
            transfer: {
                account_id: '1995',
                sendto_id:'1995',
                amount: '',
                currency:'',
                description:'this is a test for WEJA'
            }
            
        };   
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    getBalanceAPI = () => {
        const token = localStorage.getItem('token')
            const url = 'https://apisandbox.openbankproject.com/obp/v4.0.0/banks/gh.29.uk/balances'
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
                const b = this.changeData(result.accounts)
                console.log(result.accounts)

                this.setState({Accounts: result.accounts})
                
            },
            (error)=>{
                this.setState({error});
            })

    }
    changeData= (data) =>{
        var id;
        for(var i = 0; i < data.length; i++){
            delete data[1];
            delete data[5];

            if(data[0].hasOwnProperty("label")){ //added missing closing parenthesis
                data[0].label = 'Chequing Account 20009991995';
            }
            if(data[2].hasOwnProperty("label")){
                data[2].label = ["Student Account 398488222"];
            }
            if(data[3].hasOwnProperty("label")){
                data[3].label = ["Saving Account 1234567888sef567f"];
            }
            if(data[4].hasOwnProperty("label")){
                data[4].label = ["Credit Account 289ab58s52ew22"];
            }
            break;
        }
    }
    componentDidMount() { 
        this.getBalanceAPI()
        // window.location.reload()
    }

    generateBalance=() =>{
        return Object.keys(this.state.Accounts).map((item, i) => {
            return (
                <tr key ={i} >
                    <td className="align-middle col-6"><Link to ="/accountsummary">{this.state.Accounts[item].label}</Link></td>
                    <td className="align-middle text-left">{this.state.Accounts[item].balance.amount}</td>
                    <td className="align-middle col-2 ">{this.state.Accounts[item].balance.currency}</td>
                </tr>
            )
        })
    }
    testValue = () =>{
        for(let key in (this.state.Accounts)){

        }
    }
    handleChange(event) {
        this.setState({errors: {}})
        const {name,value} = event.target
        const clonedData = {...this.state.transfer}
        clonedData[name] = value
        this.setState({transfer:clonedData})
      }
    handleSubmit(event) {
        this.transactionRequest()
        event.preventDefault();
    }
    dropdownMenu = () => {
        return Object.keys(this.state.Accounts).map((item, i) => {
            return (
                    <option value={this.state.Accounts[item].id} >{this.state.Accounts[item].label}</option>
            )
        })

        
    }
    transactionRequest = (e) => {
        const token = localStorage.getItem('token')
        const base_url = 'https://apisandbox.openbankproject.com/obp/v4.0.0/banks/gh.29.uk/accounts'
        const account_id =this.state.transfer.account_id;
        const sendto_id =this.state.transfer.sendto_id;
        const currency =this.state.transfer.currency;
        const amount = this.state.transfer.amount;
        const description = this.state.transfer.description;

        const view_id ='owner';
        const url =  joinPath(base_url,account_id,view_id, '/transaction-request-types/SANDBOX_TAN/transaction-requests')
        axios({
        url,
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `DirectLogin token="${token}"`
        },
        data: {
             "to":{    "bank_id":"gh.29.uk",    "account_id":`${sendto_id}`  },  "value":{    "currency":`${currency}`,    "amount":`${amount}`  },  "description": `${description}`
            
            }
        }).then(result => {
            if(result){
                alert('Transfer was succesful')
                this.getBalanceAPI()
            }
        console.log(result)
        },(error)=>{
            this.setState({error});
            alert('Get error. Please choose the right currency and the amount less than 800!')
            console.log(error)
        })

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
                                    <h6 className="mb-0 text-white ">Bank &amp; Credit Card</h6>
                                </div>
                            </div>

                            <div className="bg-white rounded shadow-sm">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Account</th>
                                            <th scope="col">Balance</th>
                                            <th scope="col">Currency</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.generateBalance()}
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
                                            <td className="align-middle ">
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
                                            <td className="align-middle col-8"><Link to="/"><u>NONRegisted GIC</u></Link></td>
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
                                    <h6 className="mb-0 text-white ">Mortgage &amp; Loans</h6>
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
                                <p>Quick Payments &amp; Transfers</p>
                                <form className="quick-pay-form" onSubmit={this.handleSubmit}>
                                    <div className="d-flex mb-2">
                                        <div className="formGroupPretend">
                                            <span>From:</span>
                                        </div>
                                        <select className="form-element" name= "account_id" id="exampleFormControlSelect" onChange ={this.handleChange}>
                                            {this.dropdownMenu()}

                                        </select>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <div className="formGroupPretend">
                                            <span>To:</span>
                                        </div>
                                        <select className="form-element" name= "sendto_id" id="exampleFormControlSelect1" onChange ={this.handleChange}>
                                            {this.dropdownMenu()}
                                        </select>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <div className="formGroupPretend">
                                            <span>$</span>
                                        </div>
                                        <input type="text" className="form-element" placeholder="0.00" name="amount" onChange ={this.handleChange}/>
                                        <select className="form-element ml-2" id="exampleFormControlSelect2" onChange = {this.handleChange} name="currency">
                                            <option>CAD</option>
                                            <option>EUR</option>
                                            <option>GBP</option>
                                            <option>USD</option>
                                        </select>
                                    </div>
                                    <div className="d-flex mb-2 mt-2 justify-content-end">
                                    <button type="submit" value="Submit"  className="btn-sm btn-warning">Submit</button>
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