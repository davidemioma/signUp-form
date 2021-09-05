"use strict";

const submitBtn = document.querySelector(".btn");

function checkFirstName(firstName) {
  const check = document.querySelector(".one");
  const text = document.querySelector(".f_text");
  const errImg = document.querySelector(".img1");
  if (firstName !== "") {
    check.classList.remove("invalid");
    check.classList.add("valid");
    text.classList.add("hidden");
    errImg.classList.add("hidden");
  }

  if (firstName === "") {
    check.classList.remove("valid");
    check.classList.add("invalid");
    text.classList.remove("hidden");
    errImg.classList.remove("hidden");
  }
}

function checkLastName(lastName) {
  const check = document.querySelector(".two");
  const text = document.querySelector(".l_text");
  const errImg = document.querySelector(".img2");
  if (lastName !== "") {
    check.classList.remove("invalid");
    check.classList.add("valid");
    text.classList.add("hidden");
    errImg.classList.add("hidden");
  }

  if (lastName === "") {
    check.classList.remove("valid");
    check.classList.add("invalid");
    text.classList.remove("hidden");
    errImg.classList.remove("hidden");
  }
}

function checkEmail(email) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const check = document.querySelector(".three");
  const text = document.querySelector(".mail_text");
  const errImg = document.querySelector(".img3");
  if (email.match(pattern)) {
    check.classList.remove("invalid");
    check.classList.add("valid");
    text.classList.add("hidden");
    errImg.classList.add("hidden");
  }
  //Else
  else {
    check.classList.remove("valid");
    check.classList.add("invalid");
    text.classList.remove("hidden");
    errImg.classList.remove("hidden");
  }
}

function checkPassword(password) {
  const check = document.querySelector(".four");
  const text = document.querySelector(".password_text");
  const errImg = document.querySelector(".img4");
  if (password !== "") {
    check.classList.remove("invalid");
    check.classList.add("valid");
    text.classList.add("hidden");
    errImg.classList.add("hidden");
  }

  if (password === "") {
    check.classList.remove("valid");
    check.classList.add("invalid");
    text.classList.remove("hidden");
    errImg.classList.remove("hidden");
  }
}

function checkReenterPassword(password, reEnterPassword) {
  const check = document.querySelector(".five");
  const text = document.querySelector(".re-enter_text");
  const errImg = document.querySelector(".img5");
  if (password !== "" && reEnterPassword === password) {
    check.classList.remove("invalid");
    check.classList.add("valid");
    text.classList.add("hidden");
    errImg.classList.add("hidden");
  }

  if (password === "" || reEnterPassword !== password) {
    check.classList.remove("valid");
    check.classList.add("invalid");
    text.classList.remove("hidden");
    errImg.classList.remove("hidden");
  }
}

submitBtn.addEventListener("click", function () {
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const reEnter = document.getElementById("re-enter").value;
  checkFirstName(firstName);
  checkLastName(lastName);
  checkEmail(email);
  checkPassword(password);
  checkReenterPassword(password, reEnter);

  //   if (
  //     firstName !== "" &&
  //     lastName !== "" &&
  //     email !== "" &&
  //     password !== "" &&
  //     reEnter !== ""
  //   ) {
  //     alert("You have subscribed for the free trial");
  //   }
});
