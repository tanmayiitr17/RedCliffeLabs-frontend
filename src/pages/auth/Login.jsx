import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';
import { getAllReagents, getAllAnalyzers } from '../../api/product';
import { useDispatch } from 'react-redux';
import { addAnalyzers, addReagents } from '../../redux/productSlice';
import { addUserInfo } from '../../redux/userSlice';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        try {
            const res = await login(values);
            if (res) {
                console.log("userInfo", res.data);
                // dispatch(addUserInfo(res.data));
                localStorage.setItem("token", res.data.accessToken);

                const fetchReagents = async () => {
                    try {
                        const reagentsRes = await getAllReagents();
                        if (reagentsRes) {
                            console.log("reagentsRes", reagentsRes.data);
                            dispatch(addReagents(reagentsRes.data));
                        }
                    } catch (err) {
                        console.error("Error fetching reagents:", err);
                    }
                };

                const fetchAnalyzers = async () => {
                    try {
                        const analyzersRes = await getAllAnalyzers();
                        if (analyzersRes) {
                            console.log("analyzers", analyzersRes.data);
                            dispatch(addAnalyzers(analyzersRes.data));
                        }
                    } catch (err) {
                        console.error("Error fetching analyzers:", err);
                    }
                };

                // Fetch both reagents and analyzers concurrently
                await Promise.all([fetchReagents(), fetchAnalyzers()]);

                message.success("Logged in successfully!");
                navigate("/");
            }
        } catch (err) {
            console.error("Login error:", err);
            message.error("Something went wrong. Try Again!");
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
            <div className='flex flex-col items-center justify-center w-[50%] bg-[rgba(0,0,0,0.65)] bg-[url(https://templates.templatedri.com/medical/img/doctor-team.jpg)] bg-blend-overlay bg-cover my-[10vh] mx-[5%]'>
                <h1 className='text-[#fff] font-[700] text-[24px]'>Welcome to <span className='text-[#e5184e]'>Red</span>Cliffe Labs!</h1>
                <h1 className='text-[#fff] font-[700] text-[21px]'>LOGIN NOW!</h1>
            </div>
            <div className='bg-[#fff] w-[25%] my-[10vh] h-[60vh] rounded-[16px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.10)] mr-[10%] flex items-center justify-center'>
                <Form
                    name="normal_login"
                    className="login-form w-[70%]"
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
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
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
                                message: 'Please select your Role!',
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
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button w-[100%] bg-[#08a29e] hover:bg-[#1677ff]">
                            Login Now
                        </Button>
                    </Form.Item>
                    <div className='text-center mt-[-20px] my-[5px] font-[500]'>Or</div>
                    <Button type="primary" htmlType="submit" className="login-form-button w-[100%] bg-[#1677ff] hover:!bg-[#08a29e]"
                        onClick={() => navigate('/register')}
                    >
                        Register Now
                    </Button>
                </Form>
            </div>
        </div>
    );
};
export default Login;