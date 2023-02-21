import './search.js';
import fetchCall from './fetchCall.js';

let queryString = new URLSearchParams(window.location.search);
let movieId = queryString.get('movieId');


let apiKey = '8f2a16d4f0d2593718febacdf7b1d495';
let detailEndPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es-ES`;

const getTag = selector => document.querySelector(selector);

let loading = getTag('#loading');
let movieDetail = getTag('#movieDetail');
let movieImage = getTag('#movieImg');
let movieTitle = movieDetail.querySelector('h2');
let movieOverview = movieDetail.querySelector('p');
let movieGenres = movieDetail.querySelector('ul');
let movieRating = movieDetail.querySelector('#rating');
let backBtn = movieDetail.querySelector('a');

fetchCall(detailEndPoint)
	.then(movie => {
		loading.classList.add('d-none');
		movieDetail.classList.remove('d-none');
		movieImage.src = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'images/no-poster.jpg';
		movieTitle.innerText += ` ${movie.title}`;
		movieOverview.innerText += ` ${movie.overview || 'Sin reseña.'}`;
		movieRating.innerText += ` ${movie.vote_average}`;
		for (const genre of movie.genres) {
			movieGenres.insertAdjacentHTML('beforeend', `<li>${genre.name}</li>`);
		}
	})


backBtn.addEventListener('click', e => {
	e.preventDefault();
})