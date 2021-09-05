"use strict";

const submitBtn = document.querySelector(".btn");

//first name
const firstName = document.getElementById("first_name");
const one = document.querySelector(".one");
const fText = document.querySelector(".f_text");
const icon1 = document.querySelector(".img1");

//Last name
const lastName = document.getElementById("last_name");
const two = document.querySelector(".two");
const lText = document.querySelector(".l_text");
const icon2 = document.querySelector(".img2");

//email
const email = document.getElementById("email");
const mailCheck = document.querySelector(".three");
const mailText = document.querySelector(".mail_text");
const icon3 = document.querySelector(".img3");

//password
const password = document.getElementById("password");
const four = document.querySelector(".four");
const pText = document.querySelector(".password_text");
const icon4 = document.querySelector(".img4");

//Re-enter
const reEnter = document.getElementById("re-enter");
const five = document.querySelector(".five");
const rText = document.querySelector(".re-enter_text");
const icon5 = document.querySelector(".img5");

function clearText() {
  if (reEnter.value === "") {
    five.classList.remove("invalid");
    rText.classList.add("hidden");
    icon5.classList.add("hidden");
  }
}

function emptyText(input, text, icon) {
  input.classList.add("invalid");
  text.classList.remove("hidden");
  icon.classList.remove("hidden");
}

submitBtn.addEventListener("click", function (e) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (firstName.value === "") {
    e.preventDefault();
    emptyText(one, fText, icon1);
  }

  if (lastName.value === "") {
    e.preventDefault();
    emptyText(two, lText, icon2);
  }

  if (!email.value.match(pattern)) {
    e.preventDefault();
    emptyText(mailCheck, mailText, icon3);
  }

  if (password.value === "") {
    e.preventDefault();
    emptyText(four, pText, icon4);
  }

  if (reEnter.value !== password.value || reEnter.value === "") {
    e.preventDefault();
    emptyText(five, rText, icon5);
  }
});
