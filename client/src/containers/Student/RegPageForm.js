import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import HeaderStudent from "./HeaderStudent";
import FooterStudent from "./FooterStudent";
import "./RegPageStudent.scss"
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
                <div className="regpage-content-wrapper">
                    <div className="regpage-container">
                        <div className="regpage-content-header">
                            <div className="registration">Đăng ký môn học</div>
                        </div>
                        <div className="regpage-content">
                            <div className="regpage-table">
                                <div className="regpage-table-header">
                                    <div className="regpage-table-header-content">BẢNG ĐĂNG KÝ ĐĂNG KÝ CÁC HỌC PHẦN CÓ NHU CẦU HỌC HK2/2023-2024 TẤT CẢ CÁC DIỆN SINH VIÊN</div>
                                </div>
                                <div className="regpage-table-content">
                                </div>
                            </div>
                        </div>
                        <div className="regpage-bottom-wrapper">
                            <div className="regpage-bottom-container">
                                <a className="button-design">
                                    <i className="fa fa-history" />
                                    Xem lịch sử đăng ký
                                </a> &nbsp;&nbsp;
                                <a className="button-design" href="http://www.aao.hcmut.edu.vn/index.php?route=catalog/chitietsv&path=59_62&tid=473" target="_blank">
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
