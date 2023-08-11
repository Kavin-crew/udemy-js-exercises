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
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// global variable
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  // return new promise
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
let currentImg;
createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
