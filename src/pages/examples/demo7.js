import React, { Component } from 'react';
import { Input, Button } from 'antd';

class Demo7 extends Component {
    constructor(props) {
        super(props);
        this.focusInput = this.focusInput.bind(this)
    }
    focusInput() {
        this.refs.myInput.focus();
    }
    render() {
        return (
            <div>
                <Input 
                    ref="myInput"
                    style={{width: '300px'}}
                    placeholder="Basic usage" />
                <Button 
                    type="primary" 
                    className="marginleft15"
                    onClick={ this.focusInput }>输入框获取焦点</Button>
            </div>
        )
    }
}


export default Demo7;