import React, { Component } from 'react';
import '../styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import logo from '../images/logoFull.png'
import NavItem from "./navItem";


class SearchBar extends Component {
    render() {
        return (
            <form id="searchBar" className="my-2 my-lg-0">
                <div className="row">
                    <div className="col-sm-9">
                        <input className="form-control mr-sm-2 rounded-0 border-0 shadow-none" id="searchInput" type="search"
                               placeholder="Song name or composer" aria-label="Search"/>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-secondary my-2 my-sm-0 rounded-0 border-0" id="submitSearch" type="submit">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

class Navbar extends Component {
    state = {}
    render() {
        return (
            <>
                <header className="bg-red p-4">
                    <div className="row">
                        <div className="col-md-5 col-lg-4">
                            <Link to="/">
                                <img id="logo" src={logo} alt="Logo"/>
                            </Link>
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <SearchBar/>
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                </header>

                <nav className="bg-red border-light-red navbar navbar-expand-md sticky-top p-0">
                    <div className="container-fluid p-0">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <ul className="navbar-nav mr-auto">
                            <NavItem linkTo="/" linkName="Home"/>
                            <NavItem linkTo="/compositions" linkName="Compositions"/>
                            <NavItem linkTo="/browse" linkName="Sheet Music"/>
                            <NavItem linkTo="/browse?genre=" linkName="Genres"/>
                            <NavItem linkTo="/browse?difficulty=" linkName="Difficulty Levels"/>
                        </ul>

                        <ul className="navbar-nav navbar-right">
                            <NavItem linkTo="/" linkName="About"/>
                            <NavItem linkTo="/" linkName="Contact"/>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;