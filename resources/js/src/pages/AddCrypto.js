import React, {Component} from 'react'
import {FormGroup, Label, Input, Button} from 'reactstrap';
import {toast} from 'react-toastify';
import {Redirect} from 'react-router'
import api from "../gateway/api";
import Layout from "../layouts/Layout";

export default class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            redirect: null,
            entity: 'stores',
            cryptos: [],
            formData: {},
        }
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        this.setState({cryptos: await api.get(`/api/cryptocurrency/listings/latest`)});
    }

    async submit(event) {
        event.preventDefault();

        this.setState({loading: true});

        try {
            await api.post(`/api/cryptocurrency/add`, this.state.formData);

            toast.success(`Successfully added!`);
            this.setState({redirect: true});
        } catch (err) {
            toast.error(err.message);
        } finally {
            this.setState({loading: false});
        }
    }

    handleChange(event) {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;
        this.setState({formData});
    }

    render() {

        const {cryptos} = this.state;

        if (this.state.redirect) {
            return <Redirect to={`/`}/>;
        }

        return (
            <Layout>
                <form onSubmit={this.submit.bind(this)}>
                    <div>
                        <FormGroup>
                            <Label for="exampleSelect">CryptoCurrency</Label>
                            <Input type="select" name="symbol" id="symbol" onChange={this.handleChange.bind(this)}>
                                <option value="">Select Crypto</option>
                                {cryptos.map(c => (<option key={c.id} value={c.symbol}>{c.symbol}</option>))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="Balance">Balance</Label>
                            <Input type="text" name="balance" id="balance" onChange={this.handleChange.bind(this)}
                                   value={this.state.formData["balance"] ? this.state.formData["balance"] : ''}/>
                        </FormGroup>
                    </div>

                    <Button type="submit" onClick={this.submit.bind(this)}
                            color="danger col-12">{this.state.loading ? "Submiting..." : "Submit"}</Button>

                </form>
            </Layout>

        )
    }
}
