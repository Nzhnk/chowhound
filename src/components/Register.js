import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

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

class Register extends Component {
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
	checkPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('password')) {
			callback('Two passwords that you enter is inconsistent!');
		} else {
			callback();
		}
	}
	checkConfirm = (rule, value, callback) => {
		const form = this.props.form;
		if (value && this.state.confirmDirty) {
			form.validateFields(['confirm'], { force: true });
		}
		callback();
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
		const prefixSelector = getFieldDecorator('prefix', {
			initialValue: '86',
		})(
		<Select className="icp-selector">
		<Option value="86">+86</Option>
		</Select>
		);
		return (
			<Form onSubmit={this.handleSubmit}>
			<FormItem
			{...formItemLayout}
			label="用户名"
			hasFeedback
			>
			{getFieldDecorator('text', {
				rules: [{
					type: 'text', message: '用户名不能为空！',
				}, {
					required: true, message: '请输入用户名',
				}],
			})(
			<Input />
			)}
			</FormItem>
			<FormItem
			{...formItemLayout}
			label="密&emsp;码"
			hasFeedback
			>
			{getFieldDecorator('password', {
				rules: [{
					required: true, message: '请输入密码！',
				}, {
					validator: this.checkConfirm,
				}],
			})(
			<Input type="password" />
			)}
			</FormItem>
			<FormItem
			{...formItemLayout}
			label="确认密码"
			hasFeedback
			>
			{getFieldDecorator('confirm', {
				rules: [{
					required: true, message: '请再次输入密码!',
				}, {
					validator: this.checkPassword,
				}],
			})(
			<Input type="password" onBlur={this.handleConfirmBlur} />
			)}
			</FormItem>
			<FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
			{getFieldDecorator('agreement', {
				valuePropName: 'checked',
			})(
			<Checkbox>我已阅读并且同意 <a>《“吃货”美食城条款》</a></Checkbox>
			)}
			</FormItem>
			<FormItem {...tailFormItemLayout}>
			<Button>返回</Button>
			<Button type="primary" htmlType="submit">提交</Button>
			</FormItem>
			</Form>
		);
	}
}

export default Form.create()(Register);