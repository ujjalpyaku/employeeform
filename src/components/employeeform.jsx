import React from 'react';
import { Form, Input, Button, Select, Radio,  DatePicker, Divider } from 'antd';
const { Option } = Select;

const EmployeeForm = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value="977">+977</Option>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div class="container" style={{margin:"20px"}}>
      <h1 style={{marginBottom:"20px"}}> Employee Form</h1>
      <Divider/>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        labelAlign= "left"
        initialValues={{ remember: true,  prefix: '977' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{padding:" 20px"}}
      >
        <Form.Item
          label="Firstname"
          name="firstname"
          rules={[{ required: true, message: 'Please input firstname!' }]}
        >
          <Input
            placeholder="Enter firstname" />
        </Form.Item>

        <Form.Item
          label="Lastname"
          name="lastname"
          rules={[{ required: true, message: 'Please input lastname!' }]}
        >
          <Input
            placeholder="Enter lastname" />
        </Form.Item>

        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Radio.Group>
          <Radio value={1}>Male</Radio>
          <Radio value={2}>Female</Radio>
          <Radio value={3}>Other</Radio>
        </Radio.Group>
        </Form.Item>

        <Form.Item name="dob" label="D.O.B" rules={[{ required: true, message: 'Enter D.O.B!' }]}>
          <DatePicker />
        </Form.Item>

        <Form.Item name="email" label="Email" rules={[{ type: 'email', required: true, message: 'Enter Email!' }]}>
        <Input placeholder="Enter email"/>
        </Form.Item>

        <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>  

        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a Country"
        >
          <Option value="Nepal">Nepal</Option>
          <Option value="america">America</Option>
          <Option value="usa">USA</Option>
          <Option value="us">US</Option>
          <Option value="us">United States of America</Option>
        </Select>
      </Form.Item> 
      
      <Form.Item
          label="Designation"
          name="designation"
          rules={[{ required: true, message: 'Please enter designation!' }]}
        >
          <Input
            placeholder="Enter designation" />
        </Form.Item>
 
        <Form.Item name="startdate" label="Start Date" rules={[{ required: true, message: 'Enter start date!' }]}>
          <DatePicker />
        </Form.Item>

 {/* submit button */}
      <Form.Item wrapperCol={{ offset: 10, span: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>
    </div>
  );
};


export default EmployeeForm;