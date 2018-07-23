import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });

  class Login extends React.Component{
    constructor(props){
        super(props);
        
        // initialize
        this.state = {username: ''};

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleUsernameChange(user){
       // this.setState({username: user});
    }
    render(){
        const { classes } = this.props;

        return (<div>
                <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="name"
                    label="User"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleUsernameChange('name')}
                    margin="normal"
                />

                       <TextField
                        id="password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        />
                </form>
            </div>);
    }
}

export default withStyles(styles)(Login);