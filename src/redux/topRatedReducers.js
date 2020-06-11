
const GET_TOP_FILMS = 'GET_TOP_FILMS';

let initialState = {
    topFilms: [],
    pageNumber: -1
};

const topRatedReducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_TOP_FILMS:
            return {
                ...state,
                topFilms: state.topFilms.concat(...action.topFilmsData.results),
                pageNumber: action.topFilmsData.page
            }
        default: return state
    }
}

export const topFilmsAC = (topFilmsData) => {
    return { type: GET_TOP_FILMS, topFilmsData }
}

export default topRatedReducers
