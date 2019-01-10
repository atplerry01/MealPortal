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
                            <td>{index + 1}</td>
                            <td>{entity.user.lastName} {entity.user.firstName}</td>
                            <td>{entity.user.email}</td>
                            <td>{entity.user.userName}</td>
                            <td>{entity.frequency}</td>
                            <td>{entity.mealTotal}</td>
                            <td style={{fontSize: 11}}>{moment(new Date(entity.createdOn)).format("DD-MMM-YYYY LT")}</td>
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
                            <th>Freq</th>
                            <th>Count</th>
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
