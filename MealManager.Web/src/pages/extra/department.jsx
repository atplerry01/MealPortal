import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { myConfig } from "../../app/config";
import { lookupDropDown } from "../../_selector/selectors";
import { lookupAssignmentDropDown } from "../../_selector/custom-assignment";
import SelectInput from "../../components/common/SelectInput";

import SideBar from "../../components/common/sidebar";
import DepartmentTable from "../../components/extra/DepartmentTable";
import DepartmentProfileTable from "../../components/extra/DepartmentProfileTable";

class Department extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            success: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleDepartmentCreate = this.handleDepartmentCreate.bind(this);
        this.handleProfilingCreate = this.handleProfilingCreate.bind(this);

    }

    componentDidMount() {
        this.getDepartments();
        this.getDepartmentProfiles();
        this.getEntitlements();

    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleDepartmentCreate(e) {
        e.preventDefault();

        const { name, jobFunction } = this.state;
        var entityModel = { name, jobFunction };
        this.postDepartment(entityModel);
    }

    handleProfilingCreate(e) {
        e.preventDefault();

        const { departmentId, mealEntitled } = this.state;
        var modelData = {
            departmentId,
            mealAssignmentId: mealEntitled
        }

        if (departmentId && mealEntitled) {
            return axios.post(myConfig.apiUrl + "/api/lookups/department/profiling", modelData).then(response => {
                //toastr.success("Save Successful.", "Assignment Creation");
                this.getDepartmentProfiles();
                document.getElementById("hideProfilingModal").click();
            })
        }

    }


    render() {

        const { name, jobFunction, departments, departmentId, mealassignments, mealEntitled } = this.state;

        const newDepartments = lookupDropDown(departments);
        const newAssignments = lookupAssignmentDropDown(mealassignments);

        
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
                    />
                );
            }
        };

        const dropAssignments = () => {
            if (newAssignments) {
                return (
                    <SelectInput
                        name="mealEntitled"
                        label=" Meal Assignment"
                        value={mealEntitled}
                        onChange={this.handleChange}
                        defaultOption="Select Meal Entitled"
                        options={newAssignments}
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

                                    <h2 className="heading mb-15">Departments</h2>

                                    <div className="meta-div clearfix mb-25">
                                        <span className="job-label label label-success">
                                            <a data-toggle="modal" href="#departmentCreateModal" style={{ color: "#fff" }}>Create Department</a>
                                        </span>

                                        <span className="job-label label label-success">
                                            <a data-toggle="modal" href="#departmentProfileCreateModal" style={{ color: "#fff" }}>Create Department Profiling</a>
                                        </span>

                                    </div>

                                </div>

                                <div className="tab-style-01">

                                    <div className="col-sm-6 col-md-6">
                                        <DepartmentTable departments={departments}></DepartmentTable>
                                    </div>

                                    <div className="col-sm-6 col-md-6">
                                        <DepartmentProfileTable departmentProfiles={this.state.departmentProfiles}></DepartmentProfileTable>
                                    </div>



                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div id="departmentCreateModal" className="modal fade login-box-wrapper" tabIndex="-1" data-width="550" style={{ display: "none" }} data-backdrop="static" data-keyboard="false" data-replace="true">

                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title text-center">Create Department</h4>
                    </div>

                    <div className="modal-body">
                        <div className="row gap-20">

                            <div className="col-sm-12 col-md-12">

                                <div className="form-group">
                                    <label>Department Name</label>
                                    <input name="name" value={name} onChange={this.handleChange} className="form-control" placeholder="" type="text" />
                                </div>

                                <div className="form-group">
                                    <label>Job Funtion</label>
                                    <input name="jobFunction" value={jobFunction} onChange={this.handleChange} className="form-control" placeholder="" type="text" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="modal-footer text-center">
                        <button onClick={this.handleDepartmentCreate} type="button" className="btn btn-primary">Create</button>
                        <button id="hideDepartmentModal" type="button" data-dismiss="modal" className="btn btn-primary btn-inverse">Close</button>
                    </div>

                </div>


                <div id="departmentProfileCreateModal" className="modal fade login-box-wrapper" tabIndex="-1" data-width="550" style={{ display: "none" }} data-backdrop="static" data-keyboard="false" data-replace="true">

                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title text-center">Create Department Profiling</h4>
                    </div>

                    <div className="modal-body">
                        <div className="row gap-20">

                            <div className="col-sm-12 col-md-12">

                                {dropDepartments()}

                                {dropAssignments()}

                            </div>

                        </div>
                    </div>

                    <div className="modal-footer text-center">
                        <button onClick={this.handleProfilingCreate} type="button" className="btn btn-primary">Create</button>
                        <button id="hideProfilingModal" type="button" data-dismiss="modal" className="btn btn-primary btn-inverse">Close</button>
                    </div>

                </div>


            </div>

        );
    }

    ////

    getDepartments() {
        axios.get(myConfig.apiUrl + "/api/lookups/departments").then(response => {
            this.setState({ departments: response.data });
        })
    }

    getDepartmentProfiles = () => {
        axios
            .get(myConfig.apiUrl + "/api/lookups/department/profiling")
            .then(response => {
                this.setState({ departmentProfiles: response.data });
            })
            .catch(function (error) { });
    };

    getEntitlements = () => {
        axios
            .get(myConfig.apiUrl + "/api/lookups/entitlements")
            .then(response => {
                this.setState({ mealassignments: response.data });
            })
            .catch(function (error) { });
    };


    postDepartment(model) {
        return axios.post(myConfig.apiUrl + "/api/lookups/departments", model).then(response => {
            document.getElementById("hideDepartmentModal").click();
            this.getDepartments();
        })
    }

    //hideProfilingModal

}


export default Department