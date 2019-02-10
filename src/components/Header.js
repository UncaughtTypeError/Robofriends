import React from 'react';
import SearchBox from './SearchBox';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '10px',
  },
  positionFixed: {
    marginBottom: '70px',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});

class Header extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={`${classes.root} ${classes.positionFixed}`}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              RoboFriends
            </Typography>
            <div className={classes.grow} />
            <SearchBox searchChange={this.onSearchChange} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);