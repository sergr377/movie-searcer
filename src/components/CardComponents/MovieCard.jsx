import React from 'react';
import { Typography, CardActionArea, CardActions, CardContent, CardMedia, Grid, Tooltip } from '@material-ui/core';
import { StyledCard, StyledLinkLight } from '../../style/Styles';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
    typographyName: {
        fontSize: '1.7vh',
        lineHeight: '2.5vh'
    },
    typographyScore: {
        fontSize: '1.8vh',
    },
    typographyDate: {
        fontSize: '1.7vh',
    },
    starIcon: {
        fontSize: '2.4vh',
        marginRight: 5
    },
    cardContent: {
        padding: '0.8vh',
        minHeight: '8vh',
        marginTop: '-0.5vh'
    },
    vote_average: {
        paddingTop: '1vh',
        paddingBottom: 0
    },
    bookmark: {
        marginLeft: 'auto',
        fontSize: '2.7vh',
        cursor: 'pointer'
    },
    bookmarkRed: {
        marginLeft: 'auto',
        color: '#d63031',
        fontSize: '2.7vh',
        cursor: 'pointer'
    },
    cardActionArea: {
        cursor: 'default',
    },
}))

const MovieCard = (props) => {

    const classes = useStyles();

    const releaseDate = () => {
        return props.release_date.slice(0, 4)
    }

    const originalName = () => {
        if (props.original_title.length > 40) {
            return props.original_title.slice(0, 40) + '...'
        } else {
            return props.original_title
        }
    }

    const [count, setCount] = useState(props.isFavorite);

    const toggle = (data) => {
        return count ? () => {
            props.removeFavourites(data)
            setCount(false)
        } : () => {
            props.toFavourites(data)
            setCount(true)
        }
    }

    return (
        <StyledCard >
            <CardActionArea className={classes.cardActionArea} >
                <StyledLinkLight to={'/FilmPage/' + props.id}>
                    <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        alt={props.original_title}
                        title={props.original_title}
                        src={"https://image.tmdb.org/t/p/w220_and_h330_face/" + props.poster_path}
                    />
                </StyledLinkLight>
                <CardActions className={classes.vote_average} >
                    <Grid container direction="row" >
                        <StarIcon className={classes.starIcon} color="action" />
                        <Typography className={classes.typographyScore} variant="body1" color="textSecondary">
                            {props.vote_average ? props.vote_average : 'No score yet'}
                        </Typography>
                        <Tooltip title={count ? "Remove from favorites" : "Add to favorites"}>
                            {count ?
                                <BookmarkIcon className={classes.bookmarkRed} onClick={toggle(props.data)} />
                                : <BookmarkBorderIcon color="action" className={classes.bookmark} onClick={toggle(props.data)} />}
                        </Tooltip>
                    </Grid>
                </CardActions>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.typographyName} gutterBottom display='inline' >
                        {originalName()}
                        <Typography className={classes.typographyDate} variant="body2" color="textSecondary">
                            {' (' + releaseDate() + ')'}
                        </Typography>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </StyledCard>
    )
}

export default MovieCard

