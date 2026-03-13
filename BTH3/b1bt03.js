// 1. querySelector chọn 1 phần tử đầu tiên phù hợp
const firstParagraph = document.querySelector(".desc");
console.log("querySelector('.desc'):", firstParagraph);

// 2. querySelectorAll lấy danh sách nhiều phần tử
const allParagraphs = document.querySelectorAll(".desc");
console.log("querySelectorAll('.desc'):", allParagraphs);

// 3. getElementById lấy phần tử theo id
const title = document.getElementById("main-title");
console.log("getElementById('main-title'):", title);

// 4. Ví dụ duyệt qua danh sách phần tử
allParagraphs.forEach(function (item, index) {
  console.log("Phần tử thứ", index + 1, ":", item.textContent);
});

// 5. Gắn sự kiện nút để test
const btnTest = document.getElementById("btnTest");

btnTest.addEventListener("click", function () {
  console.log("Bạn vừa nhấn nút Kiểm tra Console");
  console.log("Tiêu đề là:", title.textContent);
});