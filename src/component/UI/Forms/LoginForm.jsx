import React from "react";
import {Badge} from "reactstrap";
import { Form, Input, Label, FormGroup, Button } from "reactstrap";
import authService from "../../../services/auth.service";
import { withRouter } from "../../../common/with-router";


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: '',
            message:'',
            remember:false,
            loading:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    
    handleChange(event){
        const { target } = event;
        const value = target.type === 'checkbox' ? target.value : target.value; 
        const {name} = target;
        
        this.setState(
            {[name] : value}
        );
    }

    handleLogin(e){
        
        e.preventDefault();
        // console.log(this.state);
        authService.login(this.state.username, this.state.password).then(() => {
            this.props.router.navigate("/profile");
            window.location.reload();
        },error =>
        {
            const resMessage = (error.response &&
                error.response.data &&
                error.response.data.message) ||  error.message ||  error.toString();
                this.setState({
                    loading: false,
                    message: resMessage
                  });
        }
        )
    };


    render() {
        const {username, password, remember} = this.state
        return (
            <div>
            <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                <Form className="form" onSubmit={this.handleLogin}>
                    <FormGroup floating>
                        <Input
                            id="username"
                            name="username"
                            placeholder="Username"
                            type="text"
                            value={username}
                            onChange={
                                (e) => this.handleChange(e)
                            }
                        />
                        <Label for="email">
                            Username
                        </Label>
                    </FormGroup>
                    
                    {/* <div className="mb-3">
                        <div className="mb-2 w-100">
                            <a href="forgot.html" className="float-end">
                                Forgot Password?
                            </a>
                        </div>
                    </div> */}
                    
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

                    <div className="d-flex align-items-center mb-2">
                        <div className="form-check">
                            <Input 
                                type="checkbox" 
                                name="remember" 
                                id="remember"
                                value={remember}
                                onChange={(e) => this.handleChange(e)}
                                />
                            <Label for="remember">Remember Me</Label>
                        </div>
                    </div>
                    <Button color="primary" className="form-control">
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

export default withRouter(LoginForm);