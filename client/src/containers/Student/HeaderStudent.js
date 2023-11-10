import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./HeaderStudent.scss";
import bk_logo from "../../assets/bk_logo.png";
// import { FALSE } from "node-sass";

class HeaderStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            clickDropDown: false,
        };
    }
    componentDidMount() { }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.user !== prevProps.user) {
            this.setState({ user: this.props.user });
        }
    }
    handleOnClickDrop = () => {
        this.setState({
            clickDropDown: !this.state.clickDropDown,
        });
    };
    logout = () => {
        window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
    };
    render() {
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <img className="homepage-student-logo" src={bk_logo} width="50px" />
                    <div className="Header-brand">
                        <div className="Brand-content">
                            ĐĂNG KÝ MÔN HỌC
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderStudent);
