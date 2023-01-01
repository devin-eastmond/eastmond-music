import React, { Component } from 'react';
import SheetMusic from "./sheetMusic";
import background from "../images/pattern3.png";

class SheetMusicList extends Component {
    render() {
        return (
            <div className="bg-dark-gray pb-5" style={{backgroundImage: `url(${background})`, backgroundSize: "500px"}}>
                <h2 className="p-5 h1 text-white">All Sheet Music</h2>
                <div className="container">
                    <div className="grid row">
                        <div className="col mb-5">
                            <div className="song-wrapper m">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="song-wrapper">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="song-wrapper">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="song-wrapper">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="song-wrapper">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="song-wrapper">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="song-wrapper">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="song-wrapper">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="song-wrapper">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="song-wrapper">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="song-wrapper">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="song-wrapper">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="song-wrapper">
                                <SheetMusic songName="Dragonborn" composer="Jeremy Soule" difficulty="Advanced Piano"/>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-8 col-lg-9 col-xl-5 mb-5"></div>
                        <div className="col-lg-9 col-xl-2"></div>
                        <div className="col mb-5"></div>
                        <div className="col-xl-5 mb-5"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SheetMusicList;