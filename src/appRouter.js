import React, { Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, History, IndexRoute, hashHistory} from 'react-router';
import App from './App';
import UserCenter from './pages/userCenter/userCenter'
import AboutUs from './pages/aboutUs/aboutUs'
import HelpCenter from './pages/helpCenter/helpCenter'

export default class AppRouter extends Component {
    render () {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={UserCenter} />
                    <Route path="userCenter" component={UserCenter}></Route>
                    <Route path="aboutUs" component={AboutUs}></Route>
                    <Route path="helpCenter" component={HelpCenter}></Route>
                </Route>
            </Router>
        )
    }
}