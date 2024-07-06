import React from 'react'
import { Card, Select, Steps, Pagination, Popover, Badge } from "antd"
import AnimatedNumbers from '../../components/global/AnimatedNumbers';
import { MessageFilled } from '@ant-design/icons';

const Orders = () => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    return (
        <div className='w-[100%]'>
            <div className='flex flex-col items-center justify-center text-[#fff] bg-[rgba(0,0,0,0.65)] bg-[url(https://livedemo00.template-help.com/wt_prod-20844/images/breadcrumbs-bg.jpg)] bg-cover bg-center bg-blend-overlay w-[100%] h-[40vh] '>
                <h1 className='text-[#fff] font-[700] text-[24px]'>ORDERS PLACED!</h1>
                <h1 className='text-[#fff] font-[700] text-[21px]'>TILL  NOW!</h1>
            </div>
            <div className='flex justify-center px-[80px] pt-[5vh] gap-[10vw]'>
                <AnimatedNumbers title={"Total Orders Delivered"} value={347} />
                <AnimatedNumbers title={"Total Orders to be Placed"} value={347} />
            </div>
            <div className='flex flex-col py-[5vh] px-[80px]'>
                <Select
                    showSearch
                    placeholder="Search reagent/analyzer"
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
                    className='w-[60vw] mb-[5vh]'
                />
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex gap-[5vw]'>
                        <Card
                            hoverable
                            title="Card title"
                            bordered={true}
                            style={{
                                width: '40vw',
                            }}
                        >
                            <div className='flex justify-between'>
                                <div>
                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam id,
                                        dolor illo odio impedit corporis itaque soluta veritatis saepe et.</div>
                                    <div className='absolute top-[7%] right-[5%]'>
                                        <Popover title="Click to chat with Shipper">
                                            <Badge dot>
                                                <MessageFilled className='text-[#1677ff] text-[20px]' />
                                            </Badge>
                                        </Popover>
                                    </div>
                                </div>
                                <Steps
                                    direction="vertical"
                                    size="small"
                                    current={1}
                                    items={[
                                        {
                                            title: 'Order Confirmed',
                                            description: '7 July 2024',
                                        },
                                        {
                                            title: 'In Progress',
                                            description: '',
                                        },
                                    ]}
                                />
                            </div>
                        </Card>
                        <Card
                            hoverable
                            title="Card title"
                            bordered={true}
                            style={{
                                width: '40vw',
                            }}
                        >
                            <div className='flex justify-between'>
                                <div>
                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam id,
                                        dolor illo odio impedit corporis itaque soluta veritatis saepe et.</div>
                                    <div className='absolute top-[7%] right-[5%]'>
                                        <Popover title="Click to chat with Shipper">
                                            <Badge dot>
                                                <MessageFilled className='text-[#1677ff] text-[20px]' />
                                            </Badge>
                                        </Popover>
                                    </div>
                                </div>
                                <Steps
                                    direction="vertical"
                                    size="small"
                                    current={1}
                                    items={[
                                        {
                                            title: 'Order Confirmed',
                                            description: '7 July 2024',
                                        },
                                        {
                                            title: 'In Progress',
                                            description: '',
                                        },
                                    ]}
                                />
                            </div>
                        </Card>
                    </div>
                    <Pagination align="end" defaultCurrent={1} total={500} />
                </div>
            </div>
        </div>
    )
}

export default Orders