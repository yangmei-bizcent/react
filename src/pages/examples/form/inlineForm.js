import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

class InlineForm extends Component {
    handleSubmit = (e) => {

    }
    render() {
        return (
            <div className="">
                <Form layout="inline" onSubmit={ this.handleSubmit }>
                    <Form.Item>
                        <Input 
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名" />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码" />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit">提交</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default InlineForm;