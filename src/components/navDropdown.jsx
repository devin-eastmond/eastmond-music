import React, { Component } from 'react';
import '../styles/menu.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

class NavDropdown extends Component {
    children;
    constructor(props) {
        super(props);
        this.children = props.children;
        this.state = {isActive: false}
    }
    render() {
        const links = this.props.links;
        const dropdownItems = links.map((links) =>
            <Dropdown.Item className="dropdown-item p-0" key={links.linkName}>
                <Link to={links.to} className="nav-link text-white p-3">{links.linkName}</Link>
            </Dropdown.Item>
        );

        const handleClick = isMouseExit => {
            if (!isMouseExit || this.state.isActive) {
                this.setState({isActive: !this.state.isActive});
            }
        };

        const dropdownClass = "dropdown-menu rounded-0 border-0 bg-gray p-0";

        return (
            <Dropdown onClick={() => handleClick(false)} onMouseEnter={() => handleClick(false)}
                      onMouseLeave={() => handleClick(true)}>
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