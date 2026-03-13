const myImage = document.getElementById("myImage");
const message = document.getElementById("message");

const btnChangeImg = document.getElementById("btnChangeImg");
const btnAddClass = document.getElementById("btnAddClass");
const btnRemoveClass = document.getElementById("btnRemoveClass");
const btnToggle = document.getElementById("btnToggle");
const btnCheck = document.getElementById("btnCheck");

// 1. Thay đổi thuộc tính src của thẻ img
btnChangeImg.addEventListener("click", function () {
  myImage.src = "https://via.placeholder.com/250x150?text=Anh+Moi";
  myImage.alt = "Ảnh mới";
  console.log("Đã đổi ảnh");
});

// 2. Thêm class bằng classList.add()
btnAddClass.addEventListener("click", function () {
  message.classList.add("highlight");
  console.log("Đã thêm class highlight");
});

// 3. Xóa class bằng classList.remove()
btnRemoveClass.addEventListener("click", function () {
  message.classList.remove("highlight");
  console.log("Đã xóa class highlight");
});

// 4. Bật/tắt class bằng classList.toggle()
btnToggle.addEventListener("click", function () {
  message.classList.toggle("hidden");
  console.log("Đã toggle class hidden");
});

// 5. Kiểm tra class bằng classList.contains()
btnCheck.addEventListener("click", function () {
  if (message.classList.contains("highlight")) {
    console.log("Đoạn văn đang có class highlight");
  } else {
    console.log("Đoạn văn chưa có class highlight");
  }
});