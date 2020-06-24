
const GET_FILM_DETAL = 'GET_FILM_DETAL';
const GET_FILM_IMAGES = 'GET_FILM_IMAGES';
const GET_CAST = 'GET_CAST';

let initialState = {
    filmDetail: {
        "adult": false,
        "backdrop_path": "",
        "belongs_to_collection": null,
        "budget": "",
        "genres": [
            {
                "id": "",
                "name": "",
            },
        ],
        "homepage": "",
        "id": "",
        "imdb_id": "",
        "original_language": "",
        "original_title": "",
        "overview": "",
        "popularity": "",
        "poster_path": "",
        "production_companies": [
            {
                "id": "",
                "logo_path": "",
                "name": "",
                "origin_country": "",
            }
        ],
        "production_countries": [
            {
                "iso_3166_1": "",
                "name": "",
            }
        ],
        "release_date": "",
        "revenue": "",
        "runtime": "",
        "spoken_languages": [
            {
                "iso_639_1": "",
                "name": "",
            }
        ],
        "status": "",
        "tagline": "",
        "title": "",
        "video": false,
        "vote_average": "",
        "vote_count": "",
    },
    backdrops: [{
        '':''
    }
    ],
    castData: [],
    crueData: []
}

export const filmPageReducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_FILM_DETAL:
            return {
                ...state,
                filmDetail: action.FilmDetal
            }
        case GET_FILM_IMAGES:
            return {
                ...state,
                backdrops: action.FilmImages
            }
        case GET_CAST:
            return {
                ...state,
                castData: action.FilmCast.cast,
                crueData: action.FilmCast.crew
            }
        default: return state
    }

}

export const newFilmDetalAC = (FilmDetal) => {
    return { type: GET_FILM_DETAL, FilmDetal }
}
export const newFilmImagesAC = (FilmImages) => {
    return { type: GET_FILM_IMAGES, FilmImages }
}
export const newCastAC = (FilmCast) => {
    return { type: GET_CAST, FilmCast }
}

