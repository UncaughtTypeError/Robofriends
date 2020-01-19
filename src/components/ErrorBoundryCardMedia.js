import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
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
};

class ErrorBoundryCardMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            tempUrl: 'https://robohash.org/1?300x350',
        }
    }

    componentDidCatch(error, info) {
        console.error(error, info);
        this.setState({ hasError: true });
    }

    render() {
        const { classes, name } = this.props;

        if(this.state.hasError) {
            return (
                <CardMedia
                component="img"
                alt={name}
                className={`${classes.media} ${classes.mediaTemp}`}
                height="350"
                image={this.state.tempUrl}
                aria-label={name}
                />
            )
        }
        return this.props.children;
    }
}

export default withStyles(styles)(ErrorBoundryCardMedia);
