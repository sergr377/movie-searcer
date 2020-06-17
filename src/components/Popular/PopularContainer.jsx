import React from 'react';
import Popular from './Popular';
import { connect } from 'react-redux';
import { popularFilmsAC } from '../../redux/popularReducers';
import { usersAPI } from '../../api/api';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class PopularContainer extends React.Component {

    componentDidMount() {
        usersAPI.getPopular(1).then(response => {
            this.props.popularFilmsAC(response.data);
        });
    }

    morePopularFilms = (number) => {
        usersAPI.getPopular(number).then(response => {
            this.props.popularFilmsAC(response.data);
        });
    }

    render() {

        return <>
            <Popular
                popularFilms={this.props. popularFilms}
                morePopularFilms={this.morePopularFilms}
                pathname={this.props.location.pathname}
                pageNumber={this.props.pageNumber}
            />
        </>
    }
}

let mapStateToProps = (state) => ({
    popularFilms: state.popular.popularFilms,
    pageNumber: state.popular.pageNumber,
})

export default compose(
    connect(mapStateToProps, { popularFilmsAC }),
    withRouter
)(PopularContainer)