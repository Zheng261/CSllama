import React from 'react';
import PropTypes from 'prop-types';
import { withStyles,  withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import Theme from './UITheme.js'

import {MuiThemeProvider} from '@material-ui/core/styles';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
 
};

const imageStyle = {
  	height: 60,
  	width: 200,
  	marginLeft: 20,
  	marginRight: 20
}



function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={Theme}>
    <div className={classes.root} class="toolBar">
      <AppBar position="sticky">
        <Toolbar position="sticky">
          <Link to="/"><img src = "https://imgur.com/H0iCVaf.jpg" style={imageStyle}></img></Link>

          <Typography variant="h5" color="inherit" className={classes.grow}>
            <span class="LogoText">CSllama : Math Made Easy</span>
          </Typography>
          <Link to="/"><Button color="inherit"><span class="TBText">Home</span></Button></Link>
          <Link to="/cs109"><Button color="inherit"><span class="TBText">CS109</span></Button></Link>
          <Link to="/about"><Button color="inherit"><span class = "TBText">About Me</span></Button></Link>
          <Link to="/faq"><Button color="inherit"><span class = "TBText">FAQ</span></Button></Link>
          <Link to="/contact"><Button color="inherit"><span class = "TBText">Contact</span></Button></Link>
        </Toolbar>
      </AppBar>
    </div>
    </MuiThemeProvider>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(ButtonAppBar));