import React, {Component} from "react";
import {Link} from "react-router-dom";
import altoClef from "../../images/AltoClef.png";
import altoClefNoBar from "../../images/AltoClefNoBar.png";


class NavbarBrand extends Component {
    render() {
        return (
            <Link to="/">
                <div id="homeIcon">
                    <img src={altoClef} id="iconWithBars" alt=""/>
                    <img src={altoClefNoBar} id="iconNoBars" alt=""/>
                </div>
            </Link>
        )
    }
}


export default NavbarBrand
