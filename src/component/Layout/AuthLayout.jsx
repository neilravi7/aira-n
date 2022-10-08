import React from "react";
import { Container, Row, Col } from "reactstrap";
import {IoCarSportOutline} from 'react-icons/io5';

const AuthLayout = ({children}) => {
    return(
        <>
        <section className="h-100">
            <Container  className="h-100">
                <Row className="justify-content-sm-center h-100">
                    <Col xxl={4} lg={5} md={7} sm={9}>
                        <div className="text-center my-5">
                            <span><h1 className="text-success">C<IoCarSportOutline/>R</h1> </span>
                        </div>
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                {children}
                            </div>
                            <div className="card-footer py-3 border-0">
                                <div className="text-center">
                                    Don't have an account? <a href="register.html" className="text-dark">Create One</a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5 text-muted">
                            Copyright &copy; 2017-2021 &mdash; Your Company
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
    );
}

export default AuthLayout;