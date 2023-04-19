import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
  }
  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent();
  };

  handleOnchaneInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({ ...copyState });
  };
  checkValidate = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };
  handleAddNewUser = () => {
    let isValid = this.checkValidate();
    if (isValid === true) {
      //call api
      this.props.createNewUser(this.state, "abc");
    }
  };
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className="modal-user-container"
        size="lg"
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Create a new user
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <babel>Email</babel>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnchaneInput(event, "email");
                }}
                value={this.state.email}
              />
            </div>
            <div className="input-container">
              <babel>Passwword</babel>
              <input
                type="password"
                onChange={(event) => {
                  this.handleOnchaneInput(event, "password");
                }}
                value={this.state.password}
              />
            </div>
            <div className="input-container">
              <babel>First Name</babel>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnchaneInput(event, "firstName");
                }}
                value={this.state.firstName}
              />
            </div>
            <div className="input-container">
              <babel>Last Name</babel>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnchaneInput(event, "lastName");
                }}
                value={this.state.lastName}
              />
            </div>
            <div className="input-container max-width-input">
              <babel>Address</babel>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnchaneInput(event, "address");
                }}
                value={this.state.address}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            color="primary"
            className="px-3 rounded text-white bg-primary"
            onClick={() => {
              this.handleAddNewUser();
            }}
          >
            Add new
          </button>
          <button
            color="secondary"
            className="px-3 rounded text-white bg-secondary"
            onClick={() => {
              this.toggle();
            }}
          >
            Close
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
