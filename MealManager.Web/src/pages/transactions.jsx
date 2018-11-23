import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import SideBar from "../components/common/sidebar";

import SelectInput from "../components/common/SelectInput";
import { lookupUserDropDown } from "../_selector/user-selectors";
import { myConfig } from "../app/config";

class Transaction extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            userId: '',
            users: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.getUsers();
    }

    
	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}


    render() {

        const { userId, users } = this.state;
        const formatedUsers = lookupUserDropDown(users);

        console.log(formatedUsers);

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

                                    {/* <div className="meta-div clearfix mb-25">
                                        <span>at <a href="#">Expedia</a> as </span>
                                        <span className="job-label label label-success">Freelance</span>
                                    </div> */}

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

                                                <div>{dropUsers()}</div>

                                                <div className="recent-job-wrapper mt-30">
                                                    
                                                    <a className="recent-job-item highlight clearfix">
                                                        <div className="GridLex-grid-middle">
                                                            <div className="GridLex-col-10_sm-12_xs-12">
                                                                <div className="job-position">
                                                                    <div className="image">
                                                                        <img src="assets/images/menu.png" alt="image" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <h4>Jollof Rice - 	&#x20A6;1200</h4>
                                                                        <p>SecureID is certified by MasterCard Incorporated, Verve, Visa International, </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                         
                                                            <div className="GridLex-col-2_sm-4_xs-4_xss-12">
                                                                <div className="job-label label label-success">
                                                                    Order
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a className="recent-job-item highlight clearfix">
                                                        <div className="GridLex-grid-middle">
                                                            <div className="GridLex-col-10_sm-12_xs-12">
                                                                <div className="job-position">
                                                                    <div className="image">
                                                                        <img src="assets/images/menu.png" alt="image" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <h4>Jollof Rice - 	&#x20A6;1200</h4>
                                                                        <p>SecureID is certified by MasterCard Incorporated, Verve, Visa International, </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                         
                                                            <div className="GridLex-col-2_sm-4_xs-4_xss-12">
                                                                <div className="job-label label label-success">
                                                                    Order
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a className="recent-job-item highlight clearfix">
                                                        <div className="GridLex-grid-middle">
                                                            <div className="GridLex-col-10_sm-12_xs-12">
                                                                <div className="job-position">
                                                                    <div className="image">
                                                                        <img src="assets/images/menu.png" alt="image" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <h4>Jollof Rice - 	&#x20A6;1200</h4>
                                                                        <p>SecureID is certified by MasterCard Incorporated, Verve, Visa International, </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                         
                                                            <div className="GridLex-col-2_sm-4_xs-4_xss-12">
                                                                <div className="job-label label label-success">
                                                                    Order
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>

                                                </div>

                                            </div>
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="relatedJob2">
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

            </div>
        
        );
    }

    // Get all users
    getUsers() { 
        axios.get(myConfig.apiUrl + "/api/accounts/user/profiles")
            .then(response => { 
                console.log(response);
                this.setState({ users: response.data }); 
            }) 
    }


}


export default Transaction