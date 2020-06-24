import React from 'react';
import Newest from './Newest';
import { connect } from 'react-redux';
import { newFilmsAC } from '../../redux/newestReducers';
import { usersAPI } from '../../api/api';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class NewestContainer extends React.Component {

    componentDidMount() {
        usersAPI.getNewest(1).then(response => {
            this.props.newFilmsAC(response.data);
        });
    }

    moreNewFilms = (number) => {
        usersAPI.getNewest(number).then(response => {
            this.props.newFilmsAC(response.data);
        });
    }

    render() {
        return <>
            <Newest
                newFilms={this.props.newFilms}
                moreNewFilms={this.moreNewFilms}
                pathname={this.props.location.pathname}
                pageNumber={this.props.pageNumber}
            />
        </>
    } 
}

let mapStateToProps = (state) => ({
    newFilms: state.newest.newFilms,
    pageNumber: state.newest.pageNumber,
})

export default compose(
    connect(mapStateToProps, { newFilmsAC }),
    withRouter
)(NewestContainer)