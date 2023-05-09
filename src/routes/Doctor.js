import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import ManageSchedule from "../containers/System/Doctor/ManageSchedule";
import Header from "../containers/Header/Header";

class Doctor extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <React.Fragment>
        {isLoggedIn && <header />}
        <div className="system-container">
          <div className="system-list">
            <switch>
              <Route
                path="/doctor/manage-schedule"
                component={ManageSchedule}
              ></Route>
            </switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return;
  {
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
