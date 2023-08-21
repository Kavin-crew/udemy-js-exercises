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
      // console.log(data);

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

getCountry('usa', 'portugal', 'ph', 'germany', 'japan');

// ////////////////////////////////////////////////////////////////////////
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You Win!');
//     } else {
//       reject(new Error('You lost your money!'));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 second'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

/////////////////////////////////////////////////
///// Coding challenge#2
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// // global variable
// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   // return new promise
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };
// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

////////////////////////////////////////////////////////////////
/// 2017 async await

// to get our current position
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     //reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     const dataGeo = await resGeo.json();
//     // error 404 and 403 will not get rejected
//     // so we need to manually handle the error
//     if (!dataGeo.ok) throw new Error('Problem getting location');

//     // country data
//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem getting location');
//     const [data] = await res.json();

//     // console.log([data]);

//     const html = `
//                     <article class="country">
//                     <img class="country__img" src="${data.flags.svg}" />
//                     <div class="country__data">
//                         <h3 class="country__name">${data.name.common}</h3>
//                         <h4 class="country__region">REGION</h4>
//                         <p class="country__row"><span>👫</span>${(
//                           +data.population / 1000000
//                         ).toFixed(1)}M people</p>
//                         <p class="country__row"><span>🗣️</span>${
//                           Object.entries(data.languages)[0][1]
//                         }</p>
//                         <p class="country__row"><span>💰</span>${
//                           Object.entries(data.currencies)[0][0]
//                         }</p>
//                     </div>
//                     </article>
//                 `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = '1';
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// (async function () {
//   try {
//     const response = await whereAmI();
//   } catch (err) {
//     console.error(err);
//   }
// })();

// ///////////////////////////////
// parallel promises
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // make all request parallel since they are not depending on each other
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data.map(country => country[0].capital.join()));
//     // ['Lisbon'] ['Ottawa'] ['Dodoma']
//   } catch (error) {
//     console.error(error);
//   }
// };

// get3Countries('portugal', 'canada', 'tanzania');

// ///////////////////////////////
// race promises
(async function () {
  try {
    const response = await Promise.race([
      getJSON(`https://restcountries.com/v3.1/name/mexico`),
      getJSON(`https://restcountries.com/v3.1/name/italy`),
      getJSON(`https://restcountries.com/v3.1/name/egypt`),
    ]);
    console.log(response[0].name.common);
  } catch (err) {
    console.error(err);
  }
})();

//////////////////////////////////
//race promise w/ timeout
// in scenario that sending a message for a given time,
// then fires the time out as reject
const timeout = function (sec) {
  return new Promise((_, reject) => {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/egypt`),
  timeout(0.1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));
