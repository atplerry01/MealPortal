import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

class MenuList extends Component {

    onHandleClick(value) {
        this.props.handleOrder(value);
        //document.getElementById("menuModal").click();
    };

    render() {
        const list = () => {
            if (this.props.menus) {
                return this.props.menus.map((entity, index) => {
                    return (
                        <a key={index} className="recent-job-item highlight clearfix">
                            <div className="GridLex-grid-middle">
                                <div className="GridLex-col-10_sm-12_xs-12">
                                    <div className="job-position">
                                        <div className="image">
                                            <img src="assets/images/menu.png" alt="image" />
                                        </div>
                                        <div className="content">
                                            <h4>{entity.name} - 	&#x20A6;{entity.price}</h4>
                                            <p>{entity.description}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="GridLex-col-2_sm-4_xs-4_xss-12">

                                    <button type="button" onClick={this.onHandleClick.bind(this, entity)} className="job-label label label-success" aria-hidden="true">Order</button>

                                </div>
                            </div>
                        </a>
                    )

                });
            }
        };

        return (
            <Fragment>
                {list()}
            </Fragment>
        );
    }
}

export default MenuList;
