import * as axios from "axios";

const instance = axios.create(
    {
        withCredentials: false,
        baseURL: 'https://api.themoviedb.org/',
    }
)

//https://api.themoviedb.org/3/movie/157336?api_key={api_key}

//пофиксить стену кода api

export const usersAPI = {
    getMovie(id) {
        return instance.get(`3/movie/${id}?api_key=1af88f747dd420376237f5999ac921cc`)
            .then(response => {
                return response.data;
            })
    },
    getNewest(page) {
        return instance.get(`3/movie/upcoming?api_key=1af88f747dd420376237f5999ac921cc&language=en-US&page=${page}`)
            .then(response => {
                console.log(response)
                return response;
            })
    },
    getTopRated(page) {
        return instance.get(`3/movie/top_rated?api_key=1af88f747dd420376237f5999ac921cc&language=en-US&page=${page}`)
            .then(response => {
                console.log(response)
                return response;
            })
    },
    getSearch(query) {
        return instance.get(`3/search/movie?api_key=1af88f747dd420376237f5999ac921cc&language=en-US&query=${query}&page=1`)
    },
    getImages(id) {
        return instance.get(`3/movie/${id}/images?api_key=1af88f747dd420376237f5999ac921cc&language=en-US&include_image_language=include_image_language%3Den%2Cnull`)
            .then(response => {
                return response.data.backdrops;
            })
    }
}
