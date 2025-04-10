const button = document.getElementById("friendBtn");
const heart = document.getElementById("heart");

button.addEventListener("click", () => {
  heart.style.bottom = "100px";
  heart.style.opacity = "1";
  button.innerText = "Yay! You're my friend now 😄";
});
