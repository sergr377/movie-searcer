import React from 'react';
import { connect } from 'react-redux';
import { newFilmDetalAC } from '../../redux/filmPageReducers';
import { newFilmImagesAC } from '../../redux/filmPageReducers';
import { usersAPI } from '../../api/api';
import FilmPage from './FilmPage';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class FilmPageContainer extends React.Component {

    componentDidMount() {
        console.log('FilmPageContainer запрос ушел')
        usersAPI.getMovie(this.props.match.params.filmId).then(response => {
            this.props.newFilmDetalAC(response);
        });
        usersAPI.getImages(this.props.match.params.filmId).then(response => {
            this.props.newFilmImagesAC(response);
        });
        console.log('FilmPageContainer запрос прошел')


        async function m() {

            let promise = new Promise((resolve, reject) => {

                let filmUrl = this.props.match.params.filmId
                let newFilmUrl = filmUrl

                setInterval(
                    () => {
                        console.log(newFilmUrl)
                        filmUrl === newFilmUrl ? (newFilmUrl = this.props.match.params.filmId) : resolve(newFilmUrl)

                    }
                    , 3000)
            });

            let result = await promise;

            usersAPI.getMovie(result).then(response => {
                this.props.newFilmDetalAC(response);
            });
            usersAPI.getImages(this.props.match.params.filmId).then(response => {
                this.props.newFilmImagesAC(response);
            });
        }

        let f = m.bind(this)

        f();
        console.log(this.props)
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
    images: state.film.backdrops
})

export default compose(
    connect(mapStateToProps, { newFilmDetalAC, newFilmImagesAC }),
    withRouter
)(FilmPageContainer);

