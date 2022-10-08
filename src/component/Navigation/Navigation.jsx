import React from 'react';
import LoginForm from '../UI/Forms/LoginForm';
import RegisterForm from '../UI/Forms/RegisterFrom';
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
import ModelWrapper from '../UI/Model/ModelWrapper';
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
            <div>
                <Navbar color="primary" dark expand="lg">
                    <NavbarBrand href="/">
                    <span><h3 className="text-white">C<IoCarSportOutline/>R</h3></span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ms-auto" navbar >
                            <NavItem>
                                <NavLink href="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/cars">Our Cars</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ms-auto" navbar>
                            <NavItem className='me-2'>
                                <ModelWrapper 
                                    title="SING IN"
                                    // cancelButtonText="Cancel"
                                    // actionButtonText="Submit"
                                    buttonText="Login">
                                    <LoginForm></LoginForm>
                                </ModelWrapper>
                            </NavItem>
                            <NavItem className='me-2' >
                                <ModelWrapper 
                                    title="SIGN UP"
                                    // cancelButtonText="Cancel"
                                    // actionButtonText="Submit"
                                    buttonText="Get started">
                                    <RegisterForm></RegisterForm>
                                </ModelWrapper>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}