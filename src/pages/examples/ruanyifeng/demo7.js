import React, { Component } from 'react';
import { Input, Button } from 'antd';

class Demo7 extends Component {
    // 获取焦点
    focusInput = () => {
        this.refs.myInput.focus();
    }
    // 输入框内容变化
    inputChange = (e) => {
        console.log(e.target.value);
    }
    // 提交表单
    submitForm = () => {

    }
    render() {
        return (
            <div>
                <Input 
                    ref="myInput"
                    style={{width: '300px'}}
                    placeholder="Basic usage"
                    onChange={ this.inputChange } />
                <Button 
                    type="primary" 
                    className="marginleft15"
                    onClick={ this.focusInput }>输入框获取焦点</Button>
                <Button 
                    type="primary" 
                    className="marginleft15"
                    onClick={ this.submitForm }>提交表单</Button>
            </div>
        )
    }
}


export default Demo7;