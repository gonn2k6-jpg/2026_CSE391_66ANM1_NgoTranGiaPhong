const fullnameInput = document.getElementById("fullname");
const scoreInput = document.getElementById("score");
const btnAdd = document.getElementById("btnAdd");
const tbody = document.getElementById("studentTableBody");
const stats = document.getElementById("stats");

const students = [];

function getRank(score) {
  if (score >= 8.5) return "Giỏi";
  if (score >= 7.0) return "Khá";
  if (score >= 5.0) return "Trung bình";
  return "Yếu";
}

function updateStats() {
  const total = students.length;
  const avg = total === 0
    ? 0
    : students.reduce((sum, student) => sum + student.score, 0) / total;

  stats.textContent = `Tổng SV: ${total} | Điểm TB: ${avg.toFixed(2)}`;
}

function renderTable() {
  tbody.innerHTML = "";

  students.forEach((student, index) => {
    const tr = document.createElement("tr");

    if (student.score < 5) {
      tr.classList.add("low-score");
    }

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.fullname}</td>
      <td>${student.score.toFixed(1)}</td>
      <td>${getRank(student.score)}</td>
      <td><button class="btn-delete" data-index="${index}">Xóa</button></td>
    `;

    tbody.appendChild(tr);
  });

  updateStats();
}

function addStudent() {
  const fullname = fullnameInput.value.trim();
  const score = Number(scoreInput.value);

  if (fullname === "") {
    alert("Họ tên không được để trống!");
    fullnameInput.focus();
    return;
  }

  if (isNaN(score) || score < 0 || score > 10) {
    alert("Điểm phải từ 0 đến 10!");
    scoreInput.focus();
    return;
  }

  students.push({ fullname, score });

  renderTable();

  fullnameInput.value = "";
  scoreInput.value = "";
  fullnameInput.focus();
}

btnAdd.addEventListener("click", addStudent);

scoreInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addStudent();
  }
});

tbody.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-delete")) {
    const index = Number(e.target.dataset.index);
    students.splice(index, 1);
    renderTable();
  }
});