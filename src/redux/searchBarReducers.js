import { usersAPI } from "../api/api";

const GET_SEARCH_FILMS = 'GET_SEARCH_FILMS';

let initialState = {
    results: [null]
}

export const searchReducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_SEARCH_FILMS:
            return {
                ...state,
                results: action.searchData.results
            }
        default: return state
    }
}

export const searchAC = (searchData) => {
    return { type: GET_SEARCH_FILMS, searchData }
}


export const searchMoviesThunkCreator = (query = '') => {
    return (dispatch) => {
        console.log('запрос поиска ушел')
        usersAPI.getSearch(query).then(response => {
            dispatch(searchAC(response.data));
        });
        console.log('запрос поиска прошел')
    }
}

