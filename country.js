search = window.location.search;
const params = new URLSearchParams(search);

// Get the value of the 'name' parameter
const countryName = params.get("name");
console.log(countryName);

fetch("https://restcountries.com/v3.1/name/" + countryName)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    document.getElementById("flag-img").src = data[0].flags.png;
    document.getElementById("country-name").innerText = data[0].name.common;
    document.getElementById("countryname").innerText = data[0].name.official;
    document.getElementById("country-population").innerText =
      data[0].population;
    document.getElementById("country-region").innerText = data[0].region;
    document.getElementById("country-sub-region").innerText = data[0].subregion;
    document.getElementById("capital-name").innerText = data[0].capital;
    document.getElementById("top-Domain").innerText = data[0].tld;
    document.getElementById("currency").innerText = data[0].currencies.XCD.name;
    document.getElementById("language").innerText = data[0].languages.eng;
  });
