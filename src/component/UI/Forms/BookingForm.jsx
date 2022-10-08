import { Col, Row } from "reactstrap";
import { Form, Input, Label, FormGroup, Button } from "reactstrap";
const BookingForm = () => {
    return (
        <div>
            <h1 className="fs-4 card-title fw-bold mb-4"></h1>
            <Form className="form text-dark">
                <FormGroup floating>
                    <Input
                        id="originCity"
                        name="city"
                        type="select"
                    >
                        <option>
                            Location-1
                        </option>
                        <option>
                            Location-2
                        </option>
                        <option>
                            Location-3
                        </option>
                        <option>
                            Location-4
                        </option>
                        <option>
                            Location-5
                        </option>
                    </Input>
                    <Label for="originCity">
                        ORIGIN CITY
                    </Label>
                </FormGroup>

                <FormGroup floating>
                    <Input
                        id="pickUpLocation"
                        name="location"
                        placeholder="Pick Up Location"
                        type="text"
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
                            />
                            <Label for="endTime">
                                TIME
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Button color="success" className="form-control">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default BookingForm;