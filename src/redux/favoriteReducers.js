
const SAVE_FILM = 'SAVE_FILM'
const REMOVE_FILM = 'REMOVE_FILM'

const checkingLocalStorage = () => {
    let favoriteFilms = []
    let keys = Object.keys(localStorage);
    for (let key of keys) {
        favoriteFilms.push(JSON.parse(localStorage.getItem(key)))
    }
    return favoriteFilms
}

let initialState = {
    favoriteFilms: checkingLocalStorage(),
};

const favoriteReducers = (state = initialState, action) => {

    switch (action.type) {
        case SAVE_FILM:
            return {
                ...state,
                favoriteFilms: state.favoriteFilms.concat(action.filmData)
            }
        case REMOVE_FILM:
            return {
                ...state,
                favoriteFilms: action.filteredFilms
            }
        default: return state
    }
}

// return {
//     ...state,
//     storeItem: Object.keys(state.storeItem)
//       .filter(item => item !== action.payload.key.toString())
//       .reduce((object, item) => ({...object, [item]: state.storeItem[item]}), {})
//   } 

export const toFavouritesAC = (filmData) => {
    const filmId = JSON.stringify(filmData.id)
    const serializedFilm = JSON.stringify(filmData)
    localStorage.setItem(filmId, serializedFilm)
    return { type: SAVE_FILM, filmData }
}


export const removeFavouritesAC = (filmData) => {
    localStorage.removeItem(filmData.id)
    const filteredFilms = checkingLocalStorage()
    return { type: REMOVE_FILM, filteredFilms }
}
export default favoriteReducers
