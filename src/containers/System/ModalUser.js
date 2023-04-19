import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent();
  };

  render() {
    console.log("check child props", this.props);
    console.log("check child open", this.props.isOpen);
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
              <input type="text" />
            </div>
            <div className="input-container">
              <babel>Passwword</babel>
              <input type="password" />
            </div>
            <div className="input-container">
              <babel>First Name</babel>
              <input type="text" />
            </div>
            <div className="input-container">
              <babel>Last Name</babel>
              <input type="text" />
            </div>
            <div className="input-container max-width-input">
              <babel>Address</babel>
              <input type="text" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            color="primary"
            className="px-3 rounded text-white bg-primary"
            onClick={() => {
              this.toggle();
            }}
          >
            Save changes
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
