
const GET_NEWEST_FILMS = 'GET_NEWEST_FILMS';

let initialState = {
    newFilms: [],
    pageNumber: -1
};

export const newestReducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_NEWEST_FILMS:
            return {
                ...state,
                newFilms: state.newFilms.concat(...action.newFilmsData.results),
                pageNumber: action.newFilmsData.page
            }
        default: return state
    }
}

export const newFilmsAC = (newFilmsData) => {
    return { type: GET_NEWEST_FILMS, newFilmsData }
}

export default newestReducers
