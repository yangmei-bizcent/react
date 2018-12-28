import React, { Component} from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './App';
import UserCenter from './pages/userCenter/userCenter'
import AboutUs from './pages/aboutUs/aboutUs'
import HelpCenter from './pages/helpCenter/helpCenter'
import Demo3 from './pages/examples/ruanyifeng/demo3'
import Demo4 from './pages/examples/ruanyifeng/demo4'
import Demo7 from './pages/examples/ruanyifeng/demo7'
import Demo8 from './pages/examples/ruanyifeng/demo8'
import Demo10 from './pages/examples/ruanyifeng/demo10'
import Demo11 from './pages/examples/ruanyifeng/demo11'
import InlineForm from './pages/examples/form/inlineForm'

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
                    <Route path="demo8" component={ Demo8 }></Route>
                    <Route path="demo10" component={ Demo10 }></Route>
                    <Route path="demo11" component={ Demo11 }></Route>

                    {/* 表单 */}
                    <Route path="inlineForm" component={ InlineForm }></Route>

                </Route>
            </Router>
        )
    }
}