import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';


class NavDropdown extends Component {
    children;

    constructor(props) {
        super(props);
        this.children = props.children;
        this.state = {isActive: false}
    }

    isActive = linkTo => {
        let length = window.location.href.length - linkTo.length;

        return window.location.href.substring(length) === linkTo;
    };

    handleClick = isMouseExit => {
        if (!isMouseExit || this.state.isActive) {
            this.setState({isActive: !this.state.isActive});
        }
    };

    render() {
        const links = this.props.links;
        const dropdownItemClass = "p-0 dropdown-item";
        const dropdownItems = links.map((links) =>
            <Dropdown.Item className={this.isActive(links.to) ? dropdownItemClass + " active" : dropdownItemClass}
                           key={links.linkName}>
                <Link to={links.to} className="nav-link text-white p-3">{links.linkName}</Link>
            </Dropdown.Item>
        );
        const dropdownClass = "dropdown-menu rounded-0 border-0 bg-gray p-0";

        return (
            <Dropdown onClick={() => this.handleClick(false)}
                      onMouseEnter={() => this.handleClick(false)}
                      onMouseLeave={() => this.handleClick(true)}>
                <Dropdown.Toggle
                    className="nav-item nav-link text-white p-3 rounded-0 border-0 bg-transparent w-100 text-start">
                    {this.children}
                </Dropdown.Toggle>
                <div className={this.state.isActive ? dropdownClass + " show" : dropdownClass}>
                    {dropdownItems}
                </div>
            </Dropdown>
        );
    }
}


export default NavDropdown;
