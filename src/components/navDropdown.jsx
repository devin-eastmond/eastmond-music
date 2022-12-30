import React, { Component } from 'react';
import '../styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

class NavDropdown extends Component {
    children;
    constructor(props) {
        super(props);
        this.children = props.children;
    }
    render() {
        const links = this.props.links;
        const dropdownItems = links.map((links) =>
            <Dropdown.Item className="dropdown-item p-0" key={links.linkName}>
                <Link to={links.to} className="nav-link text-white p-3">{links.linkName}</Link>
            </Dropdown.Item>
        );
        return (
            <Dropdown>
                <Dropdown.Toggle className="nav-item nav-link text-white p-3 rounded-0 border-0 bg-transparent">
                    {this.children}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu rounded-0 border-0 bg-gray p-0">
                    {dropdownItems}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default NavDropdown;