import './search.js';
import fetchCall from './fetchCall.js';

let queryString = new URLSearchParams(window.location.search);
let querySearch = queryString.get('search');

let apiKey = '8f2a16d4f0d2593718febacdf7b1d495';
let searchEndPoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&page=1&query=${querySearch}`;

const getTag = selector => document.querySelector(selector);

let loading = getTag('#loading');
let searchResults = getTag('#searchResults');

fetchCall(searchEndPoint)
	.then(data => {
		let movies = data.results;

		loading.classList.add('d-none');
		searchResults.classList.remove('d-none');

		if (movies.length > 0) {
			for (const movie of movies) {
				let imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'images/no-poster.jpg';

				let htmlStructure = `
					<div class="col-12 col-sm-6 col-lg-2 my-2">
						<div class="card h-100">
							<img src="${imageUrl}" class="card-img-top">
							<div class="card-body">
								<h5 class="card-title one-line-title">${movie.original_title}</h5>
								<a href="detalle.html?movieId=${movie.id}" class="btn btn-primary">Ver detalle</a>
							</div>
						</div>
					</div>
				`;
				searchResults.insertAdjacentHTML('beforeend', htmlStructure);
			}
		} else {
			searchResults.insertAdjacentHTML('beforeend', '<h2 class="text-center">Tu búsqueda no arrojó resultados</h2>');
		}

	})



