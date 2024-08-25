import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        {props.title}
                    </a>
                    
                </div>
               
            </nav>
        </div>
    );
}