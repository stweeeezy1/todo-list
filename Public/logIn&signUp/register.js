const form = document.getElementById("form");
const fieldpassword = document.getElementById("password");
const fieldpasswordconformation = document.getElementById("passwordc");
const lengthRequirement = document.getElementById("length");
const uppercaseRequirement = document.getElementById("uppercase");
const notEmptyRequirement = document.getElementById("not-empty");
const togglePassword = document.getElementById("togglePassword");

form.addEventListener("submit", function (event) {
  const password = fieldpassword.value;
  const passwordConfirmation = fieldpasswordconformation.value;

  const isLengthValid = password.length >= 8;
  const isUppercaseValid = /[A-Z]/.test(password);
  const isNotEmpty = password.trim() !== "";
  const isPasswordMatch = password === passwordConfirmation;

  if (!isLengthValid || !isUppercaseValid || !isNotEmpty || !isPasswordMatch) {
    event.preventDefault();
    if (!isPasswordMatch) {
      fieldpasswordconformation.classList.remove("wrongAnswer");
      void fieldpasswordconformation.offsetWidth;
      fieldpasswordconformation.classList.add("wrongAnswer");
    }
    return;
  }
});

fieldpasswordconformation.addEventListener("input", function () {
  fieldpasswordconformation.classList.remove("wrongAnswer");
  const value = fieldpassword.value;

  if (value.length >= 8) {
    lengthRequirement.classList.remove("invalid");
    lengthRequirement.classList.add("valid");
  } else {
    lengthRequirement.classList.remove("valid");
    lengthRequirement.classList.add("invalid");
  }

  if (/[A-Z]/.test(value)) {
    uppercaseRequirement.classList.remove("invalid");
    uppercaseRequirement.classList.add("valid");
  } else {
    uppercaseRequirement.classList.remove("valid");
    uppercaseRequirement.classList.add("invalid");
  }

  if (value.trim() !== "") {
    notEmptyRequirement.classList.remove("invalid");
    notEmptyRequirement.classList.add("valid");
  } else {
    notEmptyRequirement.classList.remove("valid");
    notEmptyRequirement.classList.add("invalid");
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("name").value;
  const password = fieldpassword.value;
  const user_taken = document.getElementById("UAES");

  try {
    const response = await fetch("http://localhost:5000/auth/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = "/todo-list/Public/welcomePage/reg.html";
    } else {
      user_taken.classList.add("taken");
      alert(data.message || "Ошибка при регистрации");
    }
  } catch (error) {
    console.error("Ошибка при отправке запроса:", error);
    alert("Что-то пошло не так! Пожалуйста, попробуйте позже.");
  }
});
