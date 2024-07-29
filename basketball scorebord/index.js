// home

let homeCount = 0;
let changeCount = document.getElementById("home-btn");

function plusOne() {
  homeCount += 1;
  changeCount.textContent = homeCount;
}
function plusTwo() {
  homeCount += 2;
  changeCount.textContent = homeCount;
}
function plusThree() {
  homeCount += 3;
  changeCount.textContent = homeCount;
}

// gest

let gestCount = 0;
let gestCountChange = document.getElementById("gest-btn");

function guestPlusOne() {
  gestCount += 1;
  gestCountChange.textContent = gestCount;
}
function guestPlusTwo() {
  gestCount += 2;
  gestCountChange.textContent = gestCount;
}
function guestPlusThree() {
  gestCount += 3;
  gestCountChange.textContent = gestCount;
}
