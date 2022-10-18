import React from 'react';
import {IoCarSportOutline} from 'react-icons/io5';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <>
                <Navbar dark expand="lg">
                    <NavbarBrand href="/">
                        <span><h3 className="text-primary">RENT<IoCarSportOutline/>GO</h3></span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {/* <Nav className="ms-auto" navbar >
                            <NavItem>
                                <NavLink outline className="btn btn-primary" href="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/cars">Our Cars</NavLink>
                            </NavItem>
                        </Nav> */}
                        <Nav className="ms-auto" navbar>
                            <NavItem className='me-2'>
                                <NavLink className="btn btn-primary" href="/auth/login"> Sign-In </NavLink>
                            </NavItem>
                            <NavItem className='me-2' >
                                <NavLink className="btn btn-primary" href="/auth/register"> Get Started </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        );
    }
}