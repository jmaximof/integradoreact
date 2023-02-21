import './search.js';
import fetchCall from './fetchCall.js';

let APIKEY = '8f2a16d4f0d2593718febacdf7b1d495';
let popularEndPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=es-ES&sort_by=popularity.desc&page=1`;

const getTag = selector => document.querySelector(selector);

let loading = getTag('#loading');
let popularMovies = getTag('#popularMovies');

fetchCall(popularEndPoint)
	.then(data => {
		let movies = data.results;

		loading.classList.add('d-none');
		popularMovies.classList.remove('d-none');

		for (const movie of movies) {
			let imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'images/no-poster.jpg';

			let htmlStructure = `
				<div class="col-12 col-sm-6 col-lg-3 my-2">
					<div class="card h-100">
						<img src="${imageUrl}" class="card-img-top">
						<div class="card-body">
							<h5 class="card-title one-line-title">${movie.original_title}</h5>
							<p class="card-text">${movie.overview.substr(0, 80).trim()}...</p>
							<a href="detalle.html?movieId=${movie.id}" class="btn btn-primary">Ver detalle</a>
						</div>
					</div>
				</div>
			`;
			popularMovies.insertAdjacentHTML('beforeend', htmlStructure);
		}
	})