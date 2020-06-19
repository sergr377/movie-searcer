import React from 'react';
import CardArea from '../CardComponents/CardArea';



export default function Newest(props) {
    const a = (data) => console.log(data)
    return (
        <CardArea
            films={props.newFilms}
            moreFilms={props.moreNewFilms}
            pathname={props.pathname}
            pageNumber={props.pageNumber}
         //   setFavorite={props.setFavorite}
        />
    );
}
