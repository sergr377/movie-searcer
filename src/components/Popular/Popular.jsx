import React from 'react';
import CardArea from '../CardComponents/CardArea';

export default function Popular(props) {

    return (
        <CardArea
            films={props.popularFilms}
            moreFilms={props.morePopularFilms}
            pathname={props.pathname}
            pageNumber={props.pageNumber}
        />
    );
}
