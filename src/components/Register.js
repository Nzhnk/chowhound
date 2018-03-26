import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

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

		// 提交注册信息
		fetch( 'api/users/isregister', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( this.props.form.getFieldsValue() )
		} )
		.then( response => response.json() )
		.then( result => {
			if(result.data.isRegister){
				this.props.history.push( '/login' );
			};
		} );
	};
	handleConfirmBlur = (e) => {
		const value = e.target.value;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	}
	checkPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('password')) {
			callback('俩次输入的密码不一致，请重新输入!');
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
	goBackLogin = () => {
		this.props.history.push( '/login' );
	};
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
			label="用户名"
			hasFeedback
			>
			{getFieldDecorator('username', {
				rules: [{
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
			<Button onClick={this.goBackLogin}>返回</Button>
			<Button type="primary" htmlType="submit">提交</Button>
			</FormItem>
			</Form>
		);
	}
}

export default Form.create()(Register);