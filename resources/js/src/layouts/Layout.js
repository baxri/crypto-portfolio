import React, { Component } from 'react'
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify';

export default class Layout extends Component {
    render() {

        return (
            <div >
                <Header />
                <div className="p-4 mt-5">
                    <p className="page-title">{this.props.title}</p>
                    {this.props.children}
                    <ToastContainer />
                </div>
            </div>
        )
    }
}
