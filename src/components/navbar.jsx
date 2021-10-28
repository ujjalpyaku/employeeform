import React from 'react';

import {Menu } from 'antd';
import { Link } from 'react-router-dom';

export default function Navbar () {
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item> 
                    <Link to ="/employeeform">
                    Employee Form
                    </Link>
                </Menu.Item>  
                <Menu.Item>
                    <Link to ="/aboutus"> About Us 
                    </Link>
                </Menu.Item>
             </Menu>
        </div>
    )

}