import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

class UserTable extends Component {

    handleSelectedUser(value) {
        this.props.handleSelectedUser(value);
    };

    render() {


        const list = () => {  
         
            console.log(this.props);

            if (this.props.users) {
                return this.props.users.map((entity, index) => {
                    return (
                        <tr key={entity.user.userName} >
                            <td><a href={entity.id} target="_blank">{index + 1}</a></td>
                            <td><a data-toggle="modal" onClick={this.handleSelectedUser.bind(this, entity)} href="#accountUpdateModal">{entity.user.lastName} {entity.user.firstName}</a></td>
                            <td>{entity.user.email}</td>
                            <td>{entity.user.cardId}</td>
                            <td>{entity.user.userName}</td>
                            <td>{entity.departmentMealProfiling.department.name}</td>
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
                            <th>Card ID</th>
                            <th>Username</th>
                            <th>Department</th>
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

export default UserTable;
