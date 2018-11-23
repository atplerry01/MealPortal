import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

class MenuTable extends Component {

    render() {
        console.log(this.props);
        
        const list = () => {

            if (this.props.menus) {
                return this.props.menus.map((entity, index) => {

                    return (
                        <tr key={entity.id} >
                            <td><a href={entity.id} target="_blank">{index + 1}</a></td>
                            <td><NavLink to={'/issue/' + entity.id}>{entity.name}</NavLink></td>
                            <td>{entity.price}</td>
                            <td>{entity.description}</td>
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
                            <th>Price</th>
                            <th>Decription</th>
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

export default MenuTable;
