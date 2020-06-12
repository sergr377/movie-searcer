
const GET_FILM_DETAL = 'GET_FILM_DETAL';
const GET_FILM_IMAGES = 'GET_FILM_IMAGES';
const GET_CAST = 'GET_CAST';

let initialState = {
    filmDetail: {
        "adult": false,
        "backdrop_path": "/cis8NS6598onNKaOevnx1ZarydW.jpg",
        "belongs_to_collection": null,
        "budget": 839727,
        "genres": [
            {
                "id": 9648,
                "name": "Mystery"
            },
            {
                "id": 18,
                "name": "Drama"
            }
        ],
        "homepage": "",
        "id": 15,
        "imdb_id": "tt0033467",
        "original_language": "en",
        "original_title": "Citizen Kane",
        "overview": "Newspaper magnate, Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event.",
        "popularity": 18.896,
        "poster_path": "/sav0jxhqiH0bPr2vZFU0Kjt2nZL.jpg",
        "production_companies": [
            {
                "id": 6,
                "logo_path": "/n53F7K9scQWFXYbrCablqLKqJdp.png",
                "name": "RKO Radio Pictures",
                "origin_country": "US"
            },
            {
                "id": 11447,
                "logo_path": null,
                "name": "Mercury Productions",
                "origin_country": ""
            }
        ],
        "production_countries": [
            {
                "iso_3166_1": "US",
                "name": "United States of America"
            }
        ],
        "release_date": "1941-04-17",
        "revenue": 23217674,
        "runtime": 119,
        "spoken_languages": [
            {
                "iso_639_1": "en",
                "name": "English"
            }
        ],
        "status": "Released",
        "tagline": "It's terrific!",
        "title": "Citizen Kane",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 3103
    },
    backdrops: [
        {
            aspect_ratio: 1.777777777777778,
            file_path: "/fssh5GyRUrXcS8OtX1b2sVAGh0l.jpg",
            height: 2160,
            iso_639_1: null,
            vote_average: 5.312,
            vote_count: 1,
            width: 3840,
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

