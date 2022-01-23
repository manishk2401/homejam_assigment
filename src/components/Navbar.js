/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import logo from '../image/logo.svg';

import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBTypography
} from 'mdb-react-ui-kit';

export default function App() {
    const [showNavRight, setShowNavRight] = useState(false);

    return (
        <MDBNavbar expand='lg' dark bgColor='transparent'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'><img src={logo} alt="" /></MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarRightAlignExample'
                    aria-controls='navbarRightAlignExample'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavRight(!showNavRight)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showNavRight}>
                    <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
                        <MDBNavbarItem href='#' className='px-2'>
                            <MDBNavbarLink href='#'><MDBTypography tag='h6'><MDBIcon fas icon="search" /> Search</MDBTypography></MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem className='px-2'>
                            <MDBNavbarLink href='#'><MDBTypography tag='h6'>Help</MDBTypography></MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='px-2'>
                            <MDBNavbarLink href='#'><MDBTypography tag='h6'>Account</MDBTypography></MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='px-2'>
                            <MDBNavbarLink href='#'><MDBTypography tag='h6'><MDBIcon fas icon="shopping-bag" /></MDBTypography></MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}