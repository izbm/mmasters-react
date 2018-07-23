import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Button, Tabs, Tab } from '../../node_modules/@material-ui/core';

import {
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'
const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                React & Material-UI Sample Application
                </Typography>
                <Tabs>
        </Tabs>
            </Toolbar>
        </AppBar>
        <Tab label="Home" component={Link} to="/home"/>
          <Tab label="About" component={Link} to="/about"/>
          <Tab label="Login" component={Link} to="/login"/>
        </div>
    )
}
export default NavBar;