import React from 'react';
import { connect } from 'react-redux';
import SearchBox from './SearchBox';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Actions
import { setSearchField } from '../actions';

const styles = theme => ({
  positionFixed: {
    marginBottom: '125px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '135px',
    },
  },
  toolbar: {
    [theme.breakpoints.down('xs')]: {
      flexFlow: 'column',
      alignItems: 'stretch',
    },
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
  },
});

// define what state to listen to, send down as props
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField
  }
}

// define what actions (props) to listen to, send (or dispatch) to reducer
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class Header extends React.Component {

  render() {
    const { classes, onSearchChange, } = this.props;
    console.log({classes});

    return (
      <div className={classes.positionFixed}>
        <AppBar position="fixed" color="default">
          <Toolbar className={classes.toolbar}>
            <Typography className={`${classes.title} robo-title`} variant="h1" color="inherit" noWrap>
              RoboFriends
            </Typography>
            <div className={classes.grow} />
            <SearchBox searchChange={onSearchChange} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));