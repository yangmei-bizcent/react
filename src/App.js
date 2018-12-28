import React, { Component } from 'react';
import { Link } from 'react-router'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';
import './components/nav/Nav.scss'
import './App.css'
import './assets/css/global.scss'
import './assets/css/common.scss'
const { Header, Content, Footer, Sider } = Layout;
export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          collapsed: false,
          mode: 'inline',
          sideMenuData: [
            {name: '个人中心', path: 'userCenter'}, 
            {name: '帮助中心', path: 'helpCenter'},
            {name: '关于我们', path: 'aboutUs'}
          ],
      };
  }

  toggle = () => {
      this.setState({
          collapsed: !this.state.collapsed,
      });
  }

  render() {
      return (
          <Layout>
              <Sider
                  trigger={null}
                  collapsible
                  collapsed={this.state.collapsed}
              >
                  {/* <div className="logo" /> */}
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                      {
                          this.state.sideMenuData.map((menuItem, index) => {
                              return (
                                  <Menu.Item key={index}>
                                    <Link to={`${menuItem.path}`}>
                                        <Icon type="user" />
                                        <span className="nav-text">{menuItem.name}</span>
                                    </Link>
                                  </Menu.Item>
                              )
                          })
                      }
                  </Menu>
              </Sider>
              <Layout>
                  <Header style={{ background: '#000', padding: 0 }}>
                      <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>
                          <Icon
                              className="trigger"
                              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                              onClick={this.toggle}
                              style={{cursor: 'pointer'}}
                          />
                      </span>
                      <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>Information Management System</span>
                      <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>
                          {/* <img src={logo} className="App-logo" alt="logo" /> */}
                      </span>
                  </Header>
                  <Content style={{ margin: '0 16px' }}>
                      <Breadcrumb style={{ margin: '12px 0' }}>
                          <Breadcrumb.Item>User</Breadcrumb.Item>
                          <Breadcrumb.Item>Bill</Breadcrumb.Item>
                      </Breadcrumb>
                      <div id='page-container' style={{ padding: 24, background: '#fff', minHeight: 780 }}>
                          {this.props.children}
                      </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>
                      Ant Design ©2016 Created by Ant UED
                  </Footer>
              </Layout>
          </Layout>
      );
  }
}