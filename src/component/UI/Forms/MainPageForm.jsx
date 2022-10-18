import React from "react";
import { Col, Row } from "reactstrap";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";


class MainPageForm extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
            <Form>
                <Row className="row-cols-lg-auto g-3 align-items-center">
                    <Col>
                        <Label
                            className="visually-hidden"
                            for="exampleEmail"
                        >
                            Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="something@idk.cool"
                            type="email"
                        />
                    </Col>
                    <Col>
                        <Label
                            className="visually-hidden"
                            for="examplePassword"
                        >
                            Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="don't tell!"
                            type="password"
                        />
                    </Col>
                    <Col>
                        <FormGroup check>
                            <Input
                                id="exampleCheckbox"
                                name="checkbox"
                                type="checkbox"
                            />
                            <Label
                                check
                                for="exampleCheckbox"
                            >
                                Remember Me
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col>
                        <Button>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
        );
    }
}

export default MainPageForm;