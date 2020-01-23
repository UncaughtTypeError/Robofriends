import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  root: {
    width: '100%',
    marginTop: '20px',
    height: 'auto',
    padding: '5px 0',
  },
  icon: {
    marginBottom: '10px',
  },
  label: {
    color: 'white',
  },
  tooltip: {
    fontSize: 15,
  },
};

class Footer extends React.Component {

  render() {
    const { classes } = this.props;
    const url = "https://github.com/UncaughtTypeError/Robofriends";

    return (
      <BottomNavigation
        showLabels
        className={classes.root}
      >
        <Tooltip classes={{ tooltip: classes.tooltip }} title="Repo" placement="top">
          <BottomNavigationAction 
            icon={
              <Link href={url} className={classes.link} title='Repo'>
                <FontAwesomeIcon 
                  icon={['fab', 'github']} 
                  size="2x" 
                  color="white" 
                  className={classes.icon} 
                />
              </Link>
            } 
          />
        </Tooltip>
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);