import React from 'react';
import { connect } from 'react-redux';
import CardGrid from '../components/CardGrid';
import Footer from '../components/Footer'
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
import { robots } from '../utils/robots';

// Actions
import { setSearchField, requestRobots } from '../actions';

// Header Component Dependencies
import SearchBox from '../components/SearchBox';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Theme Configuration
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// FontAwesome global library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, fas)

// define what state to listen to, send down as props
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

// define what actions (props) to listent to, send (or dispatch) to reducer
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: { useNextVariants: true },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '10px',
  },
  positionFixed: {
    marginBottom: '120px',
  },
  grow: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  title: {
    display: 'none',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      marginRight: '20px',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  progress: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
    top: 0,
    bottom: 0,
    zIndex: 1,    
    color: '#6f6f6f',
  },
});

class App extends React.Component {

  /*
  constructor() { // state replaced by Redux
    super();
    
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  */

  componentDidMount() {
    //console.log(this.props.store.getState());

    /*
    fetch('https://my-json-server.typicode.com/UncaughtTypeError/MyJasonServer/robots')
      .then(response => response.json())
      .then(robotsObj => this.setState({ robots: robotsObj }))
      .catch(error => {
        this.setState({ robots: robots });
        console.error('Error:',error);
      });
    */

    this.props.onRequestRobots();
  }

  /* passed down as props by mapStateToProps, no longer necessary to declare as method of App
  onSearchChange = (event) => { 
    this.setState({ searchfield: event.target.value });
  }
  */

  render() {
    const { classes } = this.props;
    // const { robots , searchfield } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(
          // searchfield.toLowerCase() // no longer a state of the App
          searchField.toLowerCase()
        );
    });

    return isPending ?
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <CircularProgress className={classes.progress} />
      </MuiThemeProvider> 
      :
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={`${classes.root} ${classes.positionFixed}`}>
          {/* TODO: use Header component instead*/}
          <AppBar position="fixed" color="default">
            <Toolbar>
              <Typography className={`${classes.title} robo-title`} variant="h1" color="inherit" noWrap>
                RoboFriends
              </Typography>
              <div className={classes.grow} />
              <SearchBox searchChange={
                // this.onSearchChange // no longer a method of App
                  onSearchChange 
                } 
              />
            </Toolbar>
          </AppBar>
        </div>
        <CardGrid robots={filteredRobots} /> 
        <Footer />
      </MuiThemeProvider>
    }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
