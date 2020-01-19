import React from 'react';
import ErrorBoundryCardMedia from '../components/ErrorBoundryCardMedia';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
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

class CardMediaWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgUrl: null,
      tempUrl: `https://robohash.org/${this.props.id}?300x350`,
      elID: 'CardMediaWrapper'+this.props.id,
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

      let elID = document.getElementById(this.state.elID);
      elID.onerror = (error) => {
        console.error(error);
        throw new Error(error);
      }

    } catch (error) {
      console.error('(network error)',error);
    };

  }

  render() {
    const { classes, name } = this.props;
    
    let Media = () => {
      if(this.state.imgUrl) {
          return (
            <Tooltip classes={{ tooltip: classes.tooltip }} title={name} placement="top">
              <CardMedia
                component="img"
                alt={name}
                className={classes.media}
                height="350"
                image={this.state.imgUrl}
                aria-label={name}
                id={this.state.elID}
              />
            </Tooltip>
          )
      } else {
        return (
          <React.Fragment>
            <CardMedia
              component="img"
              alt={name}
              className={`${classes.media} ${classes.mediaTemp}`}
              height="350"
              image={this.state.tempUrl}
              aria-label={name}
              id={this.state.elID}
            />
            <CircularProgress className={classes.progress} />
          </React.Fragment>
        )
      }
    }

    return(
        <ErrorBoundryCardMedia name={name} id={this.state.elID}>
            <Media />
        </ErrorBoundryCardMedia>
    );
  }

}

CardMediaWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardMediaWrapper);