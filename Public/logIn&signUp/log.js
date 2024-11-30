const form = document.getElementById("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("Username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("https://todo-list-12.onrender.com", {
      method: "GET",
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
