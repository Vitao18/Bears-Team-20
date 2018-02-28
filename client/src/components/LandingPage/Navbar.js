/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '10%',
  },
};
const Navbar = props => (
  <React.Fragment>
    <AppBar position="static" color="default">
      <ToolBar className={props.classes.root}>
        <Typography
          className={props.classes.grow}
          variant="title"
          color="inherit"
        >
          MusicHub
        </Typography>
        <Button className={props.classes.grow} color="inherit">Login</Button>
      </ToolBar>
    </AppBar>
  </React.Fragment>
);

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
