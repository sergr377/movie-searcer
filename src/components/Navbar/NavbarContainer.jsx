import React from 'react';
import { connect } from 'react-redux';
import { searchMoviesThunkCreator } from '../../redux/searchBarReducers';
import Navbar from './Navbar';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { usersAPI } from '../../api/api';
import { newFilmDetalAC, newFilmImagesAC, newCastAC } from '../../redux/filmPageReducers';



class NavbarContainer extends React.Component {

    componentDidMount() {
        this.props.searchMovies()
        console.log("test")
    }

    getQuery = (e) => {
        const value = e.target.value.toLowerCase()
        this.props.searchMovies(value)
    }

    setFilm = (e) => {
        const searchFilmId = e.currentTarget.id
        usersAPI.getMovie(searchFilmId).then(response => {
            this.props.newFilmDetalAC(response);
        });
        usersAPI.getImages(searchFilmId).then(response => {
            this.props.newFilmImagesAC(response);
        });
        usersAPI.getCast(searchFilmId).then(response => {
            response.cast.splice(6)
            this.props.newCastAC(response);
        });
    }

    render() {
        return <>
            <Navbar
                results={this.props.results}
                getQuery={this.getQuery}
                setFilmId={this.setFilm}
            />
        </>
    }
}

let mapStateToProps = (state) => ({
    results: state.search.results
})

export default compose(
    connect(mapStateToProps, { searchMovies: searchMoviesThunkCreator, newFilmDetalAC, newFilmImagesAC, newCastAC }),
    withRouter
)(NavbarContainer);
