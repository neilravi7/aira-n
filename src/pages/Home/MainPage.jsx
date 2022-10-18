import { Container, Row, Col } from "reactstrap";
import Helmet from "../../component/Helmet/Helmet";
import { Link } from "react-router-dom";
// import { FaRoute, FaRegHandshake } from 'react-icons/fa';
// import { IoCarOutline } from 'react-icons/io5';

const MainPage = () => {
    
    return (
        <>
            <Helmet title="Aira" />
            <Container className="col-xxl-8 px-4 py-3">
                
                <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
                    <Col sm={8} lg={6} className="col-10" >
                        <img src="https://static.designxel.com/static/vector/2013/10/21/set-of-various-sport-cars-vector-04.jpg" className="d-block mx-lg-auto img-fluid" alt="ref from .designxel.com " width="700" height="500" loading="lazy" />
                    </Col>
                    <Col lg={6}>
                        <h1 className="display-5 fw-bold lh-1 mb-3">Premium Car Rental</h1>
                        <p className="lead">Discover car rental option in india  with rent a car select from a range of car options and local specials.</p>
                        <div className="d-grid d-md-flex justify-content-md-start">
                            {/* <BookingForm></BookingForm> */}
                            {/*<button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
                            <Link to="/cars" className="btn btn-primary btn-lg px-4 me-md-2">Rent Car Now</Link>
                        </div>
                    </Col>
                </Row>
                
                {/* <div className="bg-primary text-secondary px-4 py-5 text-center">
                    <div className="">
                    <h1 className="display-5 fw-bold text-white">Dark mode hero</h1>
                        <Col lg={6} className="mx-auto">
                            <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
                                <button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button>
                            </div>
                        </Col>
                    </div>
                </div> */}
            </Container>
        </>
    );
};

export default MainPage;