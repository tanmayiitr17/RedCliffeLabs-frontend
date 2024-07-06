import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';

const data = [
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
    {
        name: 'Coagulation reagents',
        usedIn: 'Blood test',
        stock: '250',
    },
]

const DataTableCustomer = ({ setIsOpen, setRecord }) => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '35%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Used In',
            dataIndex: 'usedIn',
            key: 'usedIn',
            width: '35%',
            ...getColumnSearchProps('usedIn'),
        },
        {
            title: 'Stock (Quantity Available)',
            dataIndex: 'stock',
            width: '20%',
            key: 'stock',
            ...getColumnSearchProps('stock'),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Order Now',
            dataIndex: 'order',
            width: '10%',
            render: (text, record) => (
                <Button
                    onClick={() => handleClick(record)}
                    style={{
                        width: '100%',
                        borderRadius: '5px',
                        background: '#08a29e',
                        padding: '2px 8px',
                        color: '#fff',
                        fontSize: '14px',
                        fontWeight: '500',
                        textAlign: 'center',
                    }}
                >
                    Buy Now
                </Button>
            ),
        },
    ];

    const handleClick = (record) => {
        console.log("record", record)
        setIsOpen((prev) => !prev);
        setRecord(record);
    }
    return <Table columns={columns} dataSource={data} />;
};
export default DataTableCustomer;