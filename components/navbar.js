import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBFormInline
} from "mdbreact";
import Link from 'next/link';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Name } from '../lib/constants'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };
        this.onClick = this.onClick.bind(this);
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        return (
            <MDBNavbar className='navbar' color="black" dark expand="md">
                <MDBNavbarBrand>
                    <Link href='/'><a><img src='/logo.png' height={30} /><strong className="white-text brand">{Name}</strong></a></Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <Link href="/"><a className="nav-link" onClick={() => this.onClick()}>Home</a></Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link href="/schedule"><a className="nav-link" onClick={() => this.onClick()}>Schedule</a></Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link href="/speakers"><a className="nav-link" onClick={() => this.onClick()}>Speakers</a></Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link href="/contact"><a className="nav-link" onClick={() => this.onClick()}>Contact</a></Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link href="/register"><a className="nav-link" onClick={() => this.onClick()}>Register</a></Link>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>

        );
    }
}

export default NavBar