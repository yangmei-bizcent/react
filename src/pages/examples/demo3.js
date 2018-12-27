import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Demo3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                <h1>哈哈</h1>,
                <h3>哈哈</h3>,
            ]
        }
    }
    render() {
        return (
            <div>
                { this.state.arr }
                { this.props.arrParam }
            </div>
        )
    }
}

Demo3.propTypes = {
    arrParam: PropTypes.array,
}

Demo3.defaultProps = {
    arrParam: [
        '我是子组件自己设置的默认值'
    ]
}

export default Demo3;