import React from 'react';
import CardArea from '../CardComponents/CardArea';



export default function TopRated(props) {

    return (
        <CardArea
            films={props.topFilms}
            moreFilms={props.moreTopFilms}
            pathname={props.pathname}
            pageNumber={props.pageNumber}
        />
    );
}
