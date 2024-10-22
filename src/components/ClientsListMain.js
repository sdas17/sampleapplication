import React from 'react'
import { Layout, Tabs, Breadcrumb, Form, Input, Select, Row, Col, Button } from 'antd';
import { DoubleRightOutlined, PlusOutlined, UserOutlined, TwitchOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { createStyles } from 'antd-style';

export default function ClientListMain() {
    const { Content: AntContent } = Layout;
    const { TabPane } = Tabs;

    const useStyle = createStyles(({ css, token }) => {
        const { antCls } = token;
        return {
            customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: unset;
          }
        }
      }
    `,
        };
    });
    const columns = [
        {
            title: 'Client Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Joined Date',
            dataIndex: 'joinedDate',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
        },
    ];
    const dataSource = Array.from({
        length: 100,
    }).map((_, i) => ({
        key: i,
        name: `Edward King ${i}`,
        email: `client ${i}@gmail.com`,
        phone: '010-253-7894',
        joinedDate: 'Oct 17 2024',
        status: 'Assigned',
        actions: <div><Button style={{ backgroundColor: '#d68515', color: 'white' }}><UserOutlined /></Button>
            <Button style={{ backgroundColor: '#742ebf', color: 'white' }}><TwitchOutlined /></Button></div>
    }));
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




                    </Form>
                    <Table
                        className={useStyle.customTable}
                        columns={columns}
                        dataSource={dataSource}
                        pagination={{
                            pageSize: 10,
                        }}
                        scroll={{
                            y: 55 * 6,
                        }}
                    />
                </TabPane>

                <TabPane tab="History" key="2">
                    <h2>History Content Goes Here</h2>
                </TabPane>
            </Tabs>
        </AntContent >
    )
}
