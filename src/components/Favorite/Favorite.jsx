import React from 'react';
import CardArea from '../CardComponents/CardArea';



export default function Favorite(props) {

    return (
        <CardArea
            films={props.favoriteFilms}
            moreFilms={() => console.log('no more films!')}
            pathname={props.pathname}
            pageNumber={'0'}
        />
    );
}
