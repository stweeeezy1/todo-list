"use strict";

fetchFact();

function fetchFact() {
  fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const factContainer = document.getElementById("fact");
      factContainer.textContent = data.text;
    })
    .catch((error) => {
      console.error("Error fetching fact: ", error);
      const factContainer = document.getElementById("fact");
      factContainer.textContent =
        "Oops! Something went wrong fetching a fun fact.";
    });
}

function login() {
  window.location.href = 'log.html';
}

function signup() {
  window.location.href = 'register.html';
}
