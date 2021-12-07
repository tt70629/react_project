import './App.css';
import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from './components/ui/Layout.jsx'
import {HomePage} from './pages/HomePage';
import {PostPage} from './pages/PostPage';

class App extends Component {



    render() {
        return (
            <Layout>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/post" component={PostPage} />
                        </Switch>
                    </div>
                </Router>
            </Layout>
        );
    }
}

export default App;
