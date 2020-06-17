import React from 'react';
import MovieCard from './MovieCard';
import { Grid, makeStyles } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    // movieCard: {
    //     width: '25%',
    // },
    control: {
        padding: theme.spacing(2),
    },
}));

const style = {
    display: "grid"
}

export default function CardArea(props) {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();


    const pageNumber = props.pageNumber + 1

    const fetchMoreData = () => {
        props.moreFilms(pageNumber)
    };

    return (
        <div >
            <InfiniteScroll
                style={style}
                dataLength={props.films.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={spacing}>
                            {console.log(props)}
                            {props.films.map((data) => (
                                <Grid key={!data ? '' : data.id} item className={classes.movieCard}>
                                    <MovieCard
                                        id={data.id}
                                        original_title={!data ? '' : data.original_title}
                                        poster_path={!data ? '' : data.poster_path}
                                        vote_average={!data ? '' : data.vote_average}
                                        release_date={!data ? '' : data.release_date}
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
