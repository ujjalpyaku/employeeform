import React from 'react';
import { Table} from 'antd';

const EmployeeTable = () => {
    const columns = [
        {
          title: 'First Name',
          dataIndex: 'firstname',
          key: 'firstname',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastname',
            key: 'lastname',
            
          },
          {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            
          },
          {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            
          }]
    return ( <Table columns={columns} dataSource={JSON.parse(localStorage.getItem("employee"))} /> );
}
 
export default EmployeeTable;