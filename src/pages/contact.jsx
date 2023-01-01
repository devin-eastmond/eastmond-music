import React, { Component } from 'react';
import PageHeader from "../components/pageHeader";


class Contact extends Component {
    render() {
        return (
            <>
                <PageHeader showBackButton={false}>Contact</PageHeader>
                <div style={{height: "500px"}}></div>
            </>
        )
    }
}


export default Contact;
