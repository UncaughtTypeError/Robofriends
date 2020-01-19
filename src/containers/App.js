import React from 'react';
import { connect } from 'react-redux';
import CardGrid from '../components/CardGrid';
import Header from '../components/Header'
import Footer from '../components/Footer'
import ErrorBoundryCardGrid from '../components/ErrorBoundryCardGrid';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';

// Actions
import { requestRobots } from '../actions';

// Theme Configuration
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

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

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: '10px',
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
};

// define what state to listen to, send down as props
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

// define what actions (props) to listen to, send (or dispatch) to reducer
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { classes, searchField, robots, isPending } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(
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
        <Header />
        <ErrorBoundryCardGrid>
          <CardGrid robots={filteredRobots} /> 
        </ErrorBoundryCardGrid>
        <Footer />
      </MuiThemeProvider>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
