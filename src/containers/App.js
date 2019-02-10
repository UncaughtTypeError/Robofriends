import React from 'react';
import './App.css';
import { robots } from '../utils/robots';
import CardGrid from '../components/CardGrid';
import Footer from '../components/Footer'
import CircularProgress from '@material-ui/core/CircularProgress';
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
  constructor() {
    super();
    
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/UncaughtTypeError/MyJasonServer/robots')
      .then(response => response.json())
      .then(robotsObj => this.setState({ robots: robotsObj }))
      .catch(function onError(error) {
        this.setState({ robots: robots });
        console.error('Error:',error);
      });
  }

  onSearchChange = (event) => { 
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { classes } = this.props;
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ?
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
              <SearchBox searchChange={this.onSearchChange} />
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

export default withStyles(styles)(App);
