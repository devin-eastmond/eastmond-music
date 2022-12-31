import Nav from 'react-bootstrap/Nav';
import NavigationBar from 'react-bootstrap/Navbar';
import React, {Component} from "react";
import NavItem from "./navItem";
import NavDropdown from "./navDropdown";
import difficulties from "../../data/difficulties";
import genres from "../../data/genres";
import '../../styles/navbar.css';
import NavbarBrand from "./navbarBrand";


class Navbar extends Component {
    render() {
        return (
            <NavigationBar collapseOnSelect expand="md" variant="dark" sticky="top" onClick={() => this.forceUpdate()}
                           className="bg-red border-light-red p-0 user-select-none">
                <div className="container-fluid p-0">
                    <NavbarBrand/>
                    <NavigationBar.Toggle aria-controls="responsive-navbar-nav" className="rounded-0 shadow-none m-2"/>
                    <NavigationBar.Collapse id="responsive-navbar-nav">
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
                    </NavigationBar.Collapse>
                </div>
            </NavigationBar>
        )
    }
}


export default Navbar;
