import React, { Component } from 'react';
import PageHeader from "../components/pageHeader";
import Filters from "../components/filters";


class Browse extends Component {
    render() {
        return (
            <>
                <PageHeader showBackButton={false}>Piano Sheet Music</PageHeader>
                <Filters/>
                <div style={{height: "500px"}}></div>
            </>
        )
    }
}


export default Browse;
