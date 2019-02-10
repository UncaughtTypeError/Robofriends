import React from 'react';
import RoboCard from './RoboCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'tachyons';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: '1500px',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },
  wrapper: {
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class CardGrid extends React.Component {
  state = {
    spacing: '16',
  };

  render() {
    const { classes, robots } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.wrapper} justify="center" spacing={Number(spacing)}>
            {robots.map(robot => (
              <Grid key={robot.id} item>
                <RoboCard 
                  addClasses="robo-card" 
                  id={robot.id} 
                  name={robot.name} 
                  email={robot.email} 
                  about={robot.about}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

CardGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardGrid);