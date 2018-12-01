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
                <li style={{paddingTop: '15px'}}><NavLink to="/extra/departments">Department</NavLink></li>
                <li><NavLink to="/extra/menus">Menus</NavLink></li>
            </ul>
        </li>
       
    </ul>

</div>

</div>

)

export default SideBar