import React from 'react'
import { Table } from 'antd';

const TableUser = ({ columns, data, pageSize }) => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={pageSize}
        />
    )
}

export default TableUser