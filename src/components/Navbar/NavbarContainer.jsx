import React from 'react';
import { connect } from 'react-redux';
import { searchMoviesThunkCreator } from '../../redux/searchBarReducers';
import Navbar from './Navbar';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class NavbarContainer extends React.Component {

    componentDidMount() {
        this.props.searchMovies()
    }

    getQuery = (e) => {
        const value = e.target.value.toLowerCase()
        this.props.searchMovies(value)
    }
 
    render() {
        return <>
            <Navbar
                results={this.props.results}
                getQuery={this.getQuery}
                setFilmId={this.props.setFilmId}
            />
        </>
    }
}

let mapStateToProps = (state) => ({
    results: state.search.results,
    setFilmId: state.film.filmId
})

export default compose(
    connect(mapStateToProps, { searchMovies: searchMoviesThunkCreator }),
    withRouter
)(NavbarContainer);
