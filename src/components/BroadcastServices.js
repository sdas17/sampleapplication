import React from 'react'
import { Layout, Breadcrumb, Form, Input, Row, Col, Button } from 'antd';
import { DatePicker } from 'antd';
import { PlusOutlined, TwitchOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { createStyles } from 'antd-style';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Tooltip } from 'antd';

export default function BroadcastServices() {
    const { Content: AntContent } = Layout;
    const { RangePicker } = DatePicker;

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
            title: 'Clients',
            dataIndex: 'clients',
        },
        {
            title: 'Message',
            dataIndex: 'message',
        },
        {
            title: 'Last Messaged Date',
            dataIndex: 'lastMessageDate',
        },
        {
            title: 'View',
            dataIndex: 'view',
        }
    ];
    const dataSource = Array.from({
        length: 100,
    }).map((_, i) => ({
        key: i,
        clients: <Avatar.Group
            max={{
                count: 2,
                style: {
                    color: '#f56a00',
                    backgroundColor: '#fde3cf',
                },
            }}
        >
            <Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <Avatar
                style={{
                    backgroundColor: '#ad75c9',
                }}
            >
                K
            </Avatar>
            <Tooltip title="Ant User" placement="top">
                <Avatar
                    style={{
                        backgroundColor: '#87d068',
                    }}
                    icon={<UserOutlined />}
                />
            </Tooltip>
            <Avatar
                style={{
                    backgroundColor: '#1677ff',
                }}
                icon={<AntDesignOutlined />}
            />
        </Avatar.Group>,
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        lastMessageDate: 'Oct 17 2024',
        view: <Button style={{ backgroundColor: '#742ebf', color: 'white' }}><TwitchOutlined /></Button>
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
            <Breadcrumb style={{ marginBottom: '20px' }}>
                <Breadcrumb.Item>Broadcast Services</Breadcrumb.Item>
            </Breadcrumb>

            <Form layout="vertical">


                <Row gutter={16}>
                    <Col span={24} md={8}>
                        <Form.Item
                            label="Search By"
                            name="search by"

                        >
                            <Input placeholder="By Name, Email, Phone" />
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
                            <Button style={{ color: 'white', backgroundColor: '#ad75c9', marginRight: '10px' }}>
                                Search
                            </Button>
                            <Button type="primary" style={{ backgroundColor: '#c92c6b' }}>
                                <PlusOutlined />New
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
        </AntContent >
    )
}
