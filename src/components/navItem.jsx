import React, { Component } from 'react';
import '../styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

class NavItem extends Component {
    children;
    constructor(props) {
        super(props);
        this.children = props.children;
    }
    render() {
        return (
            <li className="nav-item active">
                <Link to={this.props.to} className="nav-link text-white p-3">
                    {this.children}
                </Link>
            </li>
        );
    }
}

export default NavItem;