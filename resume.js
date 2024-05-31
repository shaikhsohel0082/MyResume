const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("input-name");
const emailInput = document.getElementById("input-email");
const msgInput = document.getElementById("input-message");
contactForm.addEventListener("submit", () => {
  document.getElementById("contact").innerHTML = "";
  document.getElementById(
    "contact"
  ).innerHTML = `<h1>Message Sent !</h1><h3>Thank You For Your Interest</h3>`;
  // console.log(nameInput.value);
  // console.log(emailInput.value);
  // console.log(msgInput.value);
});
//adding event listner to bar
let isClicked = false;
const bar = document.getElementById("bar");
const hiddenList = document.getElementById("hidden-list");
bar.addEventListener("click", () => {
  if (!isClicked) {
    hiddenList.style.display = "block";
    isClicked = true;
  } else {
    hiddenList.style.display = "none";
    isClicked = false;
  }
});
