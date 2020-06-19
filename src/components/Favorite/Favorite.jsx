import React from 'react';
import CardArea from '../CardComponents/CardArea';



export default function Favorite(props) {

    return (
        <CardArea
            films={props.favoriteFilms}
        />
    );
}
