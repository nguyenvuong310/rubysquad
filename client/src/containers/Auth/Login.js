import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { Link } from "react-router-dom";
import "./Login.scss";
import axios from "axios";
import bk_logo from "../../assets/bk_logo.png";
// import adminService from "../services/adminService";
import { handleLoginApi } from '../../services/userService';
import { path } from "../../utils";
import HomePageStudent from "../Student/HomePageStudent"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      errMessage: "",
    };
  }
  componentDidMount() { }
  render() {
    return (
      <React.Fragment>
        <div className="login">
          <div className="login-container">
            <div className="login-header">
              <img className="logo" src={bk_logo} />
              <div className="login-header-content">Central Authentication Service</div>
            </div>
            <div className="login-content">
              <div className="login-content-left">
                <div className="login-content-left-content">
                  <div className="content1">
                    Enter your Username and Password
                  </div>
                  <div className="content2">
                    <div className="name">Username</div>
                    <input className="input" />
                  </div>
                  <div className="content2">
                    <div className="name">Password</div>
                    <input className="input" />
                  </div>
                  <div className="content3">
                    <input type="checkbox" />
                    <div className="warn">Warn me before logging me into other sites.</div>
                  </div>
                  <div className="content4">
                    <Link to={path.HOMEPAGESTUDENT} type="button" className="button-login">Login</Link>
                    <button className="button-clear">Clear</button>
                  </div>
                  <div className="content5">
                    Change Password?
                  </div>
                </div>
              </div>
              <div className="login-content-right">
                <div className="content6">
                  <div className="login-language">Languages</div>
                  <div className="option-language">
                    <div className="option">Vietnamese </div>
                    <div className="option">English</div>
                  </div>
                </div>
                <div className="content7">
                  <div className="login-language">Please note</div>
                  <div className="note-content">
                    <p>The Login page enables single sign-on to multiple websites at HCMUT. This means that you only have to enter your user name and password once for websites that subscribe to the Login page.</p>
                    <p>You will need to use your HCMUT Username and password to login to this site. The "HCMUT" account provides access to many resources including the HCMUT Information System, e-mail, ...</p>
                    <p>For security reasons, please Exit your web browser when you are done accessing services that require authentication!</p>
                  </div>
                </div>
                <div className="content8">
                  <div className="login-language">Technical support</div>
                  <div className="support">
                    <div className="option1">E-mail: support@hcmut.edu.vn </div>
                    <div className="option1">Tel: (84-8) 38647256 - 5200</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-footer">
              Copyright © 2011 - 2012 Ho Chi Minh University of Technology. All rights reserved.
              Powered by Jasig CAS 3.5.1
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // navigate: (path) => dispatch(push(path)),
    // // userLoginFail: () => dispatch(actions.adminLoginFail()),
    // userLoginSuccess: (userInfor) => dispatch(userLoginSuccess(userInfor)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
