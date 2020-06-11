import React from 'react';
import { Typography, Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { StyledCard, StyledLinkLight } from '../../style/Styles';



const MovieCard = (props) => {

    return (
        <StyledCard >
            <CardActionArea>
                <StyledLinkLight to={'/FilmPage/' + props.id}>
                    <CardMedia
                        component="img"
                        alt={props.original_title}
                        title={props.original_title}
                        src={"https://image.tmdb.org/t/p/w220_and_h330_face/" + props.poster_path}
                    />
                </StyledLinkLight>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.original_title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small">
                    Share
                </Button>
                <Button size="small"s>
                    Learn More
                </Button>
            </CardActions>
        </StyledCard>
    )
}

export default MovieCard

