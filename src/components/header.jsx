import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../images/logoFull.png";
import SearchBar from "./searchBar";


class Header extends Component {
    render() {
        return (
            <header className="bg-red p-4 user-select-none">
                <div className="row">
                    <div className="col-md-5 col-lg-4">
                        <Link to="/">
                            <img id="logo" src={logo} alt="Logo"/>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <SearchBar/>
                    </div>
                </div>
            </header>
        )
    }
}


export default Header;
