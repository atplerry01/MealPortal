import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toastr from "toastr";
import ReactToExcel from "react-html-table-to-excel";
import moment from 'moment';

import SideBar from "../components/common/sidebar";

import SelectInput from "../components/common/SelectInput";
import { lookupUserDropDown } from "../_selector/user-selectors";
import { myConfig } from "../app/config";
import MenuList from "../components/extra/MenuList";
import MealTransactionTable from "../components/extra/MealTransactionTable";

class UserTransaction extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedCardId: '',
            selectedTransaction: '',
            userId: '',
            users: [],
            menus: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
        const { match: { params }}  = this.props;

        if (params) {
            this.setState({selectedCardId: params.id});
            this.getTransactionMenus(params.id);
        }
    }

    handleOrder(entity) {
        console.log(entity);
        var menuEntity = {
            cardId: this.state.selectedCardId
        };

        if (menuEntity.cardId) {
            this.postMenu(menuEntity);
        } else {
            toastr.error("Error in User Selection.", "Transaction Error");
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });

        console.log(name, value);
        if (name === 'userId') {
            this.setState({selectedCardId: value});
        }
    }

    onHandleClick(e) {
        e.preventDefault();
        const { userId } = this.state;
    }

    onTodayTransaction() {
        this.getThisMonthTransactionMenus();
    }

    render() {
        
        const { userId, users, menus, menuTransactions, selectedTransaction, todayReport, thisMonthReport, lastMonthReport } = this.state;
        const { match: { params }}  = this.props;

        return (
            <div className="section sm">

                <div className="container">

                    <div className="row">

                        <SideBar></SideBar>

                        <div className="col-sm-8 col-md-9">

                            <div className="job-detail-wrapper">

                                <br /><br />
                                <div className="job-detail-header bb mb-30">

                                    {/* <h2 className="heading mb-15">User Meal Transactions</h2> */}

                                    <div className="pull-right" style={{paddingTop: 20}}>
                                                <ReactToExcel
                                                    className="btn btn-primary pull-right"
                                                    table="table-to-xls"
                                                    filename="NexaPos-Report"
                                                    sheet="Sheet 1">Print this doc </ReactToExcel>
                                            </div>

                                    {todayReport && <h3>Today Report</h3>}
                                    {thisMonthReport && <h3>This Month Report</h3>}
                                    {lastMonthReport && <h3>Last Month Report</h3>}
                                    
                                    <div style={{ padding: '10px 0 10px' }}>
                                                <a style={{ marginRight: '10px' }} onClick={this.getTransactionMenus.bind(this, params.id)}>Today</a>
                                                <a style={{ marginRight: '10px' }} onClick={this.getThisMonthTransactionMenus.bind(this, params.id)}>This Month</a>
                                                <a onClick={this.getLastMonthTransactionMenus.bind(this, params.id)}>Last Month</a>

                                            </div>
                                </div>

                                <table id="table-to-xls" width="100%">
                                    <tr>
                                        <MealTransactionTable menuTransactions={menuTransactions} />
                                    </tr>
                                </table>
                             
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        );
    }

    getTransactionMenus(cardId) {
        axios.get(myConfig.apiUrl + `/api/transactions/today/card/${cardId}`)
            .then(response => {
                console.log(response);
                this.setState({ menuTransactions: response.data, todayReport: true, lastMonthReport: false, thisMonthReport: false });
            })
    }

    
    getThisMonthTransactionMenus(cardId) {
        axios.get(myConfig.apiUrl + `/api/transactions/thisMonth/card/${cardId}`)
            .then(response => {
                this.setState({ menuTransactions: response.data, todayReport: false, lastMonthReport: false, thisMonthReport: true });
            })
    }

    getLastMonthTransactionMenus(cardId) {
        axios.get(myConfig.apiUrl + `/api/transactions/LastMonth/card/${cardId}`)
            .then(response => {
                this.setState({ menuTransactions: response.data, todayReport: false, lastMonthReport: true, thisMonthReport: false });
            })
    }


}


export default UserTransaction