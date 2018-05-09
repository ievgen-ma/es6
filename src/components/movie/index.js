import config from '../../config'

export default function movie(data) {
    data = validateData(data)
    const html = `
        <article class="movie">
            <a href="${data.id}" class="movie-link">
                <h2>${data.name}</h2>
                <span><img src="${data.imgSrc}"></span>
            </a>
        </article>
    `
    return html
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