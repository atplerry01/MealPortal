import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

class DepartmentProfileTable extends Component {

    render() {        
        const list = () => {
            if (this.props.departmentProfiles) {
                return this.props.departmentProfiles.map((entity, index) => {

                    return (
                        <tr key={entity.id} >
                            <td><a href={entity.id} target="_blank">{index + 1}</a></td>
                            <td><NavLink to="#">{entity.department.name}</NavLink></td>
                            <td>{entity.department.jobFunction}</td>
                            <td>{entity.mealAssignment.mealEntitled}</td>
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
                            <th>Department</th>
                            <th>Job Function</th>
                            <th>Meal No</th>
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

export default DepartmentProfileTable;
