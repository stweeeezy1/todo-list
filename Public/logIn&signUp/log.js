const form = document.getElementById("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("Username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = "/todo-list/Public/mainPage/main.html";
    } else {
      alert(data.message || "Ошибка при регистрации");
    }
  } catch (error) {
    console.error("Ошибка при отправке запроса:", error);
    alert("Что-то пошло не так! Пожалуйста, попробуйте позже.");
  }
});
