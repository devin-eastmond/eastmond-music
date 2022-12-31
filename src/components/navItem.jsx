import React, { Component } from 'react';
import '../styles/menu.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";


class NavItem extends Component {
    children;

    constructor(props) {
        super(props);
        this.children = props.children;
    }

    render() {
        return (
            <Nav.Link className="p-0 nav-item">
                <Link to={this.props.to} className="nav-link text-white p-3">
                    {this.children}
                </Link>
            </Nav.Link>
        );
    }
}


export default NavItem;
