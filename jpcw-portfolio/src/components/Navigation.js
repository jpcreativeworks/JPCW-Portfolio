import React from 'react'
import { Link } from 'react-router-dom'; //module react router dom
import NewLogo from '../updated-Logo.jpg'
export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={ { "background-color" : "#6f42c1" } }>
            <div className="updatedLogo container-fluid">
                <Link to='/'><img src={NewLogo} style={ {"width" : "170px", "height" : "130px", "display" : "flex"} } alt='JP Creative Works Logo'/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={ {"color" : "white"} }></span>
                </button>       
                <div className="collapse navbar-collapse" style={ {"text-color" : "white"} } id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto" id="navLinks">
                        
                        <li className="nav-about" id='abouthome'>
                            <Link to="/JPCW-Portfolio">About</Link>
                        </li>
                        <li className="nav-portfolio">
                            <Link to="/JPCW-Portfolio/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-resume">
                            <Link to="/JPCW-Portfolio/resume">Resume</Link>
                        </li>
                        <li className="nav-contact">
                            <Link to="/JPCW-Portfolio/contact">Contact</Link>
                        </li>
                        
                    </ul>      
                </div>
            </div>
        </nav>
      
    );
}