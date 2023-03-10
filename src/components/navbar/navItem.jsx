import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";


class NavItem extends Component {
    children;

    constructor(props) {
        super(props);
        this.children = props.children;
    }

    isActive = () => {
        return this.props.to !== "/" && window.location.href.includes(this.props.to)
    };

    render() {
        const navLinkClass = "p-0 nav-item";
        return (
            <Nav.Link className={this.isActive() ? navLinkClass + " active" : navLinkClass}>
                <Link to={this.props.to} className="nav-link text-white p-3">
                    {this.children}
                </Link>
            </Nav.Link>
        );
    }
}


export default NavItem;
