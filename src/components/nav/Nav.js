import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
// import AppRouter from '../../appRouter'
import 'antd/dist/antd.css';
import './Nav.scss'
const { Header, Content, Footer, Sider } = Layout;

class SiderMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
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
                        <Menu.Item to="/exp1">
                            <Icon type="user" />
                            <span className="nav-text">11111</span>
                        </Menu.Item>
                        {
                            this.props.sideMenuData.map((menuItem, index) => {
                                return (
                                    <Menu.Item to={`${menuItem.path}`} key={index}>
                                        <Icon type="user" />
                                        <span className="nav-text">{menuItem.name}</span>
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

export default SiderMenu;