import React from 'react';
import CardArea from '../CardComponents/CardArea';

export default function Newest(props) {

    return (
        <CardArea
            films={props.newFilms}
            moreFilms={props.moreNewFilms}
            pathname={props.pathname}
            pageNumber={props.pageNumber}
        />
    );
}
