import React, { Component } from 'react';
import thumbnail from "../images/thumbnails/Dragonborn.jpg"

class SheetMusic extends Component {
    render() {
        return (
            <div className="sheet d-flex align-items-center justify-content-center user-select-none"
                 style={{backgroundImage: `url(${thumbnail})`}}>
                <div>
                    <div className="sheet-info text-white bg-light-red p-3">
                        <div>
                            <h5>{ this.props.songName }</h5>
                            <p>Composed by { this.props.composer }</p>
                        </div>
                        <div className="text-end mb-0 mt-5 pt-3">
                            <p>{ this.props.difficulty }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SheetMusic;
