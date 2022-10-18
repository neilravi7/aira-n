import { Container, Row, Col } from "reactstrap";
import Helmet from "../../component/Helmet/Helmet";
import { FaRoute, FaRegHandshake } from 'react-icons/fa';
import {IoCarOutline} from 'react-icons/io5';

const Home = () => {
    return (
        <div>
            <Helmet title="Home" />
            <header className="py-5 mb-4">
                <Container mt="2">
                    <div className="text-center">
                        <h1> Welcome to Aira </h1>
                        <p className="lead mb-0"> A Car Rental Service </p>
                    </div>
                </Container>
            </header>
            <Container >                               
                <Row className="no-gutter">
                    <Col md="12" className="d-flex align-items-center">
                        <div className="w-100">
                            {/* <h3 className="m-4">Better Way to Rent Your Perfect Cars</h3> */}
                            <Row className="d-flex mb-4">
                                <Col md="4" className="d-flex align-self-stretch">
                                    <div className="services w-100 text-center text-primary ">
                                        <div className="icon d-flex align-items-center justify-content-center"><span><h1> <FaRoute/> </h1></span></div>
                                        <div className="text w-100">
                                            <h5 className="heading mb-2">Choose Your Pickup Location</h5>
                                        </div>
                                    </div>
                                </Col>

                                <Col md="4" className="d-flex align-self-stretch">
                                    <div className="services w-100 text-center text-primary">
                                        <div className="icon d-flex align-items-center justify-content-center"><span><h1><FaRegHandshake/></h1></span></div>
                                        <div className="text w-100">
                                            <h5 className="heading mb-2">Select Best Deal</h5>
                                        </div>
                                    </div>
                                </Col>

                                <Col md="4" className="d-flex align-self-stretch">
                                    <div className="services w-100 text-center text-primary">
                                        <div className="d-flex align-items-center justify-content-center"><h1><IoCarOutline/></h1></div>
                                        <div className="text w-100">
                                            <h5 className="mb-2">Reserve Your Rental Car</h5>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            {/* <div className="bg-info p-3 rounded">
                                <div>
                                    <Card body className="my-2">
                                        <CardTitle tag="h5">
                                            Special Title Treatment
                                        </CardTitle>
                                        <CardText>
                                            With supporting text below as a natural lead-in to additional content.
                                        </CardText>
                                        <Button color="primary">
                                            Go somewhere
                                        </Button>
                                    </Card>
                                </div>
                                <BookingForm>
                                    
                                </BookingForm>
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;