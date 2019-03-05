import React, { Component } from 'react';
import { Input, Button } from 'antd';

// 两种方法使用事件

class Demo7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input2Value: ''
        }
    }
    // 获取焦点
    focusInput() {
        this.refs.myInput1.focus();
    }
    // 输入框内容变化
    inputChange = (e) => {
        console.log(e.target.value);
    }
    input2Change(e) {
        this.setState({ input2Value: e.target.value });
        console.log(this.state.input2Value);
    }
    // 提交表单
    submitForm = (e) => {
        console.log('尝试提交表单');
        e.preventDefault();
        console.log('开始执行验证');
    }
    render() {
        return (
            <div>
                <form onSubmit={ this.submitForm }>
                    {/* 事件绑定推荐使用这种：属性初始化器方法 */}
                    <Input 
                        ref="myInput1"
                        style={{width: '300px'}}
                        placeholder="Basic usage"
                        onChange={ this.inputChange } />
                    <Input 
                        ref="myInput2"
                        value={this.state.input2Value}
                        style={{width: '300px'}}
                        placeholder="Basic usage"
                        onChange={ (e) => { this.input2Change(e) }} />
                    <Button 
                        type="primary" 
                        className="marginleft15"
                        onClick={(e) => { this.focusInput(e) }}>输入框获取焦点</Button>
                    <Button 
                        type="primary" 
                        htmlType="submit"
                        className="marginleft15">提交表单</Button>
                </form>
            </div>
        )
    }
}


export default Demo7;