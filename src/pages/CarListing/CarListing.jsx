import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardLink } from "reactstrap";
import Helmet from "../../component/Helmet/Helmet";
import { GiCarSeat, GiFuelTank, GiGearHammer, GiMountainRoad } from 'react-icons/gi';


import "../CarListing/card.css";

const CarListing = () => {
    const [carListingData, setCarListingData] = useState([]);
    const requestOptions = {
        method: 'GET',
    };

    // fetch car listing data
    const fetchCarListingData = () => {
        fetch('http://localhost:8000/vehicle/list/', requestOptions)
            .then(response => response.json())
            .then(data => setCarListingData(data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchCarListingData()
    }, []);

    return (
        <>
            <Helmet title="Listing" />
            <header className="py-5 mb-4">
                {/* <Container>
                    <Row>
                        <Col className="col-12">
                            <form class="trip-form">
                                <div class="row align-items-center mb-4">
                                    <div class="col-md-6">
                                        <h3 class="m-0">Begin your trip here</h3>
                                    </div>
                                    <div class="col-md-6 text-md-right">
                                        <span class="text-primary">32</span> <span>cars available</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-3">
                                        <label for="cf-1">Where you from</label>
                                        <input type="text" id="cf-1" placeholder="Your pickup address" class="form-control"/>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="cf-2">Where you go</label>
                                        <input type="text" id="cf-2" placeholder="Your drop-off address" class="form-control"/>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="cf-3">Journey date</label>
                                        <input type="text" id="cf-3" placeholder="Your pickup address" class="form-control datepicker px-3"/>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="cf-4">Return date</label>
                                        <input type="text" id="cf-4" placeholder="Your pickup address" class="form-control datepicker px-3"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input type="submit" value="Submit" class="btn btn-primary"/>
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container> */}
            </header>
            <Container  className="d-flex justify-content-center">
                <Row className="d-flex">
                    {carListingData.map((item, index) => (
                        <Col md="4" className="mb-3" key={index}>
                            <Card className="shadow-lg">
                                <CardImg className="p-3 rounded-lg bg-light" variant="top"  height="275px" src={item.car_white_image} />
                                <CardBody >

                                    <CardTitle className="d-flex justify-content-center" > {item.car_name}</CardTitle>                                    
                                    <div className="d-flex flex-row justify-content-between p-3 mid">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex flex-row">
                                                <div className="d-flex flex-column ml-1">
                                                    <small><GiGearHammer /> {item.transmission} </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <div className="d-flex flex-row">
                                                <div className="d-flex flex-column ml-1">
                                                    <small><GiFuelTank /> {item.fuel_type} </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <div className="d-flex flex-row">
                                                <div className="d-flex flex-column ml-1">
                                                    <small><GiCarSeat/>{item.car_seats}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2 mx-3" />
                                    <div className="d-flex flex-row justify-content-between px-3 pb-4">
                                        <div className="d-flex flex-column"><span className="text-dark">Price</span></div>
                                        <div className="d-flex flex-column">
                                            <h5 className="mb-0">&#8377;{item.price_per_day} /day</h5>
                                        </div>
                                    </div>
                                    {/* <small className="text-muted key pl-3">Standard key Features</small> */}
                                    <div className="mx-3 mt-3 mb-2">
                                    <CardLink className="btn btn-success form-control rounded" href={`/car/details/${item.id}`}>Book Now</CardLink>                                    </div>
                                    {/* <small className="d-flex justify-content-center text-muted">*Legal Disclaimer</small> */}
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
export default CarListing;