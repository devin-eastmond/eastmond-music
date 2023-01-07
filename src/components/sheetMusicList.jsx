import React, { Component } from 'react';
import SheetMusic from "./sheetMusic";
import background from "../images/pattern3.png";
import {Link} from "react-router-dom";

class SheetMusicList extends Component {
    render() {
        return (
            <div className="bg-dark-gray pb-5" style={{backgroundImage: `url(${background})`, backgroundSize: "500px"}}>
                <h2 className="p-5 h1 text-white">All Sheet Music</h2>
                <div className="m-4 mb-0 mt-0">
                    <div className="grid row">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5">
                            <Link to="/view" className="song-wrapper text-decoration-none d-flex align-items-center justify-content-center">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </Link>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5">
                            <Link to="/view" className="song-wrapper text-decoration-none d-flex align-items-center justify-content-center">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </Link>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5">
                            <Link to="/view" className="song-wrapper text-decoration-none d-flex align-items-center justify-content-center">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </Link>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5">
                            <Link to="/view" className="song-wrapper text-decoration-none d-flex align-items-center justify-content-center">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </Link>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5">
                            <Link to="/view" className="song-wrapper text-decoration-none d-flex align-items-center justify-content-center">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </Link>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5">
                            <Link to="/view" className="song-wrapper text-decoration-none d-flex align-items-center justify-content-center">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </Link>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5">
                            <Link to="/view" className="song-wrapper text-decoration-none d-flex align-items-center justify-content-center">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </Link>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-5">
                            <Link to="/view" className="song-wrapper text-decoration-none d-flex align-items-center justify-content-center">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SheetMusicList;