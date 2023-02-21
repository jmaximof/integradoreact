const getTag = selector => document.querySelector(selector);

let searchForm = getTag('form');
let inputTag = [...searchForm.elements][0];
let alert = getTag('#alert');

searchForm.addEventListener('submit', e => {
	e.preventDefault();

	let searchWord = inputTag.value.trim();
	if (searchWord.length < 3) {
		alert.classList.remove('d-none');
		alert.innerText = 'Ingresa más de 3 letras';
	} else {
		window.location.href = `resultados-busqueda.html?search=${searchWord}`;
	}
})