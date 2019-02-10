import React from 'react';
import './RoboCard.css';
import DialogueBox from '../containers/DialogueBox';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  card: {
    maxWidth: 300,
  },
  tooltip: {
    fontSize: 15,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    minWidth: 300,
    zIndex: 2,
    position: 'relative',
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

class RoboCard extends React.Component {

  render() {
    const { classes, addClasses, name, email, about, id } = this.props;
    const imgID = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

    return(
      <Card className={classes.card + addClasses} id={`robo${id}`}>
        <CardActionArea>
          <CircularProgress className={classes.progress} />
          <Tooltip classes={{ tooltip: classes.tooltip }} title={`Contemplative Rando Robo-${id}`} placement="top">
            <CardMedia
              component="img"
              alt="Contemplative Robo"
              className={classes.media}
              height="350"
              image={`https://robohash.org/${imgID}?300x350`}
              aria-label={`Contemplative Robo-${id}`}
            />
          </Tooltip>
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
          <Button size="small" color="default">
            Share
          </Button>
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