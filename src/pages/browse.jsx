import React, { Component } from 'react';
import PageHeader from "../components/pageHeader";
import Filters from "../components/filters";
import SheetMusicList from "../components/sheetMusicList";


class Browse extends Component {
    render() {
        return (
            <>
                <PageHeader showBackButton={false}>Piano Sheet Music</PageHeader>
                <Filters/>
                <SheetMusicList/>
            </>
        )
    }
}


export default Browse;
