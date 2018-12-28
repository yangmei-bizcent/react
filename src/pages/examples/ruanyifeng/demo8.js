import React, { Component } from 'react';
import { Button } from 'antd';
import Demo10 from './demo10.js'

class Demo8 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '张三'
        }
    }
    componentDidMount() {
        console.log(this.state.name);
    }
    changeState = () => {
        this.setState({
            name: '李四'
        }, () => {
            /** setState是异步执行的，设置后，直接在外面获取的话，获取不到新设置的值。
             * 解决方案：
             * 在setState的回调函数中，可以获取新值
             */
            console.log(this.state.name);
        });
    }
    render() {
        return (
            <div>
                <Button onClick={ this.changeState }>改变state</Button>
                <Demo10 name={ this.state.name } />
            </div>
        )
    }
}

export default Demo8;