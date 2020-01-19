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
    mediaLoading: {
        display: 'none',
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
            imgLoaded: false,
            imgTimeout: null,
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
            elID.onload = () => {
                this.setState({ imgLoaded: true });  
                //console.log(this.state);
            }
            elID.onerror = (error) => {
                this.setState({ imgUrl: this.state.tempUrl }); 
                console.error(error);
                //throw new Error(error);
            }

        } catch (error) {
            console.error('(network error)',error);
        };

        if(!this.state.imgLoaded) {
            this.setState({imgTimeout: setTimeout(() => { this.forceSetImg() }, 30000)});
        }
    }

    forceSetImg() {
        if(!this.state.imgLoaded) { // img still hasn't loaded after timeout, force state update
            this.setState({ 
                imgLoaded: true,
                imgUrl: this.state.tempUrl,
            });  
            console.error('(timed out)',this.state);
        }
    }

    render() {
        const { classes, name } = this.props;

        return(
            <ErrorBoundryCardMedia name={name} id={this.state.elID}>
                <Tooltip classes={{ tooltip: classes.tooltip }} title={this.state.imgUrl ? name : 'Loading...'} placement="top">
                    <CardMedia
                    component="img"
                    alt={name}
                    className={this.state.imgLoaded ? classes.media : `${classes.media} ${classes.mediaTemp}`}
                    height="350"
                    image={this.state.imgUrl ? this.state.imgUrl : this.state.tempUrl}
                    aria-label={name}
                    id={this.state.elID}
                    />
                </Tooltip>
                { !this.state.imgLoaded ? <CircularProgress className={classes.progress} /> : null}
            </ErrorBoundryCardMedia>
        );
    }

}

CardMediaWrapper.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardMediaWrapper);