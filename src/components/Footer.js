import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Link from '@material-ui/core/Link';
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
  }
};

class Footer extends React.Component {

  render() {
    const { classes } = this.props;
    const url = "https://github.com/UncaughtTypeError/";

    return (
      <BottomNavigation
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction 
          label="Repo" 
          icon={
            <Link href={url} className={classes.link}>
              <FontAwesomeIcon 
                icon={['fab', 'github']} 
                size="2x" 
                color="white" 
                className={classes.icon} 
              />
            </Link>
          } 
        />
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);