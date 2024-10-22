import React from 'react'
import { Layout, Tabs, Breadcrumb, Form, Input, Select, Row, Col, Button, Card, Tag } from 'antd';
import { DatePicker } from 'antd';
import { DoubleRightOutlined, PlusOutlined, UserOutlined, TwitchOutlined, CalendarOutlined, PhoneOutlined } from '@ant-design/icons';

export default function ClientCard() {
    const { Content: AntContent } = Layout;
    const { RangePicker } = DatePicker;
    const { TabPane } = Tabs;
    const { Meta } = Card;

    // Sample data for clients
    const dataSource = Array.from({
        length: 15, // Displaying 15 cards
    }).map((_, i) => ({
        key: i,
        name: `Edward King ${i}`,
        email: `client${i}@gmail.com`,
        phone: '010-253-7894',
        joinedDate: 'Oct 17 2024',
        status: 'Assigned',
        profile: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png', // Profile image
    }));

    return (
        <AntContent
            style={{
                marginTop: 64,
                padding: '20px',
                background: '#fff',
                overflow: 'auto',
                height: 'calc(100vh - 64px)',
            }}
        >
            <Breadcrumb>
                <Breadcrumb.Item>Clients List</Breadcrumb.Item>
            </Breadcrumb>

            <Tabs defaultActiveKey="1">
                <TabPane tab="Details" key="1">
                    <Form layout="vertical">


                        <Row gutter={16}>
                            <Col span={24} md={8}>
                                <Form.Item
                                    label="Search"
                                    name="search by"
                                    rules={[{ required: true, message: 'Please enter the refugee name' }]}
                                >
                                    <Input placeholder="By Name, Email, Phone" />
                                </Form.Item>
                            </Col>
                            <Col span={24} md={8}>
                                <Form.Item
                                    label="Country"
                                    name="country"
                                    rules={[{ required: true, message: 'Please select a country' }]}
                                >
                                    <Select placeholder="Select a Country">
                                        <Select.Option value="India">India</Select.Option>
                                        <Select.Option value="US">US</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={24} md={8}>
                                <Form.Item
                                    label="Joined Date"
                                    name="joinedDate"
                                    rules={[{ required: true, message: 'Please pick a date and time' }]}
                                >
                                    <RangePicker showTime />
                                </Form.Item>
                            </Col>

                            {/* This row combines Gender, Status, and Buttons */}
                            <Col span={24}>
                                <Row gutter={16} align="middle">
                                    <Col md={8}>
                                        <Form.Item
                                            label="Gender"
                                            name="gender"
                                            rules={[{ required: true, message: 'Please select your gender' }]}
                                        >
                                            <Select placeholder="Select Gender">
                                                <Select.Option value="Female">Female</Select.Option>
                                                <Select.Option value="Male">Male</Select.Option>
                                                <Select.Option value="Others">Others</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col md={8}>
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
                                    <Col md={8}>
                                        <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <Button style={{ color: 'white', backgroundColor: '#ad75c9', marginRight: '10px' }}>
                                                Search
                                            </Button>
                                            <Button type="primary" style={{ backgroundColor: 'GrayText', marginRight: '10px' }}>
                                                Clear
                                            </Button>
                                            <Button type="primary" style={{ backgroundColor: 'Black', marginRight: '10px' }}>
                                                <DoubleRightOutlined />
                                            </Button>
                                            <Button type="primary" style={{ backgroundColor: '#c92c6b' }}>
                                                <PlusOutlined />
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                    {/* Scrollable Row with smaller cards */}
                    <div style={{ padding: '20px', height: '320px', overflowY: 'auto' }}>
                        <Row gutter={[16, 16]}>
                            {dataSource.map((client) => (
                                <Col xs={24} sm={12} md={8} lg={6} key={client.key}>
                                    <Card
                                        hoverable
                                        style={{
                                            width: 300,
                                            textAlign: 'left',
                                            borderRadius: '10px',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        }}
                                        cover={
                                            <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                                                <img alt="profile" style={{ borderRadius: '50%', height: '50px', width: '50px' }} src={client.profile} />
                                                <div style={{ marginLeft: '10px' }}>
                                                    <h3 style={{ marginBottom: '2px' }}>{client.name}</h3>
                                                    <span style={{ display: 'block', fontSize: '14px', marginBottom: '0' }}>{client.email}</span>
                                                </div>
                                            </div>
                                        }
                                    >
                                        <Meta
                                            description={(
                                                <div style={{ fontSize: '14px' }}>
                                                    <p style={{ marginBottom: '2px' }}><PhoneOutlined /> {client.phone}</p>
                                                    <p style={{ marginBottom: '0' }}><CalendarOutlined /> {client.joinedDate}</p>
                                                </div>
                                            )}
                                        />
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                            <Tag color={client.status === 'Assigned' ? 'green' : 'red'}>{client.status}</Tag>
                                            <div>
                                                <Button icon={<UserOutlined />} style={{ backgroundColor: '#d68515', color: 'white', marginRight: '10px' }} />
                                                <Button icon={<TwitchOutlined />} style={{ backgroundColor: '#742ebf', color: 'white' }} />
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>

                </TabPane>

                <TabPane tab="History" key="2">
                    <h2>History Content Goes Here</h2>
                </TabPane>
            </Tabs>
        </AntContent>
    );
}
