import React from 'react';
import DialogueBox from '../containers/DialogueBox';
import ErrorBoundryCardMedia from '../components/ErrorBoundryCardMedia';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  card: {
    minWidth: 300,
    minHeight: 350,
  },
  tooltip: {
    fontSize: 15,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    minWidth: 300,
    minHeight: 350,
    zIndex: 2,
    position: 'relative',
  },
  mediaTemp: {
    opacity: '.2',
    filter: 'grayscale(1)',
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

  constructor(props) {
    super(props);
    this.state = {
      imgUrl: null,
      tempUrl: 'https://robohash.org/1?300x350',
    }
  }

  async componentDidMount() {    

    let imgID = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

    try {
      const response = await fetch(`https://robohash.org/${imgID}?300x350`);
      if (!response.ok) {
        console.error('(http error)',response.statusText);
      } 
      const url = await response.url; 
      this.setState({ imgUrl: url });  
    } catch (error) {
      console.error('(network error)',error);
    }

  }

  render() {
    const { classes, name, email, about, id } = this.props;

    return(
      <Card className={classes.card} id={`robo${id}`}>
        <CardActionArea>
          <ErrorBoundryCardMedia name={name}>
            { this.state.imgUrl ? 
              <Tooltip classes={{ tooltip: classes.tooltip }} title={name} placement="top">
                <CardMedia
                  component="img"
                  alt={name}
                  className={classes.media}
                  height="350"
                  image={this.state.imgUrl}
                  aria-label={name}
                />
              </Tooltip>
              :
              <React.Fragment>
                <CardMedia
                  component="img"
                  alt={name}
                  className={`${classes.media} ${classes.mediaTemp}`}
                  height="350"
                  image={this.state.tempUrl}
                  aria-label={name}
                />
                <CircularProgress className={classes.progress} />
              </React.Fragment>
            }
          </ErrorBoundryCardMedia>
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