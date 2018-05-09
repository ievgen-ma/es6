import config from '../../config'

const movieSearch = document.querySelector('.movie-search')
const movieView = document.querySelector('.movie-view')

function renderMovie(data) {
    data = validateData(data)
    const html = `
        <a class="back" href="">Back</a>
        <article class="movie">
            <a href="${data.id}" class="movie-link">
                <h2>${data.name}</h2>
                <span><img src="${data.imgSrc}"></span>
            </a>
        </article>
    `
    render(html)
}

function validateData(data) {
    let img = data.poster_path
    if (img) {
        img = config.imageSrc + img
    } else {
        img = config.noImageSrc
    }
    return {
        id: data.id,
        name: data.name || 'Unknown',
        imgSrc: img
    }
}

function render(html){
    const el = document.createElement('article')
    
    el.classList.add('movie')
    el.innerHTML = html
    movieView.style.display = 'block'
    movieSearch.style.display = 'none'
    movieView.innerHTML = ''
    movieView.appendChild(el)

    const backBtn = document.createElement('.back')
    backBtn.addEventListener('click', back)
}

function back(){
    movieView.style.display = 'none'
    movieSearch.style.display = 'block'
}

export default {
    renderMovie,
    back
}