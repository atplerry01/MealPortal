import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toastr from "toastr";

import SideBar from "../components/common/sidebar";

import SelectInput from "../components/common/SelectInput";
import { lookupUserDropDown } from "../_selector/user-selectors";
import { myConfig } from "../app/config";
import MenuList from "../components/extra/MenuList";
import MealTransactionTable from "../components/extra/MealTransactionTable";

class Transaction extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedUserId: '',
            userId: '',
            users: [],
            menus: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
    }

    componentDidMount() {
        this.getUsers();
        this.getMenus();
        this.getTransactionMenus();
    }

    handleOrder(entity) {
        var menuEntity = {
            selectedUserId: this.state.selectedUserId,
            menuId: entity.id
        };

        console.log(menuEntity);
        console.log(entity);

        this.postMenu(entity);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });

        if (name === 'userId') {
            this.setState({selectedUserId: value});
        }

    }

    onHandleClick(e) {
        e.preventDefault();
        const { userId } = this.state;

        console.log(this.state);
        console.log(userId);
    }

    render() {

        const { userId, users, menus } = this.state;
        const formatedUsers = lookupUserDropDown(users);

        const dropUsers = () => {
            if (formatedUsers) {
                return (
                    <SelectInput
                        name="userId"
                        label=""
                        value={userId}
                        onChange={this.handleChange}
                        defaultOption="Select User"
                        options={formatedUsers}
                    />
                );
            }
        };


        return (
            <div className="section sm">

                <div className="container">

                    <div className="row">

                        <SideBar></SideBar>

                        <div className="col-sm-8 col-md-9">

                            <div className="job-detail-wrapper">

                                <br /><br />
                                <div className="job-detail-header bb mb-30">

                                    <h2 className="heading mb-15">Meal Transactions</h2>

                                </div>

                                <div className="tab-style-01">

                                    <ul className="nav" role="tablist">
                                        <li role="presentation" className="active">
                                            <h4><a href="#relatedJob1" role="tab" data-toggle="tab">Meal Order</a></h4>
                                        </li>
                                        <li role="presentation">
                                            <h4><a href="#relatedJob2" role="tab" data-toggle="tab">Meal Transactions</a></h4>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane fade in active" id="relatedJob1">
                                            <div className="tab-content-inner">

                                                <div style={{padding: '10px 0 10px'}}>
                                                    {dropUsers()}
                                                </div>

                                                <div className="recent-job-wrapper mt-30">

                                                    <div className="col-sm-8 col-md-8">
                                                        
                                                    </div>
                                                    
                                                    <MenuList menus={menus} handleOrder = {this.handleOrder}></MenuList>

                                                </div>

                                            </div>
                                        </div>

                                        <div role="tabpanel" className="tab-pane fade" id="relatedJob2">

                                            <div>

                                                Meal Transaction

                                                <MealTransactionTable />
                                            </div>

                                            <div className="tab-content-inner">
                                            
                                                <div className="recent-job-wrapper mt-30">

                                                    <a href="#" className="recent-job-item highlight clearfix">
                                                        <div className="GridLex-grid-middle">
                                                            <div className="GridLex-col-6_sm-12_xs-12">
                                                                <div className="job-position">
                                                                    <div className="image">
                                                                        <img src="images/brands/06.png" alt="image" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <h4>IT Web Developer</h4>
                                                                        <p>Expedia</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="GridLex-col-4_sm-8-xs-8_xss-12 mt-10-xss">
                                                                <div className="job-location">
                                                                    <i className="fa fa-map-marker text-primary"></i>
                                                                    Guildford, Surrey
                                                                </div>
                                                            </div>
                                                            <div className="GridLex-col-2_sm-4_xs-4_xss-12">
                                                                <div className="job-label label label-success">
                                                                    Freelance
                                                                </div>
                                                                <span className="font12 block spacing1 font400 text-center">1
                                                                    day ago</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div id="menuModal" className="modal fade login-box-wrapper" tabIndex="-1" data-width="550" style={{ display: "none" }} data-backdrop="static" data-keyboard="false" data-replace="true">

                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title text-center">Sign-in into your account</h4>
                    </div>

                    <div className="modal-body">
                        <div className="row gap-20">

                            <div style={{ color: 'red' }}>{this.state.error}</div>
                            <div className="col-sm-12 col-md-12">

                                <div className="form-group">
                                    <label>Username</label>
                                    <input name="username"  onChange={this.handleChange} className="form-control" placeholder="" type="text" />
                                </div>

                            </div>

                            <div className="col-sm-12 col-md-12">

                                <div className="form-group">
                                    <label>Password</label>
                                    <input name="password" onChange={this.handleChange} className="form-control" placeholder="" type="password" />
                                </div>

                            </div>

                            <div className="col-sm-6 col-md-6">
                                <div className="checkbox-block">
                                    <input id="remember_me_checkbox" name="remember_me_checkbox" className="checkbox" value="First Choice" type="checkbox" />
                                    <label className="" htmlFor="remember_me_checkbox">Remember me</label>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6">
                                <div className="login-box-link-action">
                                    <a data-toggle="modal" href="#forgotPasswordModal">Forgot password?</a>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12">
                                <div className="login-box-box-action">
                                    No account? <a data-toggle="modal" href="#registerModal">Register</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="modal-footer text-center">
                        <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Log-in</button>
                        <button type="button" id="hideLoginPageModal" data-dismiss="modal" className="btn btn-primary btn-inverse">Close</button>
                    </div>

                </div>

            </div>

        );
    }

    // Get all users

    postMenu(model) {
        return axios.post(myConfig.apiUrl + "/api/lookups/departments", model).then(response => {
            console.log(response.data);
            //document.getElementById("hideDepartmentModal").click();
            this.getDepartments();
        })
    }

    
    postDepartment(model) {
        return axios.post(myConfig.apiUrl + "/api/lookups/departments", model).then(response => {
            document.getElementById("hideDepartmentModal").click();
            this.getDepartments();
        })
    }
    
    getUsers() {
        axios.get(myConfig.apiUrl + "/api/accounts/user/profiles")
            .then(response => {
                console.log(response.data);
                this.setState({ users: response.data });
            })
    }

    getMenus() {
        axios.get(myConfig.apiUrl + "/api/lookups/menus")
            .then(response => {
                toastr.success("Change Successful.", "Password Change");
                this.setState({ menus: response.data });
            })
    }

    getTransactionMenus() {
        axios.get(myConfig.apiUrl + "/api/transactions/today")
            .then(response => {
                console.log(response);
                ///toastr.success("Change Successful.", "Password Change");
                this.setState({ menustransactions: response.data });
            })
    }

}


export default Transaction