import React from "react";
import { Badge } from 'reactstrap';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

export default class PasswordResetFrom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password:'', password2:''
        }
        this.handleChange = this.handleChange(this);
    }

    handleChange(event) {
        const target = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;

        this.setState({
            [name]: value,
        });
    };

    render() {
        const {password, password2 } = this.state;
        return(
            <div>
            <h1 className="fs-4 card-title fw-bold mb-4">Reset Password</h1>
                <Form className="form" >
                <FormGroup floating>
                        <Input
                            id="pwd"
                            name="password"
                            placeholder="*************"
                            type="password"
                            value={password}
                            onChange={
                                (e) => this.handleChange(e)
                            }
                        />
                        <Label for="pwd">
                            New Password
                        </Label>
                    </FormGroup>

                    <FormGroup floating>
                        <Input
                            id="pwd2"
                            name="password2"
                            placeholder="Verify Password"
                            type="password"
                            value={password2}
                            onChange={
                                (e) => this.handleChange(e)
                            }
                        />
                        <Label for="pwd2">
                            Verify Password 
                        </Label>
                    </FormGroup>
                    <Button color="success" className="form-control">
                        Reset
                    </Button>
                </Form>
            </div>
        );
    }
}