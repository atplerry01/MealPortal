import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { myConfig } from "../../app/config";
import SideBar from "../../components/common/sidebar";
import MenuTable from '../../components/extra/MenuTable';

class Menu extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            success: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleMenuCreate = this.handleMenuCreate.bind(this);
        
    }

    componentDidMount() {
        this.getMenus();

    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleMenuCreate(e) {
        e.preventDefault();

        const { name, price, description } = this.state;

        var entityModel = { name, price, description };

        this.postMenu(entityModel);

    }

    render() {

        const { name, price, description } = this.state;

        return (
            <div className="section sm">

                <div className="container">

                    <div className="row">

                        <SideBar></SideBar>

                        <div className="col-sm-8 col-md-9">

                            <div className="job-detail-wrapper">

                                <br /><br />
                                <div className="job-detail-header bb mb-30">

                                    <h2 className="heading mb-15">Menus</h2>

                                    <div className="meta-div clearfix mb-25">
                                        <span className="job-label label label-success">
                                            <a data-toggle="modal" href="#menuCreateModal" style={{ color: "#fff" }}>Create Menu</a>
                                        </span>

                                    </div>

                                </div>

                                <div className="tab-style-01">

                                    <MenuTable menus={this.state.menus}></MenuTable>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div id="menuCreateModal" className="modal fade login-box-wrapper" tabIndex="-1" data-width="550" style={{ display: "none" }} data-backdrop="static" data-keyboard="false" data-replace="true">

                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title text-center">Create Menu</h4>
                    </div>

                    <div className="modal-body">
                        <div className="row gap-20">

                            <div className="col-sm-12 col-md-12">

                                <div className="form-group">
                                    <label>Menu Name</label>
                                    <input name="name" value={name} onChange={this.handleChange} className="form-control" placeholder="" type="text" />
                                </div>

                                <div className="form-group">
                                    <label>Price</label>
                                    <input name="price" value={price} onChange={this.handleChange} className="form-control" placeholder="" type="text" />
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <input name="description" value={description} onChange={this.handleChange} className="form-control" placeholder="" type="text" />
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="modal-footer text-center">
                        <button onClick={this.handleMenuCreate} type="button" className="btn btn-primary">Create</button>
                        <button id="hideMenuModal" type="button" data-dismiss="modal" className="btn btn-primary btn-inverse">Close</button>
                    </div>

                </div>


            </div>

        );
    }

    ////

    getMenus() {
        axios.get(myConfig.apiUrl + "/api/lookups/menus").then(response => {
            this.setState({ menus: response.data });
        })
    }

    postMenu(model) {
        return axios.post(myConfig.apiUrl + "/api/lookups/menus", model).then(response => {
            document.getElementById("hideMenuModal").click();
            this.getMenus();
        })
    }


}


export default Menu