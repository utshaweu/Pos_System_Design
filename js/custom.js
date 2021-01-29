const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container_bg = document.querySelector(".container-bg");

sign_up_btn.addEventListener('click', () => {
  container_bg.classList.add("sign-up-mode");
})

sign_in_btn.addEventListener('click', () => {
  container_bg.classList.remove("sign-up-mode");
})