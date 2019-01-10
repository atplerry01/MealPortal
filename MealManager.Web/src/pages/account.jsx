import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { myConfig } from "../app/config";
import { lookupDropDown } from "../_selector/selectors";
import SelectInput from "../components/common/SelectInput";
import UserTable from "../components/account/UserTable";
import SideBar from "../components/common/sidebar";

class Account extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSelectedUser = this.handleSelectedUser.bind(this);
    }

    componentDidMount() {
        this.getUsers();
        this.getDepartments();
    }

    handleSelectedUser(val) {
        console.log(val);
        this.setState({ 
            firstName: val.user.firstName, 
            lastName: val.user.lastName, 
            email: val.user.email, 
            userName: val.user.userName,
            cardId: val.user.cardId,
            departmentId: val.departmentMealProfiling.department.id,
            selectedUserId: val.user.id
        });
    }
    
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { firstName, lastName, email, userName, cardId, departmentId } = this.state;

        var modelData = {
            firstName, lastName, email, userName, cardId, departmentId
        }

        if (userName && email && departmentId &&  cardId) {
            return axios.post(myConfig.apiUrl + "/api/accounts/user/create", modelData).then(response => {
                this.getUsers();
                document.getElementById("hideAccountModal").click();
            })
        }
    }

    handleUpdate(e) {
        e.preventDefault();

        console.log(this.state);
        const { cardId, selectedUserId } = this.state;

        var modelData = {
            userId: selectedUserId,
            cardId
        };

       
        return axios.post(myConfig.apiUrl + "/api/accounts/user/profiles", modelData).then(response => {
            this.getUsers();
            // document.getElementById("accountUpdateModal").click();
            // this.props.history.push("/transactions");
            window.location.reload();
        })
    }


    render() {

        const { firstName, lastName, email, userName, departments, cardId, departmentId } = this.state;
        const newDepartments = lookupDropDown(departments);

        const dropDepartments = () => {
            if (newDepartments) {
                return (
                    <SelectInput
                        name="departmentId"
                        label=" Department"
                        value={departmentId}
                        onChange={this.handleChange}
                        defaultOption="Select Department"
                        options={newDepartments}
                        readOnly
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

                                    <h2 className="heading mb-15">Accounts</h2>

                                     <div className="meta-div clearfix mb-25">
                                        <span className="job-label label label-success">
                                            <a data-toggle="modal" href="#accountCreateModal" style={{ color: "#fff" }}>Create Account</a>
                                        </span>

                                    </div>

                                </div>

                                <div className="apply-job-wrapper">

                                   <UserTable users={this.state.userprofiles} handleSelectedUser = {this.handleSelectedUser}></UserTable>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                
                <div id="accountCreateModal" className="modal fade login-box-wrapper" tabIndex="-1" data-width="550" style={{ display: "none" }} data-backdrop="static" data-keyboard="false" data-replace="true">

                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title text-center">Create Account</h4>
                    </div>

                    <div className="modal-body">
                        <div className="row gap-20">

                            <div className="col-sm-12 col-md-12">

                                <div className="form-group">
                                    <label>First Name</label>
                                    <input name="firstName" value={firstName} onChange={this.handleChange} className="form-control" placeholder="" type="text" />
                                </div>

                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input name="lastName" value={lastName} onChange={this.handleChange} className="form-control" placeholder="" type="text" />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input name="email" value={email} onChange={this.handleChange} className="form-control" placeholder="" type="text" />
                                </div>

                                <div className="form-group">
                                    <label>Username</label>
                                    <input name="userName" value={userName} onChange={this.handleChange} className="form-control" placeholder="" type="text" />
                                </div>

                                <div className="form-group">
                                    <label>Card ID</label>
                                    <input name="cardId" value={cardId} onChange={this.handleChange} className="form-control" placeholder="" type="text" />
                                </div>

                                <div className="form-group">
                                    {dropDepartments()}
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="modal-footer text-center">
                        <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Create</button>
                        <button id="hideAccountModal" type="button" data-dismiss="modal" className="btn btn-primary btn-inverse">Close</button>
                    </div>

                </div>


                <div id="accountUpdateModal" className="modal fade login-box-wrapper" tabIndex="-1" data-width="550" style={{ display: "none" }} data-backdrop="static" data-keyboard="false" data-replace="true">

                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title text-center">Update Account</h4>
                    </div>

                    <div className="modal-body">
                        <div className="row gap-20">

                            <div className="col-sm-12 col-md-12">

                                <div className="form-group">
                                    <label>First Name</label>
                                    <input name="firstName" value={firstName} onChange={this.handleChange} className="form-control" placeholder="" type="text" readOnly />
                                </div>

                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input name="lastName" value={lastName} onChange={this.handleChange} className="form-control" placeholder="" type="text" readOnly />
                                </div>
                                
                                {/* 
                                <div className="form-group">
                                    <label>Email</label>
                                    <input name="email" value={email} onChange={this.handleChange} className="form-control" placeholder="" type="text" readOnly />
                                </div>

                                <div className="form-group">
                                    <label>Username</label>
                                    <input name="userName" value={userName} onChange={this.handleChange} className="form-control" placeholder="" type="text" />
                                </div> */}

                                <div className="form-group">
                                    <label>Card ID</label>
                                    <input name="cardId" value={cardId} onChange={this.handleChange} className="form-control" placeholder="" type="text" />
                                </div>

                                <div className="form-group">
                                    {dropDepartments()}
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="modal-footer text-center">
                        <button onClick={this.handleUpdate} type="button" className="btn btn-primary">Update</button>
                        <button id="hideAccountModal" type="button" data-dismiss="modal" className="btn btn-primary btn-inverse">Close</button>
                    </div>

                    </div>

            </div>
        
        );
    }

    getUsers = () => {
        axios.get(myConfig.apiUrl + "/api/accounts/user/profiles").then(response => {
            this.setState({ userprofiles: response.data });
        });
    };

    getDepartments = () => {
        axios
            .get(myConfig.apiUrl + "/api/lookups/departments")
            .then(response => {
                this.setState({ departments: response.data });
            })
            .catch(function (error) { });
    };

}


export default Account