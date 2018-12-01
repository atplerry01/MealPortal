import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

class MealTransactionTable extends Component {
    render() {
        const list = () => {
            if (this.props.menuTransactions) {
                return this.props.menuTransactions.map((entity, index) => {
                    return (
                        <tr key={entity.id}>
                            <td><a href={entity.id} target="_blank">{index + 1}</a></td>
                            <td><NavLink to={'/issue/' + entity.id}>{entity.user.lastName} {entity.user.firstName}</NavLink></td>
                            <td>{entity.user.email}</td>
                            <td>{entity.user.userName}</td>
                            <td>{entity.menu.name}</td>
                            <td>{entity.menu.price}</td>
                            <td>{moment(new Date(entity.createdOn)).format("DD-MMM-YYYY")}</td>
                        </tr>
                    )
                });
            }
        };

        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Employee Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Menu</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list()}
                    </tbody>

                </table>

            </div>
        );
    }
}

export default MealTransactionTable;
