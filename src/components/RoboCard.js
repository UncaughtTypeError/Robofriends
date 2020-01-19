import React from 'react';
import DialogueBox from '../containers/DialogueBox';
import CardMedia from '../components/CardMedia';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = {
  card: {
    minWidth: 300,
    minHeight: 350,
  },
};

class RoboCard extends React.Component {

  render() {
    const { classes, name, email, about, id } = this.props;

    return(
      <Card className={classes.card} id={`robo${id}`}>
        <CardActionArea>
          <CardMedia name={name} id={id} />
          <Divider />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography component="p">
              {email}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <DialogueBox name={name}>
            <Typography gutterBottom>
              {about}
            </Typography>
          </DialogueBox>
        </CardActions>
      </Card>
    );
  }

}

RoboCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoboCard);