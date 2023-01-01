import React, { Component } from 'react';
import PageHeader from "../components/pageHeader";


class Browse extends Component {
    render() {
        return (
            <>
                <PageHeader showBackButton={false}>Piano Sheet Music</PageHeader>
                <div style={{height: "500px"}}></div>
            </>
        )
    }
}


export default Browse;
