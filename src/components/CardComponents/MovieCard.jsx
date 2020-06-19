import React from 'react';
import { Typography, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Tooltip } from '@material-ui/core';
import { StyledCard, StyledLinkLight } from '../../style/Styles';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import { connect } from 'react-redux';
import { favoriteFilmsAC } from '../../redux/favoriteReducers';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    typography: {
        fontSize: 15,
    },
    cardContent: {
        padding: 6
    },
    starIcon: {
        marginRight: 5
    },
    vote_average: {
        paddingBottom: 0
    },
    bookmark: {
        marginLeft: 'auto',
    },
    bookmarkRed: {
        marginLeft: 'auto',
        color: '#d63031'
    }
    // styledCard: {
    //     width: '100%'
    // },
    // cardMedia: {
    //     width: '50%'
    // }
}))

const MovieCard = (props) => {

    const classes = useStyles();

    const releaseDate = () => {
        return props.release_date.slice(0, 4)
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
        <StyledCard className={classes.styledCard} >
            <CardActionArea>
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
                        <StarIcon className={classes.starIcon} fontSize="small" color="action" />
                        <Typography variant="body1" color="textSecondary">
                            {props.vote_average}
                        </Typography>
                        <Tooltip title="Click to add to favorite">
                            {count ?
                                <BookmarkIcon className={classes.bookmarkRed} onClick={toggle(props.data)} />
                                : <BookmarkBorderIcon color="action" className={classes.bookmark} onClick={toggle(props.data)} />}
                        </Tooltip>
                    </Grid>
                </CardActions>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.typography} gutterBottom >
                        {props.original_title}
                        <Typography variant="body2" color="textSecondary">
                            {' (' + releaseDate() + ')'}
                        </Typography>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </StyledCard>
    )
}


export default MovieCard

