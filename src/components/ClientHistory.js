import React from 'react'
import { Layout, Tabs, Breadcrumb, Button } from 'antd';
import {  TwitchOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { createStyles } from 'antd-style';

export default function ClientHistory() {
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
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Assigned Date',
            dataIndex: 'assignedDate',
        },
        {
            title: 'Removed Date',
            dataIndex: 'removedDate',
        },
        {
            title: 'History',
            dataIndex: 'history',
        },
    ];
    const dataSource = Array.from({
        length: 100,
    }).map((_, i) => ({
        key: i,
        name: `Edward King ${i}`,
        assignedDate: 'Oct 17 2024',
        removedDate: 'Oct 18 2024',
        history: <Button style={{ backgroundColor: '#742ebf', color: 'white' }}><TwitchOutlined /></Button>

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

            <Tabs defaultActiveKey="2">
                <TabPane tab="Details" key="1">

                </TabPane>

                <TabPane tab="History" key="2">
                    <Table
                        className={useStyle.customTable}
                        columns={columns}
                        dataSource={dataSource}
                        pagination={{
                            pageSize: 10,
                        }}
                        scroll={{
                            y: 55 * 5,
                        }}
                    />
                </TabPane>
            </Tabs>
        </AntContent >
    )
}
