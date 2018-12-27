import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import { Row, Col, Icon } from 'antd';

class UserCenter extends Component {
    render() {
        return (
            <div className="main-container page-usercenter">
                <Row gutter={45}>
                    <Col span={8}>
                        <div className="fontsize0 bgcolor-white user-card">
                            <div className="textAlignCenter">
                                <img 
                                    className="user-photo marginbottom20"
                                    alt="" 
                                    src='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png' />
                                <p className="fontsize6 font-weight500 usercenter-name">杨美</p>
                                <p>持之以恒</p>
                            </div>
                            <div className="flex-alignstart-justifystart">
                                <Icon type="like" />
                                <p 
                                    className="relative marginleft5" 
                                    style={{bottom: '3px'}}>交互专家</p>
                            </div>
                            <div className="flex-alignstart-justifystart">
                                <Icon type="team" />
                                <p 
                                    className="relative marginleft5" 
                                    style={{bottom: '3px'}}>卓健科技－某某某事业群－某某平台部－某某技术部－UED</p>
                            </div>
                        </div>
                    </Col>
                    <Col span={16}>
                        <div className="bgcolor-white user-about">
                            11111111
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default UserCenter;