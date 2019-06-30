import React, {Component} from 'react'
import {Route, Link, Switch} from "react-router-dom";
import Layout from "../layouts/Layout";
import {Table} from 'reactstrap';

import api from "../gateway/api";

export default class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            cryptos: [],
        }
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        this.setState({cryptos: await api.get(`/api/cryptocurrency/list`), loading: false});
    }

    render() {

        const {cryptos, loading} = this.state;

        return (
            <Layout title="Holdings ">

                {!loading && cryptos.length === 0 && <div className="container-fluid there-is-no">
                    <p className="text-center mt-5">
                        There is no cryptos yet
                        <Link to={`/add`}> click here</Link> to add crypto currency
                    </p>
                </div>}

                {!loading && cryptos.length > 0 && <Table>
                    <tbody>
                    {cryptos.map(c => (<tr key={c.id}>
                        <th scope="row" key={c.id}>{c.symbol}</th>
                        <td>{c.name}</td>
                        <td>{c.balance}</td>
                        <td>${(c.price*1).toFixed(2)}</td>
                        <td>${(c.price*c.balance*1).toFixed(2)}</td>
                    </tr>))}
                    </tbody>
                </Table>}

                <Link to={`/add`} className="btn btn-danger create-new">+</Link>
            </Layout>
        )
    }
}