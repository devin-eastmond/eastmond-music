import React, {Component} from "react";
import background from "../images/header.jpeg";


class PageHeader extends Component {
    children;

    constructor(props) {
        super(props);
        this.children = props.children;
    }

    render() {
        return (
            <div className="background-image border-bottom-lighter-red p-5 text-white user-select-none"
                 style={{backgroundImage: `url(${background})`}}>
                <h1 className="header-text text-shadow">
                    <a className={(this.props.showBackButton ? "visible" : "d-none") + " position-relative"}
                       id="back-button" href="#">
                        <span className="text-white back-arrow position-absolute">➜</span>
                        <span className="invisible">➜ </span>
                    </a>
                    <span>{this.children}</span>
                </h1>
            </div>
        )
    }
}


export default PageHeader;
