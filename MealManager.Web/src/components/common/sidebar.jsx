import React from 'react';
import { NavLink } from "react-router-dom";

const SideBar = () => (
<div className="col-sm-4 col-md-3">

<br /><br />
<div className="job-detail-sidebar">

    <ul className="meta-list clearfix">
        <li>
            <h4 className="heading">Extra:</h4>
            <ul>
                <li><NavLink to="/extra/departments">Department</NavLink></li>
                <li><NavLink to="/extra/menus">Menus</NavLink></li>
            </ul>
            
        </li>
        <li>
            <h4 className="heading">Rate/Salary:</h4>
            Negotiable
        </li>
        <li>
            <h4 className="heading">Expert:</h4>
            Expert
        </li>
        <li>
            <h4 className="heading">Posted:</h4>
            32 minutes ago
        </li>
    </ul>

</div>

</div>

)

export default SideBar