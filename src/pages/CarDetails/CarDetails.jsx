import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../component/Helmet/Helmet";
// Icons
import { GiCarSeat, GiFuelTank, GiGearHammer, GiMountainRoad } from 'react-icons/gi';
import { MdLuggage } from 'react-icons/md';

import "../CarDetails/car-detail.css";
import BookingForm  from "../../component/UI/Forms/BookingForm";

const CarDetails = (props) => {
    const params = useParams();
    console.log(params);
    const [carDetail, setCarDetail] = useState([]);
    const requestOptions = {
        method: 'GET',
    };

    const fetchCarDetail = () => {
        fetch(`http://localhost:8000/vehicle/${params.carId}/detail/`, requestOptions)
            .then(response => response.json())
            .then(data => setCarDetail(data))
            .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchCarDetail()
        console.log('i fire once');
    },[]);

    return (
        <div>
            <Helmet title="Detail" />
            <Container>
                <Row className="align-content-center">
                    <Col md="7 m-auto">
                        <Row>
                            <div className="col-md d-flex align-self-stretch">
                                <figure className="mt-3 sticky">
                                    <img className="img-fluid rounded" src={carDetail.car_white_image} alt="car cover" />
                                </figure>
                            </div>
                        </Row>
                        <Row>
                            <header className="border-bottom">
                                <Container>
                                    <div className="text-center">
                                        <li className="list-inline-item">
                                            <span className="text-secondary"><strong>{carDetail.manufactured_by}</strong></span>
                                            <h4 className="text-primary">{carDetail.car_name}</h4>
                                        </li>
                                    </div>
                                </Container>
                            </header>
                        </Row>
                        <Row className="mb-4 border-bottom">
                            <div className="col-md d-flex align-self-stretch">
                                <div className="d-flex mb-3">
                                    <div className="d-flex align-items-center justify-content-center m-2">
                                        <h3><span className="text-info"><GiMountainRoad /></span></h3>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <li className="list-inline-item">
                                            <span className="text-dark "><strong>Milage</strong></span>
                                            <h6 className="text-primary">{carDetail.milage}</h6>
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex align-self-stretch">
                                <div className="d-flex mb-3">
                                    <div className="d-flex align-items-center justify-content-center m-2">
                                        <h3><span className="text-info"> <GiGearHammer /> </span></h3>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <li className="list-inline-item">
                                            <span className="text-dark "><strong>Transmission</strong></span>
                                            <h6 className="text-primary">{carDetail.transmission}</h6>
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex align-self-stretch">
                                <div className="d-flex mb-3">
                                    <div className="d-flex align-items-center justify-content-center m-2">
                                        <h3><span className="text-info"><GiCarSeat /></span></h3>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <li className="list-inline-item">
                                            <span className="text-dark "><strong>Seats</strong></span>
                                            <h6 className="text-primary">{carDetail.seats}</h6>
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex align-self-stretch">
                                <div className="d-flex mb-3">
                                    <div className="d-flex align-items-center justify-content-center m-2">
                                        <h3><span className="text-info"><MdLuggage /></span></h3>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <li className="list-inline-item">
                                            <span className="text-dark "><strong>Luggage</strong></span>
                                            <h6 className="text-primary">{carDetail.luggage}</h6>
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex align-self-stretch">
                                <div className="d-flex mb-3">
                                    <div className="d-flex align-items-center justify-content-center m-2">
                                        <h3><span className="text-info"><GiFuelTank /></span></h3>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <li className="list-inline-item">
                                            <span className="text-dark "><strong>Fuel</strong></span>
                                            <h6 className="text-primary">{carDetail.fuel_type}</h6>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </Row>
                        {/* Lets see it latter 
                        <Row>
                            <CarDetailPane description={carDetail.descriptions} features={carDetail.features}></CarDetailPane>
                        </Row> */}
                    </Col>
                    <Col md="5">
                        <div className="position-sticky sticky mt-3">
                            <div className="p-4 bg-light text-white rounded">
                                <BookingForm/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CarDetails;



// const carDetail = {
//     car_name: "9 GMC Acadia",
//     transmission: "Manual",
//     luggage: 4,
//     fuel: "Petrol",
//     seats: 5,
//     milage: "12 mpl",
//     descriptions: "With a versatile interior, GMC Pro Safety Plus standard, & impressive performance packages, the 2023 Acadia 7 Seater SUV is ready for adventure",
//     vehicle_class: "economy",
//     vehicle_type: "suv_or_jeep",
//     sub_total_price: "124.18",
//     rating_count: 46,
//     star_rating: 3,
//     is_available: true,
//     manufactured_by: "GMC",
//     manufactured_year: "2019",
//     car_photo: carImage,
//     features: [
//         "All-wheel drive",
//         "Automatic Transmission",
//         "GPS navigation system",
//         "Leather interior",
//         "Cruise control",
//         "Air conditioning",
//         "Bluetooth wireless",
//         "CD Player",
//         "AUX/MP3 enabled",
//         "Tinted windows"
//     ]

// }