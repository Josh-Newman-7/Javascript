function initialiserDonnees() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v2/all', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let pays = JSON.parse(xhr.responseText);
            afficherDonnees(pays);
        }
    };

    xhr.send();
}

function afficherDonnees(pays) {
    let container = document.getElementById('data-container');
    let contenu = '<ol>';

    pays.forEach(pays => {
        contenu += `
            <li class="country-container">
                <h2>${pays.name}</h2>
                <ul>
                    <li>Capital: ${pays.capital}</li>
                    <li>Region: ${pays.region}</li>
                    <li>Population: ${pays.population.toLocaleString()}</li>
                </ul>
            </li>
        `;
    });

    contenu += '</ol>';
    container.innerHTML = contenu;
}
