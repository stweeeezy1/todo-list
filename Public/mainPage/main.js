"use strict";

document.getElementById("add-task-btn").addEventListener("click", function () {
  const taskName = document.getElementById("task-name").value;
  const taskDescription = document.getElementById("task-input").value;

  if (!taskName || !taskDescription) return;

  const taskList = document.getElementById("task-list");

  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const taskContent = document.createElement("div");
  taskContent.classList.add("task-content");

  const taskTitle = document.createElement("div");
  taskTitle.classList.add("task-title");
  taskTitle.innerText = taskName;

  const taskDescriptionDiv = document.createElement("div");
  taskDescriptionDiv.classList.add("task-description");
  taskDescriptionDiv.innerText = taskDescription;

  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerText = "Done";
  completeBtn.addEventListener("click", function () {
    taskItem.classList.toggle("completed");
    updateCompletedCount();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", function () {
    taskItem.remove();
    updateCompletedCount();
  });

  taskActions.appendChild(completeBtn);
  taskActions.appendChild(deleteBtn);

  taskContent.appendChild(taskTitle);
  taskContent.appendChild(taskDescriptionDiv);
  taskContent.appendChild(taskActions);

  taskItem.appendChild(taskContent);

  const starRating = document.createElement("div");
  starRating.classList.add("star-rating");

  let selectedStars = 0;

  for (let i = 1; i <= 3; i++) {
    const star = document.createElement("span");
    star.classList.add("star");
    star.innerHTML = "&#9733;";
    star.setAttribute("data-value", i);
    star.addEventListener("click", function () {
      setTaskPriority(taskItem, i);
      selectedStars = i;
      updateStarDisplay(taskItem, selectedStars);
    });
    starRating.appendChild(star);
  }

  taskItem.appendChild(starRating);
  taskList.appendChild(taskItem);

  updateCompletedCount();
});

function updateCompletedCount() {
  const totalCount = document.querySelectorAll(".task-item").length;
  const completedCount = document.querySelectorAll(
    ".task-item.completed"
  ).length;
  document.getElementById("completed-count").innerText = completedCount;
  document.getElementById("total-count").innerText = totalCount;
}

document
  .getElementById("theme-toggle-btn")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    const themeBtn = document.getElementById("theme-toggle-btn");
    themeBtn.innerText = document.body.classList.contains("dark-theme")
      ? "🌞"
      : "🌙";
  });

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", function () {
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const priority = button.dataset.priority;
    const tasks = document.querySelectorAll(".task-item");

    tasks.forEach((task) => {
      if (priority === "all" || task.dataset.priority === priority) {
        task.style.display = "flex";
      } else {
        task.style.display = "none";
      }
    });
  });
});

document.querySelectorAll(".task-item").forEach((task) => {
  task.dataset.priority = Math.floor(Math.random() * 3) + 1;
});

function setTaskPriority(taskItem, priority) {
  const stars = taskItem.querySelectorAll(".star");
  stars.forEach((star) => {
    star.classList.remove("active");
  });

  for (let i = 0; i < priority; i++) {
    stars[i].classList.add("active");
  }

  taskItem.dataset.priority = priority;
}

for (let i = 0; i < selectedStars; i++) {
  stars[i].classList.add("active");
}
