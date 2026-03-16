// 1. Click event listener
const myBtn = document.getElementById("myBtn");
const clickResult = document.getElementById("clickResult");

myBtn.addEventListener("click", function () {
  clickResult.textContent = "Bạn vừa bấm nút!";
});

// 2. Keyboard event listener
const keyboardInput = document.getElementById("keyboardInput");
const keyResult = document.getElementById("keyResult");

keyboardInput.addEventListener("keydown", function (event) {
  keyResult.textContent = `Bạn vừa nhấn phím: ${event.key}`;
});

// 3. Submit form + ngăn load lại trang
const myForm = document.getElementById("myForm");
const nameInput = document.getElementById("nameInput");
const formResult = document.getElementById("formResult");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formResult.textContent = `Form đã gửi. Xin chào, ${nameInput.value}!`;
});

// 4. Kiểm tra bubbling
const outerBox = document.getElementById("outerBox");
const innerBox = document.getElementById("innerBox");

outerBox.addEventListener("click", function () {
  alert("Bạn vừa click OUTER");
});

innerBox.addEventListener("click", function (event) {
  alert("Bạn vừa click INNER");
  // event.stopPropagation(); // bỏ comment để chặn bubbling
});

// 5. Event delegation cho UL/LI
const todoList = document.getElementById("todoList");

todoList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    alert("Bạn chọn: " + event.target.textContent);
  }
});