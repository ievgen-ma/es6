import movie from '../movie'

class MovieList {
    init(data){
        this.data = data
    }
    constructor(data){
        this.data = data
    }

    renderDOM(selector) {
        this.selector = selector
        this.clear(selector)
        selector.appendChild(this.fragment)
    }

    renderMovies(data){
        this.fragment = document.createDocumentFragment()

        data.forEach(element => {
            const article = document.createElement('article')
            article.classList.add('movie')
            article.innerHTML = movie(element)
            this.fragment.appendChild(article)
        })
    }

    clear(selector){
        selector.innerHTML = ''
    }

    sort(filter){
        const data = [...this.data.results]

        switch(filter){
            case 'rating-max':
                this.sortByMaxRaiting(data)
                break;
            case 'rating-min':
                this.sortByMinRaiting(data)
                break;
            case 'newest':
                this.sortByNewest(data)
                break;
            case 'oldest':
                this.sortByOldest(data)
                break;
        }

        this.renderMovies(data)
        this.renderDOM(document.querySelector('.movies'))
    }

    sortByMaxRaiting(data){
        data.sort((a,b)=>{
            if (a.popularity > b.popularity){
                return 1;
            }
            if (a.popularity < b.popularity){
                return -1;
            }
        })
    }

    sortByMinRaiting(data){
        data.sort((a,b)=>{
            if (a.popularity < b.popularity){
                return 1;
            }
            if (a.popularity > b.popularity){
                return -1;
            }
        })
    }

    sortByNewest(data){
        data.sort((a,b)=>{
            if (new Date(a.release_date) > new Date(b.release_date)){
                return 1;
            }
            if (new Date(a.release_date) < new Date(b.release_date)){
                return -1;
            }
        })
    }

    sortByOldest(data){
        data.sort((a,b)=>{
            if (new Date(a.release_date) < new Date(b.release_date)){
                return 1;
            }
            if (new Date(a.release_date) > new Date(b.release_date)){
                return -1;
            }
        })
    }

    hide(){
        this.selector.style.display = 'none'
    }
}

export default MovieList