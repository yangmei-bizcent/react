import React, { Component } from 'react';
// import { getDemo11DataApi } from '../../../service/api'

class Demo11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    componentDidMount() {
        // getDemo11DataApi().then((res) => {
        //     console.log('demo11数据：', res);
        // });
    }
    render() {
        return (
            <div>
                <h2>{ this.state.name }</h2>
            </div>
        )
    }
}

export default Demo11;