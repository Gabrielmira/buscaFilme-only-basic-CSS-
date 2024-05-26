async function searchMovie() {
    const apiKey = '3f938b20';
    const movieName = document.getElementById('searchInput').value;
    const url = `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = document.getElementById('results');
    results.innerHTML = '';

    if (data.Response === 'True') {
        data.Search.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h2>${movie.Title} (${movie.Year})</h2>
            `;
            results.appendChild(movieElement);
        });
    } else {
        results.innerHTML = '<p>No movies found</p>';
    }
}
