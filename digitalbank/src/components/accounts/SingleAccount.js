import React from 'react';
import { Link  } from 'react-router-dom';
import './summary.css';

const SingleAccount = ({item}) => (
    <tr>                                            
        <td className="align-middle col-8"><Link to="/"><u>{item.accounttype}</u></Link> {item.accountno}</td>
        <td className="align-middle text-right">{item.amount}</td>
        <td className="align-middle">
            <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions</Link>
            <div className="dropdown-menu">
                <Link className="dropdown-item" to="/">action 1</Link>
                <Link className="dropdown-item" to="/">action 2</Link>
            </div>
        </td>                                               
    </tr>
)

export default SingleAccount;