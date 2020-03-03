import React from "react";

class AccountSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                id: 'dxc',
                firstName: '',
                lastName: '',
                email: '',
                fax: '',
                phones: []
            },
            errors: {

            }
        };
    }

    render() {
        return (
            <div>
                <h1>dxc</h1>
            </div>
        );
    }
}

export default AccountSummary;