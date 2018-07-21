import React from 'react';
import TextFeilds from './components/TextFields.jsx';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'


export default class App extends React.Component{

    render(){
        return (
            <Router>
                <div className="App">
                    <div className="container">
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                            <hr/>
                    {/* Routes will go here */}

                            <Route path="/home" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/login" component={Login} />

                    </div>
                </div>
        </Router>
        );
        //return (<div><TextFeilds/></div>);
    }
}
