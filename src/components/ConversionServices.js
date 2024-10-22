import React from 'react'
import { Layout, Breadcrumb, Form, Input, Button } from 'antd';
import { StepBackwardOutlined } from '@ant-design/icons';
import { Card, Row, Col, Typography, Avatar } from 'antd';

import Profile from '../../src/components/assets/profile.png';
export default function ConversionServices() {
    const { Content: AntContent } = Layout;
    const { Text } = Typography;
    const chatApplication = [
        { Name: "Client", message: "Donec sed nisl libero, Fusce dignissim lutuss", time: "11:30 AM" },
        { Name: "Case Manager 1", message: "Donec sed nisl libero, Fusce dignissim lutuss", time: "11:30 AM" },
        { Name: "Case Manager 2", message: "Donec sed nisl libero, Fusce dignissim lutuss", time: "11:30 AM" }
    ];




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
                <Breadcrumb.Item>Conversion </Breadcrumb.Item>
            </Breadcrumb>
            <Card bordered={false} style={{
                border: "1px solid lightgray",
                background: "F8F8FF"

            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h1 style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '24px',
                        fontWeight: 500,
                        lineHeight: '32px',
                        letterSpacing: '0.01em',
                        textAlign: 'left',
                        margin: 0,
                    }}>
                        Client Name
                    </h1>
                    <StepBackwardOutlined style={{ fontSize: "28px" }} />

                </div>
            </Card>

            <Row gutter={24} >
                <Col span={8}>
                    {/*  */}
                    <Card bordered={false} style={{ marginTop: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', marginTop: "15px" }}>
                            <img src={Profile} alt="Profile" style={{ width: '100px', height: '100px' }} />

                        </div>
                        <div>
                            <p>Case Manager</p>
                            <div style={{ display: 'flex', gap: "9px", flexWrap: "wrap" }}>
                                <img src={Profile} alt="Profile" style={{ width: '30px', height: '30px' }} />
                                <p style={{ fontSize: '16px', margin: '0' }}>Case Manager</p>

                            </div>
                            <br></br>
                            <div style={{ display: 'flex', gap: "9px" }}>
                                <img src={Profile} alt="Profile" style={{ width: '30px', height: '30px' }} />
                                <p style={{ fontSize: '16px', margin: '0' }}>Case Manager</p>

                            </div>
                        </div>
                        <br></br>
                        <div>
                            <Row gutter={[16, 16]}>
                                <Col span={12}>
                                    <Text strong>Home Country</Text>
                                    <div>Israel</div>
                                </Col>

                                <Col span={12}>
                                    <Text strong>Phone Number</Text>
                                    <div>408-591-614</div>
                                </Col>
                                <Col span={12}>
                                    <Text strong>Email ADDRESS</Text>
                                    <div>refugee-1@domain.com</div>
                                </Col>

                                <Col span={12}>
                                    <Text strong>Date OF ARRIVAL</Text>
                                    <div>Mar 21,2023</div>
                                </Col>
                                <Col span={24}>
                                    <Text strong>PREFERRED LANGUAGE</Text>
                                    <div>English</div>
                                </Col>
                                <Col span={12}>
                                    <Text strong>ADDRESS LINE1</Text>
                                    <div>1881 friendship Lane</div>
                                </Col>
                            </Row>
                        </div>

                    </Card>
                </Col>
                <Col span={16}>
                    <Card bordered={false} style={{ marginTop: '20px' }}>
                        <div >
                            {chatApplication.map((chat, index) => (
                                <div key={index} bordered={false} style={{ marginBottom: 20 }}>
                                    <Row gutter={[16, 16]}>
                                        <Col span={16}>
                                            <div>


                                                <p><img src={Profile} alt="Profile" style={{ width: '30px', height: '30px' }} />{chat.Name}
                                                    <br></br>
                                                    <div
                                                        style={{
                                                            width: '595.49px',
                                                            height: '52px',
                                                            padding: '7px 10px 10px 10px',
                                                            gap: '3px',
                                                            borderRadius: '5px 0px 0px 0px',
                                                            opacity: 0.8,
                                                            backgroundColor: '#f0f0f0',
                                                            overflow: 'hidden',
                                                            marginLeft: "20px"
                                                        }}
                                                    >
                                                        {chat.message}

                                                    </div>
                                                    <p style={{ marginLeft: "15px" }}>{chat.time}</p>
                                                </p>
                                            </div>

                                        </Col>

                                    </Row>
                                </div>
                            ))}
                        </div>
                    </Card>
                </Col>

            </Row>
        </AntContent >
    )
}
