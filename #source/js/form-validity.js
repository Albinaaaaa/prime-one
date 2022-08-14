const textCount = document.querySelector(
  ".contacts-content-form__characters span"
);
const errors = document.querySelectorAll(".contacts-content-form__error");
const limit = +textCount.textContent;

form.text.addEventListener("input", textCounter);

function textCounter() {
  const txtCountResult = limit - form.text.value.length;
  textCount.innerHTML = txtCountResult;
}

form.name.addEventListener("change", function () {
  validateElement("name", form.name);
});

form.email.addEventListener("change", function () {
  validateElement("email", form.email);
});

form.number.addEventListener("change", function () {
  validateElement("number", form.number);
});

form.text.addEventListener("change", function () {
  validateElement("text", form.text);
});

form.addEventListener("submit", function (event) {
  let res = checkAllValidity();
  console.log("res", res);
  if (!res) {
    event.preventDefault();
  }
});

function validateElement(message, element) {
  for (let error of errors) {
    if (error.dataset.req === message) {
      hideElement(error);

      specificValidation(message, element, error);
    }
  }
}

function specificValidation(mes, currentElement, error) {
  if (mes === "name") {
    if (currentElement.value.length > 4) {
      hideElement(error);
    } else if (currentElement.value.length < 4) {
      showElement(error);
    }
  } else if (mes === "email") {
    let email = isEmail(currentElement.value);
    console.log(email);
    if (email) {
      hideElement(error);
    } else {
      showElement(error);
    }
  } else if (mes === "number") {
    if (currentElement.value.length === 23) {
      hideElement(error);
    } else {
      showElement(error);
    }
  } else if (mes === "text") {
    if (currentElement.value.length < 5) {
      showElement(error);
    } else {
      hideElement(error);
    }
  }
}

function isEmail(email) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function hideElement(element) {
  element.style.display = "none";
}

function showElement(element) {
  element.style.display = "inline-block";
}

function checkAllValidity() {
  for (let item of errors) {
    console.log(item.style.display);
    if (item.style.display === "") {
      return false;
    } else if (item.style.display === none) {
      return false;
    } else {
      return true;
    }
  }
}
