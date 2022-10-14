import React from "react";
import { Route } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Form, Input, Label, FormGroup, Button } from "reactstrap";
import vehicleService from "../../../services/vehicle.service";
import { withRouter } from "../../../common/with-router";

class BookingForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            originCity:'', 
            pickUpLocation:'', 
            startDate:'',
            startTime:'',
            endDate:'',
            endTime:''
        }

        this.handleChange = this.handleChange.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        const { target } = event;
        const value = target.type === 'checkbox' ? target.value : target.value; 
        const {name} = target;
        // console.log("target name", target.type);
        // console.log("target name", target.value);
        
        this.setState(
            {[name] : value}
        );
    }

    handleSubmit(e){
        
        e.preventDefault();
        console.log(this.state);
        // authService.login(this.state.username, this.state.password).then(() => {
        //     this.props.router.navigate("/profile");
        //     window.location.reload();
        // },error =>
        // {
        //     const resMessage = (error.response &&
        //         error.response.data &&
        //         error.response.data.message) ||  error.message ||  error.toString();
        //         this.setState({
        //             loading: false,
        //             message: resMessage
        //           });
        // }
        // )
    };


    render (){ 
        const {originCity, pickUpLocation, startDate, startTime, endDate, endTime } = this.state   
        return (
            <div>
                <h1 className="fs-4 card-title fw-bold mb-4 text-primary">Duration</h1>
                <Form className="form text-dark" onSubmit={this.handleSubmit}>
                    <FormGroup floating>
                        <Input
                            id="originCity"
                            name="originCity"
                            type="select"
                            value={originCity}
                            onChange={
                                (e) => this.handleChange(e)
                            }
                        >
                            <option value={"option1"}>Location - 1</option>
                            <option value={"option2"}>Location - 2</option>
                        </Input>
                        <Label for="originCity">
                            ORIGIN CITY
                        </Label>
                    </FormGroup>

                    <FormGroup floating>
                        <Input
                            id="pickUpLocation"
                            name="pickUpLocation"
                            placeholder="Pick Up Location"
                            type="text"
                            value={pickUpLocation}
                            onChange={
                                (e) => this.handleChange(e)
                            }
                        />
                        <Label for="pickUpLocation">
                            PICK-UP LOCATION
                        </Label>
                    </FormGroup>
                    <Row>
                        <Col md={6}>
                            <FormGroup floating>
                                <Input
                                    id="startDate"
                                    name="startDate"
                                    placeholder="Start Date"
                                    type="date"
                                    value={startDate}
                                    onChange={
                                        (e) => this.handleChange(e)
                                    }
                                />
                                <Label for="startDate">
                                    START DATE
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup floating>
                                <Input
                                    id="startTime"
                                    name="startTime"
                                    placeholder="Time"
                                    type="time"
                                    value={startTime}
                                    onChange={
                                        (e) => this.handleChange(e)
                                    }
                                />
                                <Label for="startTime">
                                    TIME
                                </Label>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup floating>
                                <Input
                                    id="endDate"
                                    name="endDate"
                                    placeholder="End Date"
                                    type="date"
                                    value={endDate}
                                    onChange={
                                        (e) => this.handleChange(e)
                                    }
                                />
                                <Label for="endDate">
                                    END DATE
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup floating>
                                <Input
                                    id="endTime"
                                    name="endTime"
                                    placeholder="Time"
                                    type="time"
                                    value={endTime}
                                    onChange={
                                        (e) => this.handleChange(e)
                                    }
                                />
                                <Label for="endTime">
                                    TIME
                                </Label>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button color="success" className="form-control">
                        Book Now
                    </Button>
                </Form>
            </div>
        );
    }

}

export default BookingForm;