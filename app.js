const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", function () {

  const task = input.value;

  if(task === ""){
    alert("Hãy nhập công việc");
    return;
  }

  const li = document.createElement("li");

  li.textContent = task;

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);

  todoList.appendChild(li);

  input.value = "";
});