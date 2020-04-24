import React from 'react';
import './summary.css';
import NavBar from '../NavBar';
import axios from 'axios';


class ProductServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                
            },
            errors: {

            }
        };
    }
    componentDidMount() { 
        const token = localStorage.getItem('token')
        const url = 'https://apisandbox.openbankproject.com/obp/v4.0.0/banks/gh.29.uk/products'
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
            this.setState({data: result.products})
            console.log(result.products)
        },
        (error)=>{
            this.setState({error});
        })
    }
    render() {
        return (
            <div className="bg-white">
                <NavBar component={NavBar}/>
                <main role="main" className="container">
                    <div className="d-flex mx-auto">
                       <h1>Products & Services Page</h1>
                       {
                           Object.keys(this.state.data).map((item, i) => {
                            return (
                                <div className="d-flex mb-2" key ={i} >
                                <p className="mt-4">{this.state.data[item].name}{'  '}{this.state.data[item].super_family}</p>
                                <p className="mt-4"></p>
                                </div>
                                
                            )
                        })
                       }
                    </div>
                </main>
            </div>
        );
    }
}

export default ProductServices;