
const GET_POPULAR_FILMS = 'GET_POPULAR_FILMS';

let initialState = {
    popularFilms: [],
    pageNumber: -1
};

export const popularReducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_POPULAR_FILMS:
            return {
                ...state,
                popularFilms: state.popularFilms.concat(...action.popularFilmsData.results),
                pageNumber: action.popularFilmsData.page
            }
        default: return state
    }
}

export const popularFilmsAC = (popularFilmsData) => {
    return { type: GET_POPULAR_FILMS, popularFilmsData }
}

export default popularReducers
