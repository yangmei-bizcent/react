import React, { Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, History, IndexRoute, hashHistory} from 'react-router';
import App from './App';
import UserCenter from './pages/userCenter/userCenter'
import AboutUs from './pages/aboutUs/aboutUs'
import HelpCenter from './pages/helpCenter/helpCenter'
import Demo3 from './pages/examples/demo3'
import Demo4 from './pages/examples/demo4'
import Demo7 from './pages/examples/demo7'

export default class AppRouter extends Component {
    render () {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={ App }>
                    <IndexRoute component={ UserCenter } />
                    <Route path="userCenter" component={ UserCenter }></Route>
                    <Route path="aboutUs" component={ AboutUs }></Route>
                    <Route path="helpCenter" component={ HelpCenter }></Route>

                    {/* 阮一峰教程实例 */}
                    <Route path="demo3" component={ Demo3 }></Route>
                    <Route path="demo4" component={ Demo4 }></Route>
                    <Route path="demo7" component={ Demo7 }></Route>
                </Route>
            </Router>
        )
    }
}