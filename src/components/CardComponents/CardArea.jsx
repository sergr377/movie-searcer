import React from 'react';
import MovieCard from './MovieCard';
import { Grid, makeStyles } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';
import { toFavouritesAC, removeFavouritesAC } from '../../redux/favoriteReducers';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'center'

    },
    // movieCard: {
    //     width: '25%',
    // },
}));

const style = {
    display: "grid",
}

function CardArea(props) {

    const { toFavourites, removeFavourites } = props

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const pageNumber = props.pageNumber + 1

    const fetchMoreData = () => {
        props.moreFilms(pageNumber)
    };

    const isFavorite = (filmsData, film) => {
        return filmsData.includes(film)
    }

    return (
        <div >
            <InfiniteScroll
                style={style}
                dataLength={props.films.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4></h4>}
                >
                <Grid container className={classes.root}>
                    <Grid item xs={13}>
                        <Grid container justify="center" spacing={spacing}>
                            {props.films.map((data) => (
                                <Grid key={!data ? '' : data.id} item className={classes.movieCard}>
                                    <MovieCard
                                        data={data}
                                        id={data.id}
                                        original_title={!data ? '' : data.original_title}
                                        poster_path={!data ? '' : data.poster_path}
                                        vote_average={!data ? '' : data.vote_average}
                                        release_date={!data ? '' : data.release_date}
                                        toFavourites={toFavourites}
                                        removeFavourites={removeFavourites}
                                        isFavorite={isFavorite(props.favoriteFilms, data.id)}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </InfiniteScroll>
        </div >
    );
}

const mapStateToProps = state => ({
    favoriteFilms: state.favorite.favoriteFilms.map((data) => data.id)
})

export default connect(mapStateToProps, { toFavourites: toFavouritesAC, removeFavourites: removeFavouritesAC })(CardArea)