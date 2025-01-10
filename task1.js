import { userHandler } from "./userobject";

const form = document.querySelector("#form");
const userName = document.querySelector(".user");
const email = document.querySelector(".email");
const comment = document.querySelector(".comment");
const submit = document.querySelector(".submit");

const formMessage = (event) => {
  event.preventDefault();
  userHandler(userName.ariaValueMax, email.ariaValueMax, comment.value);
  alert("done");
};
form.addEventListener("submit", formMessage);
