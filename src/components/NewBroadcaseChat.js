import React, { useState } from 'react';
import { Layout, Breadcrumb, Form, Input, Row, Col, Button, Select, List, Avatar } from 'antd';
import { DatePicker } from 'antd';
import { ClearOutlined, SearchOutlined, SyncOutlined,SendOutlined } from '@ant-design/icons';
import { Checkbox, Divider } from 'antd';


export default function NewBroadcastChat() {
    const { Content: AntContent } = Layout;
    const { RangePicker } = DatePicker;
    const { Search } = Input;
    const CheckboxGroup = Checkbox.Group;
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const defaultCheckedList = ['Apple', 'Orange'];

    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;
    const onChange = (list) => {
        setCheckedList(list);
    };
    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
    };

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
                            <Button style={{ color: 'white', backgroundColor: '#440099', marginRight: '10px' }}>
                                <SearchOutlined />Search
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Row gutter={16}>
        {/* Left Column - Clients List */}
        <Col span={6}>
          <Input.Search placeholder="Search by name" enterButton={<SyncOutlined />} style={{ marginBottom: 20 }} />
          <Divider />
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            Select All
          </Checkbox>
          <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} style={{ display: 'block', }} />
         
        </Col>

        {/* Right Column - Chat Box */}
        <Col span={18}>
          <div style={{ padding: '20px', border: '1px solid #f0f0f0', height: '250px', overflowY: 'auto' }}>
            <p><strong>July 24, 2024</strong></p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" style={{ marginRight: 10 }} />
              <div>
                <p style={{ marginBottom: 5 }}>Donec sed nisi libero. Fusce dignissim luctus sem eu dapibus.</p>
                <span style={{ fontSize: '12px', color: '#999' }}>8:15 PM</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <Input.TextArea rows={2} placeholder="Type your message..." />
            <Button type="primary" icon={<SendOutlined />} style={{ marginTop: 10, float: 'right' }}>
              Send
            </Button>
          </div>
        </Col>
      </Row>

            {/* <Space direction="vertical" size="middle">
                <Space.Compact size="large">
                    <Input addonBefore={<SearchOutlined />} placeholder="large size" />
                </Space.Compact>
            </Space>
            <Button><SyncOutlined /></Button>
            <Divider />
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                Check all
            </Checkbox>

            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} /> */}

        </AntContent >
    )
}
