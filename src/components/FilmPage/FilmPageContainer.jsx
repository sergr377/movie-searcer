import React from 'react';
import { connect } from 'react-redux';
import { newFilmDetalAC } from '../../redux/filmPageReducers';
import { newFilmImagesAC } from '../../redux/filmPageReducers';
import { newCastAC } from '../../redux/filmPageReducers';
import { usersAPI } from '../../api/api';
import FilmPage from './FilmPage';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class FilmPageContainer extends React.Component {

    componentDidMount() {
        usersAPI.getMovie(this.props.match.params.filmId).then(response => {
            this.props.newFilmDetalAC(response);
        });
        usersAPI.getImages(this.props.match.params.filmId).then(response => {
            this.props.newFilmImagesAC(response);
        });
        usersAPI.getCast(this.props.match.params.filmId).then(response => {
            response.cast.splice(6)
            this.props.newCastAC(response);
        });
    }

    render() {
        return <>
            <FilmPage
                {...this.props}
            />
        </>
    }
}

let mapStateToProps = (state) => ({
    film: state.film.filmDetail,
    images: state.film.backdrops,
    cast: state.film.castData,
    crue: state.film.crueData,
})

export default compose(
    connect(mapStateToProps, { newFilmDetalAC, newFilmImagesAC, newCastAC }),
    withRouter
)(FilmPageContainer);

