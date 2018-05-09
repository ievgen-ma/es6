import MovieList from './components/movie-list'
import movieCard from './components/movie-card'
import movieService from './movie-service'
const list = new MovieList()

const input = document.querySelector('.search-input')
const movies = document.querySelector('.movies')
const filters = document.querySelector('.filters')


filters.addEventListener('click', e => {
    e.preventDefault()
    const filter = e.target.getAttribute('data-filter')
    if (!filter) {
        return
    }
    list.sort(filter)
})

input.addEventListener('input', e => {
    const q = e.target.value

    if (!q) {
        movies.innerHTML = ''
        return
    }

    movieService.getMovieByQuery(q)
        .then(data => {
            list.init(data)

            list.renderMovies(data.results)
            list.renderDOM(movies)
        })
})

movies.addEventListener('click', e => {
    e.preventDefault()
    const target = e.target
    const link = target.closest('.movie-link')
    
    if(!link){
        return
    }
    let id = link.getAttribute('href')
    movieService.getMovieById(id)
        .then(data => {
            movieCard.renderMovie(data)
        })
})