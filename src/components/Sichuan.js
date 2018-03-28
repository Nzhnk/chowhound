import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Icon } from 'antd';

const columns = [
	{
		title: '美食名称',
		dataIndex: 'gourmetName',
		sorter: (a, b) => a.gourmetName.length - b.gourmetName.length,
	},
	{
		title: '图片',
		dataIndex: 'gourmetPic',
	},
	{
		title: '地区',
		dataIndex: 'gourmetArea',
	},
	{
		title: '做法',
		dataIndex: 'gourmetPrac',
	},
	{
		title: '口味描述',
		dataIndex: 'tasteDescri',
	},
	{
		title: '注意事项',
		dataIndex: 'mattersAtt',
	},
	{
		title: '上传时间',
		dataIndex: 'uploadTime',
		sorter: (a, b) => a.uploadTime - b.uploadTime,
	},
	{
		title: '操作',
		key: 'action',
		render: ( text, record ) => (
			<span>
				<Button type="primary" ghost className="positionChange"><Icon type="edit" />编辑</Button>
				<Button type="danger" ghost className="positionChange"><Icon type="delete" />删除</Button>
			</span>
		),
	}
];

const mapStateToProps = ( state ) => {
	return {
		cuisineList: state
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getData: () => {
			dispatch(() => {
				fetch( '/api/cuisine/area/51', {
					method: 'GET'
				} )
				.then( response => response.json() )
				.then( result => {
					console.log(result);
					dispatch({
						type: 'GET_DATA',
						dataList: result.data.map(({
							_id,
							gourmetName,
							gourmetPic,
							gourmetArea,
							gourmetPrac,
							tasteDescri,
							mattersAtt,
							uploadTime
						}) => ({
							key: _id,
							gourmetName,
							gourmetPic: <img src={'http://localhost:3100/imgUploads/' + gourmetPic} width="100" height="100"/>,
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


class Sichuan extends Component {
	constructor( props ){
		super( props );
	};
	componentDidMount(){
		this.props.getData();
	};
	render() {
		return (
			<Table columns={columns} dataSource={this.props.cuisineList	} pagination={{
				'defaultCurrent': 1,
				'defaultPageSize': 3,
				'showSizeChanger': true,
				'pageSizeOptions': ['3', '4', '5'],
				'showQuickJumper': true
			}}  />
		);
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( Sichuan );