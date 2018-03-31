import React, { Component } from 'react';
import { Table, Button } from 'antd';
import reqwest from 'reqwest';

const columns = [
	{
		title: '美食名称',
		dataIndex: 'gourmetName',
		// render: gourmetName => `${}`
	},
	{
		title: '美食图片',
		dataIndex: 'gourmetPic',
		render: (gourmetPic) => {
			return (
				<img src={'http://10.9.163.109:3100/imgUploads/' + gourmetPic} width='100' height='100' alt="" />
			);
		}
	},
	{
		title: '美食地区',
		dataIndex: 'gourmetArea',
		sorter: true,
	},
	{
		title: '美食做法',
		dataIndex: 'gourmetPrac'
	},
	{
		title: '口味描述',
		dataIndex: 'tasteDescri',
		sorter: true,
	},
	{
		title: '注意事项',
		dataIndex: 'mattersAtt'
	},
	{
		title: '上传时间',
		dataIndex: 'uploadTime',
		sorter: true,
	},
	{
		title: '操作',
		dataIndex: '',
		render: () => {
			return (
				<div>
					<Button type="primary" ghost className="positionChange">编辑</Button>
					<Button type="danger" ghost className="positionChange">删除</Button>
				</div>
			);
		}
	}
];


class Jiangsu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [], // 数据
			pagination: {}, // 页码
			loading: false, // 是否加载
		};
	}

	/* 页码记录 */
	handleTableChange = (pagination, fileters, sorter) => {
		const pager = { ...this.state.pagination };
		pager.current = pagination.current; // 当前页码
		this.setState({
			pagination: pager,
		});
		this.fetch({
			results: pagination.pageSize,
			page: pagination.current,
			sortField: sorter.field,
			sortOrder: sorter.order,
		});
	}

	/* 后台数据请求 */
	fetch = (params = {}) => {
		this.setState({ loading: true });
		reqwest({
			url: '/api/cuisine/area/51',
			type: 'json',
			method: 'get',
			contentType: 'application/json',
			data: {
				results: 10,
				...params,
			}
		})
		.then((data) => {
			const pagination = { ...this.state.pagination };
			pagination.total = 200; // 数据总数
			this.setState({
				loading: false,
				data: data.data,
				pagination,
			});
		});
	}

	componentDidMount() {
		this.fetch();
	}

	render() {
		return (
			<Table columns = { columns }
				rowKey = { record => record.registered }
				dataSource = { this.state.data }
				pagination = { this.state.pagination }
				loading = { this.state.loading }
				onChange = { this.handleTableChange }
			/>
		);
	}
}

export default Jiangsu;