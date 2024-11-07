"use strict";

// Particles.js setup
window.onload = function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#6a5acd",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 40,
          size_min: 0.1,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#6a5acd",
        opacity: 0.4,
        width: 1,
      },
    },
  });
};

// Functions for login and signup
function login() {
  alert("Log in clicked");
}

function signup() {
  alert("Sign up clicked");
}
