import React from 'react';

import {Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function Navbar () {
    return(
        <div>
            <Menu mode="horizontal">

                <Menu.Item key="1"> 
                    <Link to ="/employeeform">
                    Employee Form
                    </Link>
                </Menu.Item> 
                <Menu.Item key="2"> 
                    <Link to ="/employeetable">
                    Employee Table
                    </Link>
                </Menu.Item>  
                <Menu.Item key="3">
                    <Link to ="/aboutus"> About Us 
                    </Link>
                </Menu.Item>
             </Menu>
        </div>
    )

}