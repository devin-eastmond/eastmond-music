import React, { Component } from 'react';
import PageHeader from "../components/pageHeader";


class About extends Component {
    render() {
        return (
            <>
                <PageHeader showBackButton={false}>About</PageHeader>
                <div style={{height: "500px"}}></div>
            </>
        )
    }
}


export default About;
