import React from 'react';
import Favorite from './Favorite';
import { connect } from 'react-redux';



class FavoriteContainer extends React.Component {

    render() {

        return <>
            <Favorite
                favoriteFilms={Object.values(this.props.favoriteFilms)}
            />
        </>
    }
}

let mapStateToProps = (state) => ({
    favoriteFilms: state.favorite.favoriteFilms,
})

export default connect(mapStateToProps)(FavoriteContainer)
