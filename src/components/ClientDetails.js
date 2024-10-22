// components/Content.js
import React from 'react';
import { Layout, Tabs, Breadcrumb, Form, Input, Select, Row, Col, Button } from 'antd';

const { Content: AntContent } = Layout;
const { TabPane } = Tabs;

const Content = () => {
    return (
        <AntContent
            style={{
                marginTop: 64, // This pushes content below the fixed header
                padding: '20px',
                background: '#fff',
                overflow: 'auto',
                height: 'calc(100vh - 64px)', // Keeps the content within the page height
            }}
        >
            <Breadcrumb>
                <Breadcrumb.Item>Clients List</Breadcrumb.Item>
                <Breadcrumb.Item>Client Name</Breadcrumb.Item>
            </Breadcrumb>

            <Tabs defaultActiveKey="1">
                <TabPane tab="Details" key="1">
                    <Form layout="vertical">
                        <Row gutter={16}>
                            <Col span={24} md={8} lg={6}>
                                <img
                                    style={{ borderRadius: '50%', height: '100px', marginRight: '60px' }}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8UWsHRdJ3a1BZP7rm1fHm43sco5t8ZVKGHA&s"
                                    alt="not found"
                                />
                            </Col>
                            <Col span={24} md={8} lg={6}>
                                <Form.Item label="Client Image" name="clientImage">
                                    <Input type="file" />
                                </Form.Item>
                            </Col>
                            <Col span={24} md={8} lg={6}>
                                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Password is required' }]}>
                                    <Input.Password placeholder="Enter Password" />
                                </Form.Item>
                            </Col>
                            <Col span={24} md={8} lg={6}>
                                <Form.Item
                                    label="Status"
                                    name="status"
                                    rules={[{ required: true, message: 'Please select the status' }]}
                                >
                                    <Select placeholder="Select Status">
                                        <Select.Option value="Assigned">Assigned</Select.Option>
                                        <Select.Option value="Unassigned">Unassigned</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={24} md={8}>
                                <Form.Item
                                    label="Name"
                                    name="name"
                                    rules={[{ required: true, message: 'Please enter the refugee name' }]}
                                >
                                    <Input placeholder="Enter Refugee Name" />
                                </Form.Item>
                            </Col>
                            <Col span={24} md={8}>
                                <Form.Item
                                    label="Email Address"
                                    name="email"
                                    rules={[
                                        { required: true, message: 'Please enter an email address' },
                                        { type: 'email', message: 'Please enter a valid email' },
                                    ]}
                                >
                                    <Input placeholder="Enter Email Address" />
                                </Form.Item>
                            </Col>
                            <Col span={24} md={8}>
                                <Form.Item
                                    label="Home Country"
                                    name="homeCountry"
                                    rules={[{ required: true, message: 'Please enter the home country' }]}
                                >
                                    <Input placeholder="Enter Home Country" />
                                </Form.Item>
                            </Col>
                            <Col span={24} md={12}>
                                <Form.Item
                                    label="Preferred Language"
                                    name="preferredLanguage"
                                    rules={[{ required: true, message: 'Please select a preferred language' }]}
                                >
                                    <Select placeholder="Enter Preferred Language">
                                        <Select.Option value="English">English</Select.Option>
                                        <Select.Option value="Spanish">Spanish</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={24} md={12}>
                                <Form.Item
                                    label="Super Manager"
                                    name="superManager"
                                    rules={[{ required: true, message: 'Please enter the super manager' }]}
                                >
                                    <Input placeholder="Enter Super Manager" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <p><b>US Address Details</b></p>
                        <Row gutter={16}>
                            <Col span={24} md={12}>
                                <Form.Item
                                    label="Address Line 1"
                                    name="address1"
                                    rules={[{ required: true, message: 'Please enter the first address line' }]}
                                >
                                    <Input placeholder="Enter Address Line 1" />
                                </Form.Item>
                            </Col>
                            <Col span={24} md={12}>
                                <Form.Item
                                    label="Address Line 2"
                                    name="address2"
                                    rules={[{ required: false }]}
                                >
                                    <Input placeholder="Enter Address Line 2" />
                                </Form.Item>
                            </Col>
                            <Col span={24} md={8}>
                                <Form.Item
                                    label="City"
                                    name="city"
                                    rules={[{ required: true, message: 'Please enter the city' }]}
                                >
                                    <Input placeholder="Enter City" />
                                </Form.Item>
                            </Col>
                            <Col span={24} md={8}>
                                <Form.Item
                                    label="State"
                                    name="state"
                                    rules={[{ required: true, message: 'Please enter the state' }]}
                                >
                                    <Input placeholder="Enter State" />
                                </Form.Item>
                            </Col>
                            <Col span={24} md={8}>
                                <Form.Item
                                    label="ZIP Code"
                                    name="zipCode"
                                    rules={[{ required: true, message: 'Please enter the ZIP code' }]}
                                >
                                    <Input placeholder="Enter ZIP Code" />
                                </Form.Item>
                            </Col>
                            <Col span={24} md={12}>
                                <Form.Item
                                    label="US Phone Number"
                                    name="phoneNumber"
                                    rules={[
                                        { required: true, message: 'Please enter a US phone number' },
                                        { pattern: /^\d{3}-\d{3}-\d{4}$/, message: 'Phone number must be in format: xxx-xxx-xxxx' },
                                    ]}
                                >
                                    <Input placeholder="Enter US Phone Number" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <p><b>Family Details</b></p>
                        <Row gutter={16}>
                            <Col span={24} md={12}>
                                <Form.Item
                                    label="Family Member Name"
                                    name="familyMemberName"
                                    rules={[{ required: true, message: 'Please enter the family member name' }]}
                                >
                                    <Input placeholder="Enter Family Member Name" />
                                </Form.Item>
                            </Col>
                            <Col span={24} md={6}>
                                <Form.Item
                                    label="Relation"
                                    name="relation"
                                    rules={[{ required: true, message: 'Please enter the relation' }]}
                                >
                                    <Input placeholder="Enter Relation" />
                                </Form.Item>
                            </Col>
                            <Col span={24} md={6}>
                                <Form.Item
                                    label="Age"
                                    name="age"
                                    rules={[
                                        { required: true, message: 'Please enter the age' },
                                        { type: 'number', message: 'Age must be a number' },
                                    ]}
                                >
                                    <Input placeholder="Enter Age" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button style={{ color: 'white', backgroundColor: '#ff4d4f' }} type="danger">
                                    Close Client
                                </Button>
                                <div>
                                    <Button type="primary" style={{ backgroundColor: 'GrayText', marginRight: '16px' }} htmlType="button">
                                        Cancel
                                    </Button>
                                    <Button type="primary" style={{ backgroundColor: '#150699' }} htmlType="submit">
                                        Update
                                    </Button>
                                </div>
                            </div>
                        </Form.Item>
                    </Form>
                </TabPane>

                <TabPane tab="History" key="2">
                    <h2>History Content Goes Here</h2>
                </TabPane>
            </Tabs>
        </AntContent>
    );
};

export default Content;
