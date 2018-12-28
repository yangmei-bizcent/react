import React, { Component } from 'react';
import { Button } from 'antd';

class Demo10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: '初始值'
        }
    }
    changeCompt = () => {
        this.setState({tag: '修改了'});
    }
    componentWillMount() {
        this.setState({
            tag: 'componentWillMount'
        }, () => {
            console.log(this.state.tag);
        });
    }
    componentDidMount() {
        this.setState({
            tag: 'componentDidMount'
        }, () => {
            console.log(this.state.tag);
        });
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true;
    }
    render() {
        return (
            <div>
                <p>{ this.props.name }</p>
                <Button onClick={ this.changeCompt }>修改组件</Button>
            </div>
        )
    }
}

export default Demo10;