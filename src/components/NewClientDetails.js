// components/Content.js
import React from 'react';
import { Layout, Tabs, Breadcrumb, Row, Col, Card, Avatar, Button, Table } from 'antd';
import { EditOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const { Content: AntContent } = Layout;
const { TabPane } = Tabs;

const NewClientDetails = () => {
    const clientDetails = {
        name: 'Client Name',
        phone: '408-591-6143',
        email: 'client-1@domain.com',
        homeCountry: 'Israel',
        preferredLanguage: 'English',
        address1: '1881 Friendship Lane',
        address2: 'Hartford, Connecticut',
        city: 'Lawson Bay',
        state: 'Florida',
        zip: '12345',
        password: '*******',
        arrivalDate: 'Mar 21, 2023',
        superManager: 'Case Manager Name 1',
        familyDetails: [
            { key: '1', name: 'Member one', relation: 'Father', age: 61 },
            { key: '2', name: 'Member two', relation: 'Mother', age: 57 }
        ]
    };

    const columns = [
        {
            title: 'Family Member Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Relation',
            dataIndex: 'relation',
            key: 'relation',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }
    ];

    return (
        <AntContent
            style={{
                marginTop: 64, // Pushes content below the fixed header
                padding: '20px',
                background: '#fff',
                overflow: 'auto',
                height: 'calc(100vh - 64px)', // Keeps content within the page height
            }}
        >
            <Breadcrumb>
                <Breadcrumb.Item>Clients List</Breadcrumb.Item>
                <Breadcrumb.Item>Client Name</Breadcrumb.Item>
            </Breadcrumb>

            <Tabs defaultActiveKey="1">
                <TabPane tab="Details" key="1">
                    <Card
                        style={{
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            maxHeight: 'calc(100vh - 190px)', // To prevent the card from overflowing the screen
                            overflowY: 'auto', // Enables vertical scrolling within the card
                        }}
                    >
                        {/* Client Header */}
                        <Row gutter={[16, 16]} align="middle">
                            <Col span={2}>
                                <Avatar size={64} src="https://randomuser.me/api/portraits/men/75.jpg" />
                            </Col>
                            <Col span={16}>
                                <h2>{clientDetails.name}</h2>
                                <Row gutter={[16, 16]}>
                                    <Col span={12}>
                                        <p><PhoneOutlined /> {clientDetails.phone}</p>
                                        <p><MailOutlined /> {clientDetails.email}</p>
                                    </Col>
                                    <Col span={12}>
                                        <p>Home Country: {clientDetails.homeCountry}</p>
                                        <p>Preferred Language: {clientDetails.preferredLanguage}</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={2}>
                                <Button icon={<EditOutlined />} type="primary" shape="round">Edit</Button>
                            </Col>
                        </Row>

                        {/* Address Details */}
                        <Row >
                            <Col span={24}>
                                <h3>US Address Details</h3>
                            </Col>
                            <Col span={12}>
                                <p>Address Line 1: {clientDetails.address1}</p>
                                <p>City: {clientDetails.city}</p>
                                <p>Password: {clientDetails.password}</p>
                            </Col>
                            <Col span={12}>
                                <p>Address Line 2: {clientDetails.address2}</p>
                                <p>State: {clientDetails.state}</p>
                                <p>Date of Arrival: {clientDetails.arrivalDate}</p>
                            </Col>
                        </Row>

                        {/* Family Details */}
                        <Row gutter={[16, 16]}>
                            <Col span={12}>
                                <h3>Family Details</h3>
                                <Table dataSource={clientDetails.familyDetails} columns={columns} pagination={false} />
                            </Col>
                        </Row>
                    </Card>
                </TabPane>

                <TabPane tab="History" key="2">
                    <h2>History Content Goes Here</h2>
                </TabPane>
            </Tabs>
        </AntContent>
    );
};

export default NewClientDetails;
