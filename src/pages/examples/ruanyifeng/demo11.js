import React, { Component } from 'react';

class Demo11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    componentDidMount() {
        
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