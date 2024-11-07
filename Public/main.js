"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const taskNameInput = document.querySelector("#task-name");
  const taskInput = document.querySelector("#task-input");
  const addTaskButton = document.querySelector(".add-btn");
  const taskList = document.querySelector(".task-list");
  const filterButtons = document.querySelectorAll(".filter-btn");
  let selectedPriority = 1; // Default priority is 1 star
  const tasks = [];

  const themeToggleButton = document.querySelector(".theme-toggle-btn");
  const settingsButton = document.querySelector(".settings-btn");

  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("dark-theme")) {
      themeToggleButton.textContent = "🌞";
    } else {
      themeToggleButton.textContent = "🌙";
    }
  });

  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  addTaskButton.addEventListener("click", () => {
    addTask();
  });

  function addTask() {
    const taskName = taskNameInput.value.trim();
    const taskDescription = taskInput.value.trim();

    if (taskName === "" || taskDescription === "") {
      return;
    }

    const task = {
      name: taskName,
      description: taskDescription,
      priority: selectedPriority,
    };

    tasks.push(task);
    renderTasks();

    taskNameInput.value = "";
    taskInput.value = "";
  }

  function renderTasks(filter = "all") {
    taskList.innerHTML = "";
    let filteredTasks = tasks;

    if (filter !== "all") {
      filteredTasks = tasks.filter(
        (task) => task.priority === parseInt(filter)
      );
    }

    filteredTasks.forEach((task, index) => {
      const taskItem = document.createElement("li");
      taskItem.classList.add("task-item");
      taskItem.innerHTML = `
        <h3>${task.name}</h3>
        <p>${task.description}</p>
        <div class="star-rating" data-index="${index}">
          ${createStarRating(task.priority)}
        </div>
      `;
      taskList.appendChild(taskItem);
    });

    document.querySelectorAll(".star").forEach((star) => {
      star.addEventListener("click", (e) => {
        const taskIndex = e.target.closest(".star-rating").dataset.index;
        updateTaskPriority(taskIndex, parseInt(e.target.dataset.value));
      });
    });
  }

  function createStarRating(priority) {
    let stars = "";
    for (let i = 1; i <= 3; i++) {
      const starClass = i <= priority ? "active" : "";
      stars += `<span class="star ${starClass}" data-value="${i}">★</span>`;
    }
    return stars;
  }

  function updateTaskPriority(index, priority) {
    tasks[index].priority = priority;
    renderTasks();
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const priority = button.dataset.priority;
      selectedPriority = priority;
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderTasks(priority);
    });
  });
});
