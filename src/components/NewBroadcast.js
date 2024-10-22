import React from 'react'
import { Layout, Breadcrumb, Form, Row, Col, Button, Select } from 'antd';
import { DatePicker } from 'antd';
import { ClearOutlined, SearchOutlined } from '@ant-design/icons';


export default function NewBroadcast() {
    const { Content: AntContent } = Layout;
    const { RangePicker } = DatePicker;

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
            <Breadcrumb style={{ marginBottom: '20px' }}>
                <Breadcrumb.Item>Broadcast Services</Breadcrumb.Item>
                <Breadcrumb.Item>New Broadcast</Breadcrumb.Item>
            </Breadcrumb>

            <Form layout="vertical">

                <h3>New Broadcast</h3>
                <Row gutter={16}>
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
                    <Col span={24} md={12}>
                        <Form.Item
                            label="Language"
                            name="language"
                            rules={[{ required: true, message: 'Please select a language' }]}
                        >
                            <Select placeholder="Choose Language">
                                <Select.Option value="English">English</Select.Option>
                                <Select.Option value="Spanish">Spanish</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
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
                    <Col span={24} md={8}>
                        <Form.Item
                            label="Date Range"
                            name="dateRange"

                        >
                            <RangePicker showTime />
                        </Form.Item>
                    </Col>
                    <Col md={8}>
                        <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button type="primary" style={{ backgroundColor: 'GrayText', marginRight: '10px' }}>
                                <ClearOutlined />Clear
                            </Button>
                            <Button style={{ color: 'white', backgroundColor: '#d493f5', marginRight: '10px' }}>
                                <SearchOutlined />Search
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>




            </Form>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img
                    src='https://library.mailmanhq.com/wp-content/uploads/2021/04/How-email-management-tame-the-inbox-gone-wild-370x245.jpg'
                    alt='Not Found'
                    style={{ marginBottom: '10px', }} // Darkens the image
                />
                <p>Please choose respective clients using search filters to start a broadcast.</p>
            </div>
            {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img
                    src='https://www.sitesaga.com/storage/2023/09/database-connection-lost.png'
                    alt='Not Found'
                    style={{ marginBottom: '10px', }} // Darkens the image
                />
                <p>Sorry, we don’t have any results. Please retry with new filters.</p>
            </div> */}
        </AntContent >
    )
}
