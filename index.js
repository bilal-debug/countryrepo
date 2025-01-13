function modeFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");

  let nav = document.getElementById("main-nav");
  nav.classList.toggle("darkmain-nav");

  let svg = document.getElementById("svg");
  svg.classList.toggle("darksvg");

  let text = document.getElementById("textmode");
  text.classList.toggle("dark-textmode");

  if (element.classList.contains("dark-mode")) {
    document.getElementById("textmode").innerText = "Dark Mode";
  } else {
    document.getElementById("textmode").innerText = "Light Mode";
  }
}
function initfetch() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // let countrycards = data.map((country) => {
      //   return `
      //   <div class="card">
      //         <img src="${country.flags.png}" alt="" />
      //         <div class="card-content">
      //           <h2 id="name">${country.name.common}</h2>
      //           <div class="card-subcontent" >
      //             <div><h4>Population:</h4> <p>${country.population}</p></div>
      //             <div><p>Region:</p></div>
      //             <div><p>Capital:</p></div>
      //           </div>
      //         </div>
      //       </div>
      //   `;
      // });

      // countrydata.innerHTML = countrycards.join("");

      poplateData(data);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}
initfetch();

let countrydata = document.getElementById("country-data");

function searchR() {
  searchquery = document.getElementById("search").value;
  if (searchquery === "") {
    initfetch();
  } else {
    searchfetch();
  }
}
function searchfetch() {
  fetch("https://restcountries.com/v3.1/name/" + searchquery)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      poplateData(data);
    });
}

function poplateData(data) {
  document.getElementById("country-data").innerHTML = "";
  data.forEach((country) => {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.onclick = () => {
      window.location.href = "country.html?name=" + country.name.common;
    };

    let cardimg = document.createElement("img");
    cardimg.src = country.flags.png;
    cardDiv.appendChild(cardimg);

    let cardDivc = document.createElement("div");
    cardDivc.className = "card-content";
    cardDiv.appendChild(cardDivc);

    let cardh2 = document.createElement("h2");
    cardh2.textContent = country.name.common;
    cardh2.id = "name";
    cardDivc.appendChild(cardh2);

    let carddivc1 = document.createElement("div");
    carddivc1.className = "card-subcontent";
    cardDivc.appendChild(carddivc1);

    let carddivc1sb = document.createElement("div");
    carddivc1.appendChild(carddivc1sb);

    let cardh4 = document.createElement("h4");
    cardh4.textContent = "Population:";
    carddivc1sb.appendChild(cardh4);

    let cardh4span = document.createElement("span");
    cardh4span.textContent = country.population;
    carddivc1sb.appendChild(cardh4span);

    countrydata.appendChild(cardDiv);
    console.log(cardDiv);
  });
}

function RegionSelection() {
  regionSelect = document.getElementById("mainSelect").value;
  console.log(document.getElementById("mainSelect").value);
  if (regionSelect === "region") {
    initfetch();
  } else {
    fetch("https://restcountries.com/v3.1/region/" + regionSelect)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        poplateData(data);
      });
  }
}
