import React from 'react';
import { HomeOutlined, LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api/auth';

const Register = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const res = await register(values);
            if (res) {
                message.success("Registered successfully!");
            }
        } catch (err) {
            message.error("Something went wrong. Try Again!");
            console.log(err)
        }
    };

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    return (
        <div className='flex justify-between bg-[#f5f6fa]'>
            <div className='flex flex-col items-center justify-center w-[50%] bg-[rgba(0,0,0,0.65)] bg-[url(https://templates.templatedri.com/medical/img/doctor-team.jpg)] bg-blend-overlay bg-cover my-[7vh] mx-[5%]'>
                <h1 className='text-[#fff] font-[700] text-[24px]'>Welcome to <span className='text-[#e5184e]'>Red</span>Cliffe Labs!</h1>
                <h1 className='text-[#fff] font-[700] text-[21px]'>REGISTER NOW!</h1>
            </div>
            <div className='bg-[#fff] w-[25%] my-[7vh] h-[55vh] rounded-[16px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.10)] mr-[10%] flex items-center justify-center'>
                <Form
                    name="normal_login"
                    className="login-form w-[80%]"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '*Required',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <div className='flex justify-between gap-[10px]'>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: '*Required',
                                },
                            ]}
                        >
                            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email Address" />
                        </Form.Item>
                        <Form.Item
                            name="contactNo"
                            rules={[
                                {
                                    required: true,
                                    message: '*Required',
                                },
                            ]}
                        >
                            <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Contact Number" />
                        </Form.Item>
                    </div>
                    <Form.Item
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: '*Required',
                            },
                        ]}
                    >
                        <Input prefix={<HomeOutlined className="site-form-item-icon" />} placeholder="Address" />
                    </Form.Item>
                    <div className='flex justify-between gap-[10px]'>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '*Required',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="role"
                            rules={[
                                {
                                    required: true,
                                    message: '*Required',
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Select role"
                                optionFilterProp="value"
                                onChange={onChange}
                                onSearch={onSearch}
                                options={[
                                    {
                                        value: 'shipping',
                                        label: 'Shipping',
                                    },
                                    {
                                        value: 'customer',
                                        label: 'Customer',
                                    },
                                ]}
                            />
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button w-[100%] bg-[#08a29e] hover:bg-[#1677ff]">
                            Register Now
                        </Button>
                    </Form.Item>
                    <div className='text-center mt-[-20px] my-[5px] font-[500]'>Or</div>
                    <Button type="primary" htmlType="submit" className="login-form-button w-[100%] bg-[#1677ff] hover:!bg-[#08a29e]"
                        onClick={() => navigate('/login')}
                    >
                        Login Now
                    </Button>
                </Form>
            </div>
        </div>
    );
};
export default Register;