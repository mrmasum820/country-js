fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

const displayCountries = countries => {
    // console.log(countries)
    const countriesElement = document.getElementById('countries')
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('country-class')
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountry('${country.name}')">Details</button>
        `
        countriesElement.appendChild(div)
    })
}
const loadCountry = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data[0]))
}

const displayCountry = country => {
    console.log(country)
    const countryElement = document.getElementById('country')
    countryElement.innerHTML = `
        <h3>Name: ${country.name}</h3>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population}</p>
        <img width="300px" src="${country.flag}">
    `
}