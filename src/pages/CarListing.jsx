import { Component } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../component/Helmet/Helmet";
import CarItem from "../component/UI/CarItem/CarItem";
import axios from "axios";

export default class CarListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            carListingData: []
        };
        this.requestOption = {
            method: 'GET',
            redirect: 'follow'
        };
    };

    getCarData() {
        this.setState({
            loading: true
        });


        fetch("https://perfect-car.herokuapp.com/vehicle/list/", this.requestOptions)
            .then(response => response.text())
            .then(result => {this.setState({
                loading:false,
                carListingData:result
            })})
            .catch(error => console.log('error', error));
    };

    componentDidMount() {
        this.getCarData();
    }

    render() {
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
                        {/* {
                            this.carListingData.map((carObject) => (
                                <CarItem item={carObject} key={carObject.id} />
                            ))
                        } */}
                    </Row>
                </Container>
            </div>
        );
    }
}