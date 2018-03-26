import React, { Component } from 'react';

import { Table } from 'antd';

const columns = [
	{
		title: '姓名',
		dataIndex: 'name',
		sorter: (a, b) => a.name.length - b.name.length,
	},
	{
		title: '年龄',
		dataIndex: 'age',
		sorter: (a, b) => a.age - b.age,
	},
	{
		title: '住址',
		dataIndex: 'address',
		sorter: (a, b) => a.address.length - b.address.length,
	}
];

const data = [
	{
		key: '1',
		name: '牛志昊',
		age: 18,
		address: '北京市昌平区沙河镇沙阳路18号北京职业科技学院',
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
	},
	{
		key: '4',
		name: 'Jim Red',
		age: 32,
		address: 'London No. 2 Lake Park',
	}
];


class Sichuan extends Component {
	render() {
		return (
			<Table columns={columns} dataSource={data} pagination={{
				'defaultCurrent': 1,
				'defaultPageSize': 3,
				'showSizeChanger': true,
				'pageSizeOptions': ['3', '4', '5'],
				'size': 'small',
				'showQuickJumper': true
			}}  />
		);
	}
}

export default Sichuan;