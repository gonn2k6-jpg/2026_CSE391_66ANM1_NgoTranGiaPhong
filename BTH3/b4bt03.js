const myButton = document.getElementById("myButton");
const status = document.getElementById("status");
const hoverBox = document.getElementById("hoverBox");

// 1. Gắn sự kiện click cho nút bấm
myButton.addEventListener("click", function () {
  status.textContent = "Bạn vừa click vào nút!";
});

// 2. Gắn thêm một listener khác cho cùng 1 phần tử
myButton.addEventListener("click", function () {
  console.log("Nút đã được nhấn");
});

// 3. Toggle class để đổi màu nền khi click nút
myButton.addEventListener("click", function () {
  myButton.classList.toggle("active");
});

// 4. Lắng nghe sự kiện mouseenter
hoverBox.addEventListener("mouseenter", function () {
  hoverBox.textContent = "Chuột đang ở داخل box";
  hoverBox.classList.add("hovered");
});

// 5. Lắng nghe sự kiện mouseleave
hoverBox.addEventListener("mouseleave", function () {
  hoverBox.textContent = "Di chuột vào đây";
  hoverBox.classList.remove("hovered");
});