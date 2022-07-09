var modalr = document.getElementById("modal-rectangle")
var btn = document.getElementById("button-rectangle")

async function fetch_movies(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

function myModal(data) {
    imgRectangle = document.getElementById("img-rectangle")
    image = data.image_url
    imgRectangle.src = image
    title = data.title
    title2Rectangle = document.getElementById("title2-rectangle")
    title2Rectangle.innerHTML = "Title: " + title
    genres = data.genres
    genresRectangle = document.getElementById("genres-rectangle")
    genresRectangle.innerHTML = "Genres: " + genres
    release = data.year
    releaseRectangle = document.getElementById("release-rectangle")
    releaseRectangle.innerHTML = "Release: " + release
    rating = data.imdb_score
    ratingRectangle = document.getElementById("rating-rectangle")
    ratingRectangle.innerHTML = "Score Imdb: " + rating
    actors = data.actors
    actorsRectangle = document.getElementById("actors-rectangle")
    actorsRectangle.innerHTML = "Actors: " + actors
    directors = data.directors
    directorsRectangle = document.getElementById("directors-rectangle")
    directorsRectangle.innerHTML = "Directors: " + directors
}

async function generateCategorieDiv(url1, url2, category_id) {
    data1 = await fetch_movies(url1)
    data2 = await fetch_movies(url2)
    data1 = data1.results
    data2 = data2.results.slice(0, 2)
    data = data1.concat(data2)
    category = document.getElementById(category_id)
    images = category.querySelectorAll('img')
    data.forEach(function (item, index) {
        itemImage = item.image_url
        newImg = images[index] 
        newImg.src = itemImage
        newImg.onclick = function () {
            myModal(item)
            modalr.style.display = "block";
        }
    });
}

async function generateFirstMovieImage() {
    datarectangle = await fetch_movies('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score')
    datarectangle = datarectangle.results.slice(0, 1)
    datarectangle = datarectangle[0]
    title = datarectangle.title
    titleTop = document.getElementById("title-rectangle")
    titleTop.innerHTML = title
    img_url = datarectangle.image_url
    imgTop = document.getElementById("img-top")
    imgTop.src = img_url
}

async function generateFirstMovieContent() {
    datarectangle = await fetch_movies('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score')
    datarectangle = datarectangle.results.slice(0, 1)
    datarectangle = datarectangle[0]
    title = datarectangle.title
    titleTop = document.getElementById("title-rectangle")
    titleTop.innerHTML = title
    img_url = datarectangle.image_url
    imgTop = document.getElementById("img-top")
    imgTop.src = img_url
    btn.onclick = function () {
        myModal(datarectangle)
        modalr.style.display = "block";
    }
}

async function displayDiv() {
    //Best Movies
    bestMoviesUrl1 = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score'
    bestMoviesUrl2 = 'http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score'
    a = await generateCategorieDiv(bestMoviesUrl1, bestMoviesUrl2, "categorie1")
    //Romance
    romanceUrl1 = 'http://localhost:8000/api/v1/titles/?genre=romance&sort_by=-imdb_score'
    romanceUrl2 = 'http://localhost:8000/api/v1/titles/?genre=romance&page=2&sort_by=-imdb_score'
    b = await generateCategorieDiv(romanceUrl1, romanceUrl2, "categorie2")
    //Film-Noir
    filmNoirUrl1 = 'http://localhost:8000/api/v1/titles/?genre=Film-Noir&sort_by=-imdb_score'
    filmNoirUrl2 = 'http://localhost:8000/api/v1/titles/?genre=Film-Noir&page=2&sort_by=-imdb_score'
    c = await generateCategorieDiv(filmNoirUrl1, filmNoirUrl2, "categorie3")
    //History
    historyUrl1 = 'http://localhost:8000/api/v1/titles/?genre=history&sort_by=-imdb_score'
    historyUrl2 = 'http://localhost:8000/api/v1/titles/?genre=history&page=2&sort_by=-imdb_score'
    d = await generateCategorieDiv(historyUrl1, historyUrl2, "categorie4")
}


//async function displayFirstMovie
displayDiv()
generateFirstMovieContent()
generateFirstMovieImage()

