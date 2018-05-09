import config from './config'

function getMovieByQuery(q){
    if (!q) {
        return
    }
    return fetch(config.searchMovieUrl + q).then(res => res.json())
}

function getMovieById(id){
    if (!id) {
        return
    }
    const url = `${config.baseMovieUrl}${config.queryMovieById}${id}${config.apiKey}`
    return fetch(url).then(res => res.json())
}

export default {
    getMovieByQuery,
    getMovieById
}