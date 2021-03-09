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
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar className='navbar' color="black" dark expand="md">
                <MDBNavbarBrand>
                    <Link href='/'><a><img src='/logo.png' height={30} /><strong className="white-text brand">{Name}</strong></a></Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <Link href="/"><a className="nav-link">Home</a></Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link href="/schedule"><a className="nav-link">Schedule</a></Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link href="/speakers"><a className="nav-link">Speakers</a></Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link href="/contact"><a className="nav-link">Contact</a></Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link href="/register"><a className="nav-link">Register</a></Link>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>

        );
    }
}

export default NavBar