import React from 'react';
import TextFeilds from './components/TextFields.jsx';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import NavBar from './components/NavBar.jsx';

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
                    <NavBar />
                           
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
