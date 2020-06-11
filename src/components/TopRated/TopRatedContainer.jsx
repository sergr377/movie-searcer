import React from 'react';
import TopRated from './TopRated';
import { connect } from 'react-redux';
import { topFilmsAC } from '../../redux/topRatedReducers';
import { usersAPI } from '../../api/api';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';



class TopRatedContainer extends React.Component {

    componentDidMount() {
        usersAPI.getTopRated(1).then(response => {
            this.props.topFilmsAC(response.data);
        });
    }

    moreTopFilms = (number) => {
        usersAPI.getTopRated(number).then(response => {
            this.props.topFilmsAC(response.data);
        });

        console.log(number)
    }

    render() {
        return <>
            <TopRated
                topFilms={this.props.topFilms}
                moreTopFilms={this.moreTopFilms}
                pathname={this.props.location.pathname}
                pageNumber={this.props.pageNumber}
            />
        </>
    }
}

let mapStateToProps = (state) => ({
    topFilms: state.top.topFilms,
    pageNumber: state.top.pageNumber,
})

export default compose(
    connect(mapStateToProps, { topFilmsAC }),
    withRouter
)(TopRatedContainer)
