import React, { Component } from 'react';
import PageHeader from "../components/pageHeader";


class Compositions extends Component {
    render() {
        return (
            <>
                <PageHeader showBackButton={false}>Compositions</PageHeader>
                <div style={{height: "500px"}}></div>
            </>
        )
    }
}


export default Compositions;
