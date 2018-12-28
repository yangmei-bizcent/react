import React, { Component } from 'react';
import Demo3 from './demo3'

class Demo4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrParam: [
                <h1>我是从父组件传过来的</h1>,
                <h3>我也是从父组件传过来的</h3>
            ]
        }
    }

    render() {
        return (
            <div>
                <Demo3 arrParam={ this.state.arrParam } />
                <Demo3 />
            </div>
        )
    }
}

export default Demo4;