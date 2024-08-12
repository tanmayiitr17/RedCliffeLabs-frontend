import { Modal, Table, Input } from 'antd';
import DataTableCustomer from '../../components/global/DataTableCustomer'
import React, { useState } from 'react'

const Purchase = ({ title }) => {
    const [record, setRecord] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const handleOk = () => {
        setIsOpen(false);
    };
    const handleCancel = () => {
        setIsOpen(false);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Used In',
            dataIndex: 'usedIn',
        },
        {
            title: 'Stock (Quantity Available)',
            dataIndex: 'stock',
        },
        {
            title: 'Price (Per Piece)',
            dataIndex: 'price',
        },
    ];

    const data = [
        {
            name: record?.name,
            usedIn: record?.usedIn,
            stock: record?.stock,
        }
    ]

    return (
        <div className='w-[100%]'>
            <div className='flex flex-col items-center justify-center bg-[rgba(0,0,0,0.65)] bg-[url(https://livedemo00.template-help.com/wt_prod-22407/images/single-blog-post-1-770x458.jpg)] bg-cover bg-blend-overlay w-[100%] h-[60vh] '>
                <h1 className='text-[#fff] font-[700] text-[24px] uppercase'>{title} AVAILABLE!</h1>
                <h1 className='text-[#fff] font-[700] text-[21px]'>ORDER NOW!</h1>
            </div>
            <div className='w-[100%] p-[5%]'>
                <DataTableCustomer setIsOpen={setIsOpen} setRecord={setRecord} title={title} />
            </div>
            {
                isOpen &&
                <Modal title={`${title === 'Reagents' ? 'Reagent' : 'Analyzer'} Details`} open={isOpen} onOk={handleOk} onCancel={handleCancel} centered>
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        size="small"
                    />

                    <div className='flex gap-[10px] my-[20px]'>
                        <Input placeholder="Enter the Quantity to buy" type='number' />
                        <Input placeholder="Enter address" />
                    </div>
                </Modal>
            }
        </div>
    )
}

export default Purchase