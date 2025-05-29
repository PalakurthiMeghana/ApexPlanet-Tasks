// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const error = document.getElementById("formError");
  
    if (!name || !email || !message) {
      error.textContent = "All fields are required!";
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      error.textContent = "Please enter a valid email address.";
      return;
    }
  
    error.textContent = "";
    alert("Form submitted successfully!");
    this.reset();
  });
  
  // To-Do List logic
  function addTodo() {
    const input = document.getElementById("todoInput");
    const task = input.value.trim();
    if (!task) return;
  
    const li = document.createElement("li");
    li.textContent = task;
  
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = () => li.remove();
  
    li.appendChild(btn);
    document.getElementById("todoList").appendChild(li);
  
    input.value = "";
  }