import React from 'react';
import './summary.css';
import NavBar from '../NavBar';

class PaymentTransfers extends React.Component {

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
                       <h1>Payments and Transfers Page</h1>
                    </div>
                </main>
            </div>
        );
    }
}

export default PaymentTransfers;