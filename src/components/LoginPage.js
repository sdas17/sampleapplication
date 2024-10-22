import React from 'react';
import { Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './LoginPage.css';  // Add custom styles

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="left-section">
        <div className="text-content">
          <p >Where love grows and future blossoms</p>
        </div>
      </div>

      <div className="right-section">
        <div className="login-form-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3fz5E2CqxwOnRDk45okfuCeDFIGvob15N2_yGcagKqZck4fwxuNw3Tun_stXSpjx36eQ&usqp=CAU"
            alt="Logo"
            className="logo"
          />
          <Form
            name="login"
            layout="vertical"
            initialValues={{ remember: true }}
            className="login-form"
          >
            <Form.Item
              label="Email or Phone Number"
              name="username"
              rules={[{ required: true, message: 'Please enter your username!' }]}
            >
              <Input placeholder="Enter username" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password
                placeholder="Enter password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-button">
                Sign in
              </Button>
            </Form.Item>

            <Form.Item>
              <a href="/reset-password" className="forgot-password-link">
                Forgot password?
              </a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
