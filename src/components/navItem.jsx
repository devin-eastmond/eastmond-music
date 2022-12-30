import React, { Component } from 'react';
import '../styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

class NavItem extends Component {
    render() {
        return (
            <li className="nav-item active">
                <Link to={this.props.linkTo} className="nav-link text-white p-3">
                    {this.props.linkName}
                </Link>
            </li>
        );
    }
}

export default NavItem;