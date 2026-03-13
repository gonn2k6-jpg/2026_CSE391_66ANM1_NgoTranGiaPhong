const title = document.getElementById("title");
const contentBox = document.getElementById("content-box");
const myList = document.getElementById("myList");
const btnChange = document.getElementById("btnChange");

btnChange.addEventListener("click", function () {
  // 1. Thay đổi văn bản tiêu đề bằng textContent
  title.textContent = "Tiêu đề đã được thay đổi bằng textContent";

  // 2. Chèn thêm mã HTML vào div bằng innerHTML
  contentBox.innerHTML = `
    <h2>Nội dung mới</h2>
    <p>Đây là đoạn văn được chèn bằng <b>innerHTML</b>.</p>
  `;

  // 3. Tạo thẻ li mới bằng createElement
  const newItem = document.createElement("li");
  newItem.textContent = "Mục 3 mới";

  // 4. Append phần tử vừa tạo vào ul
  myList.appendChild(newItem);

  // 5. Xóa một phần tử bằng remove()
  const item1 = document.getElementById("item1");
  if (item1) {
    item1.remove();
  }

  console.log("Đã thay đổi tiêu đề, chèn HTML, thêm và xóa phần tử.");
});