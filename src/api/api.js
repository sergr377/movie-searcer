import * as axios from "axios";

const instance = axios.create(
    {
        withCredentials: false,
        baseURL: 'https://api.themoviedb.org/',
    }
)

const api = 'api_key=1af88f747dd420376237f5999ac921cc'
//https://api.themoviedb.org/3/movie/157336?api_key={api_key}

//пофиксить стену кода api

export const usersAPI = {
    getMovie(id) {
        return instance.get(`3/movie/${id}?${api}`)
            .then(response => {
                return response.data;
            })
    },
    getNewest(page) {
        return instance.get(`3/movie/upcoming?${api}&language=en-US&page=${page}`)
            .then(response => {
                return response;
            })
    },
    getTopRated(page) {
        return instance.get(`3/movie/top_rated?${api}&language=en-US&page=${page}&region=RU`)
            .then(response => {
                return response;
            })//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
    },
    getPopular(page) {
        return instance.get(`3/movie/popular?${api}&language=en-US&page=${page}&region=RU`)
            .then(response => {
                return response;
            })
    },
    getSearch(query) {
        return instance.get(`3/search/movie?${api}&language=en-US&query=${query}&page=1`)
    },
    getImages(id) {
        return instance.get(`3/movie/${id}/images?${api}&language=en-US&include_image_language=include_image_language%3Den%2Cnull`)
            .then(response => {
                return response.data.backdrops;
            })
    },
    getCast(id) {
        return instance.get(`3/movie/${id}/credits?${api}`)
            .then(response => {
                return response.data;
            })
    }
}
