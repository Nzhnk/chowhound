import React, { Component } from 'react';
import { Form, Input, Icon, Button, Upload } from 'antd';
const FormItem = Form.Item;

/*const success = () => {
  message.success('This is a message of success');
};

const error = () => {
  message.error('This is a message of error');
};

const warning = () => {
  message.warning('This is message of warning');
};
*/
// const props = {
// 	name: 'gourmetPic',
// 	multiple: true,
// 	showUploadList: true,
// 	listType: 'picture',
// 	accept: "image/*",
// 	action: '/api/cuisine/add',
// 	beforeUpload: ( file, fileList ) => {
// 		return false;
// 	}
// };

const props = {
	name: 'gourmetPic',
	listType: 'picture',
	action: '/api/cuisine/add'
	// beforeUpload: ( file, fileList ) => {
	// 	return false;
	// }
};

class CuisineAdd extends Component {
	state = {
		confirmDirty: false,
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
		// 上传数据
		fetch( '/api/cuisine/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( this.props.form.getFieldsValue() )
		} )
		.then( response => response.json() )
		.then( result => {
			if(result){
				console.log(this.props.form.getFieldsValue())
				alert('添加成功!');
				this.props.form.resetFields();
			}
		} )
	};
	handleConfirmBlur = (e) => {
		const value = e.target.value;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 6 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 14 },
			},
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0,
				},
				sm: {
					span: 14,
					offset: 6,
				},
			},
		};
		return (
			<Form onSubmit={this.handleSubmit}>
			<FormItem
			{...formItemLayout}
			label="美食名称"
			hasFeedback
			>
			{getFieldDecorator('gourmetName', {
				rules: [ {
					required: true, message: '请输入美食名称！',
				}],
			})(
			<Input type="text" />
			)}
			</FormItem>
			<FormItem
			{...formItemLayout}
			label="美食图片"
			hasFeedback
			>
			{getFieldDecorator('gourmetPic', {
				rules: [ {
					required: true, message: '请上传美食图片！',
				}],
			})(
			<div>
			<Upload {...props}>
			<Button>
			<Icon type="upload" /> 上传图片
			</Button>
			</Upload>
			</div>
			)}
			</FormItem>
			<FormItem
			{...formItemLayout}
			label="美食地区"
			hasFeedback
			>
			{getFieldDecorator('gourmetArea', {
				rules: [ {
					required: true, message: '请输入美食地区！',
				}],
			})(
			<Input type="text" />
			)}
			</FormItem>
			<FormItem
			{...formItemLayout}
			label="美食做法"
			hasFeedback
			>
			{getFieldDecorator('gourmetPrac', {
				rules: [ {
					required: true, message: '请输入美食做法！',
				}],
			})(
			<Input type="text" />
			)}
			</FormItem>
			<FormItem
			{...formItemLayout}
			label="口味描述"
			hasFeedback
			>
			{getFieldDecorator('tasteDescri', {
				rules: [ {
					required: true, message: '请输入口味描述！',
				}],
			})(
			<Input type="text" />
			)}
			</FormItem>
			<FormItem
			{...formItemLayout}
			label="注意事项"
			hasFeedback
			>
			{getFieldDecorator('mattersAtt', {
				rules: [ {
					required: true, message: '请输入注意事项！',
				}],
			})(
			<Input type="text" />
			)}
			</FormItem>
			<FormItem {...tailFormItemLayout}>
			<Button type="default"><a href="javascript:history.back()">返回</a></Button>
			<Button type="primary" htmlType="submit">提交</Button>
			</FormItem>
			</Form>
		);
	}
}

export default  Form.create()(CuisineAdd);