import React from "react";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import authService from "../../../services/auth.service";
import { withRouter } from "../../../common/with-router";


class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', userName: '', password: '', password2: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange(event) {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.value : target.value;
        const { name } = target;

        this.setState(
            { [name]: value }
        );
    }

    handleRegister(e) {
        e.preventDefault();
        console.log(this.state);
        authService.register(this.state.userName, this.state.email, this.state.password).then(() => {
            this.props.router.navigate("/login");
            window.location.reload();
        }, error => {
            const resMessage = (error.response &&
                error.response.data &&
                error.response.data.message) || error.message || error.toString();
            this.setState({
                loading: false,
                message: resMessage
            });
        }
        )
    };

    render() {
        const { email, userName, password, password2 } = this.state;
        return (
            <div>
                <Form className="form" onSubmit={this.handleRegister} >
                    <FormGroup floating>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={
                                (e) => this.handleChange(e)
                            }
                        />
                        <Label for="email">
                            Email
                        </Label>
                    </FormGroup>

                    <FormGroup floating>
                        <Input
                            id="userName"
                            name="userName"
                            placeholder="username"
                            type="text"
                            value={userName}
                            onChange={
                                (e) => this.handleChange(e)
                            }
                        />
                        <Label for="userName">
                            Username
                        </Label>
                    </FormGroup>

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
                        <Label for="password">
                            Password
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
                    <Button color="primary" className="form-control">
                        Register
                    </Button>
                </Form>
            </div>
        );
    }
}

export default withRouter(RegisterForm);