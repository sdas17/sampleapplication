import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Flex } from 'antd';
import './LoginPage.css';  // Add custom styles

const ResetPassword = () => {
    const [isOTPSent, setIsOTPSent] = useState(false); // State to toggle between OTP and username forms
    const [isOTPVerified, setIsOTPVerified] = useState(false); // State to show new password fields after OTP verification

    // Function to handle OTP generation
    const handleGenerateOTP = () => {
        setIsOTPSent(true);
    };

    const onChange = (text) => {
        console.log('onChange:', text);
      };
      const sharedProps = {
        onChange,
      };

    // Function to handle OTP verification
    const handleVerifyOTP = () => {
        setIsOTPVerified(true);
    };

    // Handle password reset submission
    const handleResetPassword = (values) => {
        console.log('Password reset successful!', values);
    };

    return (
        <div className="login-container">
            <div className="left-section">
                <div className="text-content">
                    <p>Where love grows and future blossoms</p>
                </div>
            </div>
            <div className="right-section">
                <div className="login-form-container">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3fz5E2CqxwOnRDk45okfuCeDFIGvob15N2_yGcagKqZck4fwxuNw3Tun_stXSpjx36eQ&usqp=CAU"
                        alt="Logo"
                        className="logo"
                    />
                    {!isOTPSent ? (
                        <Form
                            name="resetPassword"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            className="login-form"
                        >
                            <p style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold' }}>Password Reset</p>
                            <Form.Item
                                label="Email or Phone Number"
                                name="username"
                                rules={[{ required: true, message: 'Please enter your username!' }]}
                            >
                                <Input placeholder="Enter username" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" onClick={handleGenerateOTP} className="login-button">
                                    Generate OTP
                                </Button>
                            </Form.Item>

                            <Form.Item>
                                <a href="/login" className="forgot-password-link">
                                    Back To Login
                                </a>
                            </Form.Item>
                        </Form>
                    ) : !isOTPVerified ? (
                        <Form
                            name="otpVerification"
                            layout="vertical"
                            className="login-form otp-form"
                            onFinish={handleVerifyOTP}
                        >
                            <p style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold' }}>Password Reset</p>
                            <p className="otp-instruction">Please input the OTP code sent to your provided Email or phone number</p>

                            <Form.Item label="OTP" name="otp" className="otp-inputs" rules={[{ required: true, message: 'Please enter the OTP' }]}>
                                <Flex gap="middle" align="flex-start" vertical>
                                    <Input.OTP length={4} {...sharedProps} />

                                </Flex>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-button">
                                    Verify OTP
                                </Button>
                            </Form.Item>

                            <Form.Item>
                                <a href="/login" className="forgot-password-link">
                                    Back to login
                                </a>
                            </Form.Item>
                        </Form>
                    ) : (
                        <Form
                            name="resetPasswordForm"
                            layout="vertical"
                            className="login-form"
                            onFinish={handleResetPassword}
                        >
                            <p style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold' }}>Set New Password</p>

                            <Form.Item
                                label="New Password"
                                name="newPassword"
                                rules={[{ required: true, message: 'Please enter your new password!' }]}
                            >
                                <Input.Password placeholder="Enter new password" />
                            </Form.Item>

                            <Form.Item
                                label="Confirm Password"
                                name="confirmPassword"
                                dependencies={['newPassword']}
                                hasFeedback
                                rules={[
                                    { required: true, message: 'Please confirm your password!' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('newPassword') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder="Confirm new password" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-button">
                                    Reset Password
                                </Button>
                            </Form.Item>

                            <Form.Item>
                                <a href="/login" className="forgot-password-link">
                                    Back to login
                                </a>
                            </Form.Item>
                        </Form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
