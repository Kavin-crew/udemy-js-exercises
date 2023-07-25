'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// using the old way of AJAX request

// const getCountry = function(...countries){
//     countries.forEach(country => {
//             const request = new XMLHttpRequest();
//             request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//             request.send();

//             request.addEventListener("load", function() {
//                 const [data] = JSON.parse(this.responseText)
//                 console.log(data)

//                 const html = `
//                     <article class="country">
//                     <img class="country__img" src="${data.flags.svg}" />
//                     <div class="country__data">
//                         <h3 class="country__name">${data.name.common}</h3>
//                         <h4 class="country__region">REGION</h4>
//                         <p class="country__row"><span>👫</span>${(+data.population /1000000).toFixed(1)}M people</p>
//                         <p class="country__row"><span>🗣️</span>${Object.entries(data.languages)[0][1]}</p>
//                         <p class="country__row"><span>💰</span>${Object.entries(data.currencies)[0][0]}</p>
//                     </div>
//                     </article>
//                 `;

//                 countriesContainer.insertAdjacentHTML("beforeend", html);
//                 countriesContainer.style.opacity = "1";
//             })
//     })
// }

// getCountry('usa', 'portugal', 'ph', 'germany');

///////////////////////////////////////////
/// Enhanced version

const getCountry = function (...countries) {
  countries.forEach(country => {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);

      const html = `
                    <article class="country">
                    <img class="country__img" src="${data.flags.svg}" />
                    <div class="country__data">
                        <h3 class="country__name">${data.name.common}</h3>
                        <h4 class="country__region">REGION</h4>
                        <p class="country__row"><span>👫</span>${(
                          +data.population / 1000000
                        ).toFixed(1)}M people</p>
                        <p class="country__row"><span>🗣️</span>${
                          Object.entries(data.languages)[0][1]
                        }</p>
                        <p class="country__row"><span>💰</span>${
                          Object.entries(data.currencies)[0][0]
                        }</p>
                    </div>
                    </article>
                `;

      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = '1';
    });
  });
};

getCountry('usa', 'portugal', 'ph', 'germany');
