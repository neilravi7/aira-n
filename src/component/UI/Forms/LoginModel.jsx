import React from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button, Modal} from 'reactstrap';
import LoginForm from './LoginForm';
class LoginModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>


          <div className="card shadow-lg">
            <div className="card-body p-5">
              <LoginForm></LoginForm>
            </div>
            <div className="card-footer py-3 border-0">
              <div className="text-center">
                Don't have an account? <a href="register.html" className="text-dark">Create One</a>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default LoginModel;