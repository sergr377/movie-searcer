import React from 'react';
import { Typography, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';
import { StyledCard, StyledLinkLight } from '../../style/Styles';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    typography: {
        fontSize: 15,
    },
    cardContent: {
        padding: 6
    },
    starIcon: {
        marginRight: 5
    }
    // styledCard: {
    //     width: '100%'
    // },
    // cardMedia: {
    //     width: '50%'
    // }
}))

const MovieCard = (props) => {

    const releaseDate = () => {
        return props.release_date.slice(0, 4)
    }

    const classes = useStyles();

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
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.typography} gutterBottom >
                        {props.original_title  } <Typography variant="body2" color="textSecondary">
                            {' (' + releaseDate() + ' )'}
                        </Typography>
                    </Typography>
                    
                    <Grid item xs container direction="row" >
                        <StarIcon className={classes.starIcon} fontSize="small" color="action" />
                        <Typography variant="body2" color="textSecondary">
                            {props.vote_average}
                        </Typography>
                    </Grid>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small">
                    Share
                </Button>
                <Button size="small"s>
                    Learn More
                </Button>
            </CardActions> */}
        </StyledCard>
    )
}

export default MovieCard

