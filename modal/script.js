"use strict";
// show-modal
// modal
// close-modal
// overlay

// declaring variables
const btnsShowModal = document.querySelectorAll(".show-modal");
const btnsCloseModal = document.querySelectorAll(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelectorAll(".modal");

const showModal = function (index) {
  modal[index].classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (index) {
  modal[index].classList.add("hidden");
  overlay.classList.add("hidden");
};

//process of show/hide modal
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", function () {
    showModal(i);
  });
}

for (let i = 0; i < btnsCloseModal.length; i++) {
  // for clicking close button
  btnsCloseModal[i].addEventListener("click", function () {
    closeModal(i);
  });
  // for clicking overlay
  overlay.addEventListener("click", function () {
    closeModal(i);
  });
  // pressing esc button
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal[i].classList.contains("hidden"))
      closeModal(i);
  });
}
