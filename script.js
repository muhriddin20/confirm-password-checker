const passwordInput = document.querySelector("#password");
const repeatPasswordInput = document.querySelector("#repeat-password");
const btn = document.querySelector(".form button");

function changeAttribute(element, condition) {
  if (condition) {
    element.removeAttribute("disabled");
  } else {
    element.setAttribute("disabled", "true");
  }
}

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length >= 6) {
    changeAttribute(repeatPasswordInput, true);
  } else {
    changeAttribute(repeatPasswordInput, false);
  }
});

repeatPasswordInput.addEventListener("input", () => {
  if (passwordInput.value === repeatPasswordInput.value) {
    changeAttribute(btn, true);
    btn.classList.remove("disabled");
  } else {
    changeAttribute(btn, false);
    btn.classList.add("disabled");
  }
});
