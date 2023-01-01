import React, {Component} from "react";


class Filters extends Component {
    render() {
        return (
            <div className="border-bottom border-5 border-danger p-5">
                <h1 className="header-text text-gray">Filters</h1>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <h5 className="text-gray">Genre</h5>
                        <select className="form-select mt-3 w-75 rounded-1 shadow-none">
                            <option selected>All</option>
                            <option value="movie-music">Movie Music</option>
                            <option value="video-game-soundtracks">Video Game Soundtracks</option>
                            <option value="religious-music">Religious Music</option>
                        </select>
                    </div>
                    <div className="col-md-3 mt-4 mt-md-0">
                        <h5 className="text-gray">Difficulty</h5>
                        <select className="form-select mt-3 w-75 rounded-1 shadow-none">
                            <option selected>All</option>
                            <option value="easy">Easy</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                    <div className="col-md-3 mt-4 mt-md-0">
                        <h5 className="invisible">Submit</h5>
                        <button className="btn btn-danger mt-2 rounded-0">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Filters;
