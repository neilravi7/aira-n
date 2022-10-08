import React, { useState, useEffect } from "react";
import { Container, Row, Col} from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardLink } from "reactstrap";
import Helmet from "../../component/Helmet/Helmet";

const CarListing = () => {
    const [carListingData, setCarListingData] = useState([]);
    const requestOptions = {
        method: 'GET',
    };

    // fetch car listing data
    const fetchCarListingData = () => {
        fetch('http://perfect-car.herokuapp.com/vehicle/list/', requestOptions)
            .then(response => response.json())
            .then(data => setCarListingData(data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchCarListingData()
    },[]);

    return (
        <div>
            <Helmet title="Listing" />
            <header className="py-5 mb-4">
                <Container mt="2">
                    <div className="text-center">
                        {/* <h1> Welcome to Aira </h1> */}
                        <p className="lead mb-0"> All Available Cars </p>
                    </div>
                </Container>
            </header>
            <Container>
                <Row className="d-flex">
                    {/* {carListingData.slice(0, 5).map((item, index) => ( */}
                    {carListingData.map((item, index) => (
                        <Col md="4" key={index}>
                            <Card className="bg-light mb-3">
                                <CardImg className="rounded" variant="top" src={item.car_photo} />
                                <CardBody>
                                    <CardTitle>{item.car_name}</CardTitle>
                                    <CardLink className="btn btn-success" href="#">Book Now</CardLink>
                                    <CardLink className="btn btn-primary" href={`/car/details/${item.id}`}>Details</CardLink>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
export default CarListing;