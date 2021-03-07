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
                    <Link href='/'><a><strong className="white-text brand">{Name}</strong></a></Link>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <Link href="#!"><a className="nav-link">Schedule</a></Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link href="/speakers"><a className="nav-link">Speakers</a></Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link href="#!"><a className="nav-link">Sponsors</a></Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link href="#!"><a className="nav-link">Organizers</a></Link>
                        </MDBNavItem>
                        {/* <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2">Dropdown</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem> */}
                        <MDBNavItem>
                            <Link href="#!"><a className="nav-link">Register</a></Link>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>

        );
    }
}

export default NavBar