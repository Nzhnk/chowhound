import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const mapStateToProps = (state) => {
	return {
		cuisineList: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getData: () => {
			dispatch(() => {
				fetch('/api/cuisine/area/32', {
					method: 'get'
				})
				.then(response => response.json())
				.then(result => {
					dispatch({
						type: 'GET_DATA',
						dataList: result.data.map(({_id, gourmetName, gourmetPic, gourmetArea, gourmetPrac, tasteDescri, mattersAtt, uploadTime}) => ({
							key: _id,
							gourmetName,
							gourmetPic,
							gourmetArea,
							gourmetPrac,
							tasteDescri,
							mattersAtt,
							uploadTime
						}))
					})
				})
			})
		}
	}
}

class Jiangsu extends Component {
	constructor(props) {
		super(props);
		this.state = {
				columns: [
				{
					title: '美食名称',
					dataIndex: 'gourmetName',
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
					render: (text) => {
						return (
							<div>
								<NavLink to={'/home/edit/' + text.key} className="ant-btn positionChange ant-btn-primary ant-btn-background-ghost">编辑</NavLink>
								<Button type="danger" ghost className="positionChange" onClick={() => this.deleteData()}>删除</Button>
							</div>
						);
					}
				}
			]
		};
	}

	componentDidMount() {
		this.props.getData();
	}

	deleteData() {
		console.log(this.props.cuisineList)
	}

	render() {
		return (
			<Table columns={this.state.columns} dataSource={this.props.cuisineList} pagination={{
				'defaultCurrent': 1,
				'defaultPageSize': 5,
				'showSizeChanger': true,
				'pageSizeOptions': ['5', '10', '15'],
				'showQuickJumper': true
			}}/>
		);
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Jiangsu);