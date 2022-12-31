import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../images/logoFull.png";
import NavItem from "./navItem";
import NavDropdown from "./navDropdown";
import difficulties from "../data/difficulties";
import genres from "../data/genres";


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
                        <button className="btn btn-dark my-2 my-sm-0 rounded-0 border-0" id="submitSearch" type="submit">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}


class Menu extends Component {
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
                    </div>
                </header>

                <Navbar collapseOnSelect expand="md" variant="dark" className="bg-red border-light-red p-0" sticky="top">
                    <div className="container-fluid p-0">
                        <NavItem to="/">E</NavItem>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="rounded-0 shadow-none"/>
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className="me-auto">
                                <NavItem to="/compositions">Compositions</NavItem>
                                <NavItem to="/browse">Sheet Music</NavItem>
                                <NavDropdown links={genres}>Genres</NavDropdown>
                                <NavDropdown links={difficulties}>Difficulty Levels</NavDropdown>
                            </Nav>
                            <Nav>
                                <NavItem to="/about">About</NavItem>
                                <NavItem to="/contact">Contact</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </>
        )
    }
}


export default Menu;
