import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

class DepartmentTable extends Component {

    render() {
        
        const list = () => {

            if (this.props.departments) {
                return this.props.departments.map((entity, index) => {

                    return (
                        <tr key={entity.id} >
                            <td><a href={entity.id} target="_blank">{index + 1}</a></td>
                            <td>{entity.name}</td>
                            <td>{entity.jobFunction}</td>
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
                            <th>Name</th>
                            <th>Job Function</th>
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

export default DepartmentTable;
