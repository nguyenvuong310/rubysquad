import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import HeaderStudent from "./HeaderStudent";
import FooterStudent from "./FooterStudent";
import "./RegPageForm.scss"
// import { push } from "connected-react-router";
// import * as actions from "../../store/actions";

class RegPageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isOpenModalSetupPrint: false,
        };
    }
    toggleModalSetupPrint = () => {
        this.setState({ isOpenModalSetupPrint: !this.state.isOpenModalSetupPrint });
    }

    componentDidMount() {

    }

    // createFolder = async () => {
    //   const url = `${process.env.REACT_APP_API_URL}/drive/createFolder`;
    //   const { data } = await axios.get(url, { withCredentials: true });
    //   console.log(data);
    //   if (data && data.errCode === 0) {
    //     alert("success");
    //     this.setState({ folderId: data.folderId });
    //   }
    // };
    render() {
        return (
            <React.Fragment>
                <HeaderStudent user={this.state.user} />
                <div className="regpage-form-content-wrapper">
                    <div className="regpage-form-container">
                        <div className="regpage-form-content-header">
                            <div className="registration-form">Đăng ký môn học</div>
                        </div>
                        <div className="regpage-form-content">
                            <div className="regpage-form-table">
                                <div className="regpage-form-table-header">
                                    <div className="regpage-form-table-header-content">
                                        BẢNG ĐĂNG KÝ ĐĂNG KÝ CÁC HỌC PHẦN CÓ NHU CẦU HỌC HK2/2023-2024 TẤT CẢ CÁC DIỆN SINH VIÊN
                                    </div>
                                </div>
                                <div className="regpage-form-table-content">
                                    <table className="table table-striped table-hover">
                                        <div className="table-header-content">
                                            <th><i class="fa fa-plus" aria-hidden="true"></i>
                                                <span className="table-header-content-1">
                                                    Đăng ký các học phần có nhu cầu học HK2/2023-2024 tất cả các diện sinh viên
                                                </span>
                                            </th>
                                        </div>
                                    </table>
                                    <br></br>
                                    <div className="regpage-form-table-end-content">
                                        Tổng số tín chỉ đăng ký: 0
                                        <br></br>
                                        Tổng số môn đăng ký: 0
                                    </div>
                                </div>
                                <div className="regpage-form-button">
                                    <button className="regpage-home-button">
                                        TRANG CHÍNH
                                    </button>
                                    <button className="regpage-reg-button">
                                        ĐĂNG KÝ/ HIỆU CHỈNH
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="regpage-form-bottom-wrapper">
                            <div className="regpage-form-bottom-container">
                                <a className="button-form-design">
                                    <i className="fa fa-history" />
                                    Xem lịch sử đăng ký
                                </a> &nbsp;&nbsp;
                                <a className="button-form-design" href="http://www.aao.hcmut.edu.vn/index.php?route=catalog/chitietsv&path=59_62&tid=473" target="_blank">
                                    <i className="fa fa-tasks" />
                                    Xem CTĐT
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterStudent />
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

export default connect(mapStateToProps, mapDispatchToProps)(RegPageForm);
