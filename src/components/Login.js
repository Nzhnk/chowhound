import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;

const info = () => {
	message.info( '登录成功！' );
};

class Login extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields(( err, values ) => {
			if ( !err ) {
				console.log( 'Received values of form: ', values );
			}
		});

		fetch( '/api/users/loginstate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( this.props.form.getFieldsValue() )
		})
		.then( ( response ) => {
			return response.json();
		})
		.then( ( result ) => {
			console.log(result)
			if( result.data.loginState ){
				this.props.history.push( '/home' );
			}
		})
	};
	onRegister = ( e ) => {
		this.props.history.push( '/register' );
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="loginWrap">
				<Form onSubmit={this.handleSubmit} className="login-form">
				<FormItem>
				{getFieldDecorator('username', {
					rules: [{ required: true, message: '请输入用户名!' }],
				})(
					<Input prefix={<Icon type="user" style={{ fontSize: 14 }} />} placeholder="请输入用户名" />
				)}
				</FormItem>
				<FormItem>
				{getFieldDecorator('password', {
					rules: [{ required: true, message: '请输入密码!' }],
				})(
					<Input prefix={<Icon type="lock" style={{ fontSize: 14 }} />} type="password" placeholder="请输入密码" />
				)}
				</FormItem>
				<FormItem>
				{getFieldDecorator('remember', {
					valuePropName: 'checked',
					initialValue: false,
				})(
				<Checkbox>记住密码</Checkbox>
				)}
				<a className="login-form-forgot">忘记密码</a>
				<div>
					<Button onClick={this.onRegister}>注册</Button>
					<Button type="primary" htmlType="submit" className="login-form-button" onClick={info}>
					登录
					</Button>
				</div>
				</FormItem>
				</Form>
			</div>
		);
	}
}


export default Form.create()(Login);