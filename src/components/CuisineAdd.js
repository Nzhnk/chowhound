import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Upload, message } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const Dragger = Upload.Dragger;

/*const props = {
	name: 'file',
	multiple: false,
	showUploadList: false,
	action: '/api/cuisine/add',
	customRequest(){},
	onChange(info) {
		const status = info.file.status;
		if (status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (status === 'done') {
			message.success(`${info.file.name} 上传成功!`);
		} else if (status === 'error') {
			message.error(`${info.file.name} 上传失败!`);
		}
	},
};
*/
const residences = [{
	value: 'zhejiang',
	label: 'Zhejiang',
	children: [{
		value: 'hangzhou',
		label: 'Hangzhou',
		children: [{
			value: 'xihu',
			label: 'West Lake',
		}],
	}],
}, {
	value: 'jiangsu',
	label: 'Jiangsu',
	children: [{
		value: 'nanjing',
		label: 'Nanjing',
		children: [{
			value: 'zhonghuamen',
			label: 'Zhong Hua Men',
		}],
	}],
}];

class CuisineAdd extends React.Component {
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



	}
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
			<Input type="file" />
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
			<Button type="default">返回</Button>
			<Button type="primary" htmlType="submit">提交</Button>
			</FormItem>
			</Form>
		);
	}
}

export default  Form.create()(CuisineAdd);