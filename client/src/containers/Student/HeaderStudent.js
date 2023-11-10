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
                    <div className="Header-brand">
                        <img className="homepage-student-logo" src={bk_logo} width="50px" />
                        <a href="homepage-student" class="Brand-content"> &nbsp; ĐĂNG KÝ MÔN HỌC</a>
                    </div>
                    <div className="Header-navbar-left">
                        <div className="Nav-home">
                            <i class="fa fa-home" aria-hidden="true"></i>
                            <a href="homepage-student" class="Nav-home-content"> &nbsp; Trang chủ</a>
                        </div>
                        <div className="Nav-res">
                            <i class="fa fa-book" aria-hidden="true"></i>
                            <a href="homepage-student" class="Nav-res-content"> &nbsp; Đăng ký môn học</a>
                        </div>
                    </div>
                    <div className="Header-navbar-right">
                        <div className="Nav-user">
                            <i class="fa fa-user"></i>
                            <a href="homepage-student" class="Nav-user-content"> &nbsp; Mỉu 2114094</a>
                        </div>
                        <div className="Nav-tutorial">
                            <i class="fa fa-question-circle"></i>
                            <a href="https://wiki.hcmut.edu.vn/wiki/index.php/Trang_Ch%C3%ADnh" class="Nav-tutorial-content"> &nbsp; Hướng dẫn sử dụng</a>
                        </div>
                        <div className="Nav-log-out">
                            <i class="fas fa-solid fa-arrow-right"></i>
                            <a href="/" class="Nav-logout-content"> &nbsp; Đăng xuất</a>
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
