import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

class EmployeeTable extends Component {

    render() {
        console.log(this.props);
        console.log(this.props.employees);

        const list = () => {

            if (this.props.employees) {
                return this.props.employees.map((transaction, index) => {

                    return (
                        <tr key={transaction.id} >
                            <td><a href={transaction.id} target="_blank">{index + 1}</a></td>
                            <td><NavLink to={'/issue/' + transaction.id}>{transaction.user.lastName} {transaction.user.firstName}</NavLink></td>
                            <td>{transaction.departmentMealProfiling.department.name}</td>
                            <td>{transaction.departmentMealProfiling.department.jobFunction}</td>
                            <td>{transaction.departmentMealProfiling.mealAssignment.mealEntitled} Daily</td>
                            
                            {/*                            
                            <td>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </td> */}
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
                            <th>Department</th>
                            <th>Job Function</th>
                            <th>No of Meal Entitled</th>
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

export default EmployeeTable;
