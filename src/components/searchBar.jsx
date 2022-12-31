import React, {Component} from "react";


class SearchBar extends Component {
    render() {
        return (
            <form id="searchBar" className="my-2 my-lg-0">
                <div className="row">
                    <div className="col-sm-9">
                        <input className="form-control rounded-0 border-0 shadow-none" id="searchInput"
                               type="search" placeholder="Song name or composer" aria-label="Search"/>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-gray my-2 my-sm-0 rounded-0 border-0" id="submitSearch" type="submit">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}


export default SearchBar;
