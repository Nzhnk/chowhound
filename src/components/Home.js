import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

import Welcome from './Welcome.js';
import Sichuan from './Sichuan.js';
import Guangdong from './Guangdong.js';

import CuizineAdd from './CuisineAdd.js';
import CuizineEdit from './CuisineEdit.js';
import Jiangsu from './Jiangsu.js';
import Shandong from './Shandong.js';

import '../styles/App.css';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Home extends Component {
	constructor(props){
		super(props);
	};
	state = {
		collapsed: false,
		mode: 'inline',
	};
	onCollapse = (collapsed) => {
		this.setState({
			collapsed,
			mode: collapsed ? 'vertical' : 'inline',
		});
	};
	render() {
		return (
			<Layout>
				<Sider
				 collapsible
				 collapsed={this.state.collapsed}
				 onCollapse={this.onCollapse}
				>
					<div className="logo"></div>
					<Menu
					 theme="dark"
					 mode={this.state.mode}
					 defaultSelectedKeys={['6']}
					>
						<Menu.Item key="1"><NavLink to='/home'  exact><Icon type="home" />主页</NavLink></Menu.Item>
						<SubMenu
						 key="sub1"
						 title={<span><Icon type="bars" /><span className="nav-text">菜系分类</span></span>}
						>
							<Menu.Item key="2"><NavLink to='/home/sichuan'  exact>川菜</NavLink></Menu.Item>
							<Menu.Item key="3"><NavLink to='/home/shandong' exact>鲁菜</NavLink></Menu.Item>
							<Menu.Item key="4"><NavLink to='/home/guangdong' exact>粤菜</NavLink></Menu.Item>
							<Menu.Item key="5"><NavLink to='/home/jiangsu' exact>苏菜</NavLink></Menu.Item>
							<Menu.Item key="6"><NavLink to='/home/zhejiang' exact>浙菜</NavLink></Menu.Item>
							<Menu.Item key="7"><NavLink to='/home/fujian' exact>闽菜</NavLink></Menu.Item>
							<Menu.Item key="8"><NavLink to='/home/hunan' exact>湘菜</NavLink></Menu.Item>
							<Menu.Item key="9"><NavLink to='/home/anhui' exact>徽菜</NavLink></Menu.Item>
						</SubMenu>
						<Menu.Item key="10"><NavLink to='/home/add'  exact><Icon type="file-add" />添加</NavLink></Menu.Item>
						<SubMenu
						 key="sub2"
						 title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}
						>
							<Menu.Item key="11">Team 1</Menu.Item>
							<Menu.Item key="12">Team 2</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }} />
					<Content style={{ margin: '0 16px' }}>
						<Welcome/>
						<Switch>
							<Route path='/home/sichuan' exact component={ Sichuan }></Route>
							<Route path='/home/guangdong' exact component={ Guangdong }></Route>

							<Route path='/home/add' exact component={ CuizineAdd }></Route>
							<Route path='/home/edit/:cuisineID' exact component={ CuizineEdit }></Route>
							<Route path='/home/jiangsu' exact component={ Jiangsu }></Route>
							<Route path='/home/shandong' exact component={ Shandong }></Route>
						</Switch>
					</Content>
					<Footer style={{ textAlign: 'center' }}>吃货美食城 ©2018 Created by 好程序员5班角落一组</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default Home;