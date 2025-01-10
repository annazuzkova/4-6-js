import { userHandler } from "./userobject";

const form = document.querySelector("#form");
const userName = document.querySelector(".user");
const email = document.querySelector(".email");
const comment = document.querySelector(".comment");

const formMessage = (event) => {
  event.preventDefault();
  userHandler(userName.value, email.value, comment.value);
  alert("Дані успішно відправлені!");
};
form.addEventListener("submit", formMessage);
