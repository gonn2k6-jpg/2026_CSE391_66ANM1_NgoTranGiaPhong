const fullnameInput = document.getElementById("fullname");
const scoreInput = document.getElementById("score");
const btnAdd = document.getElementById("btnAdd");
const searchInput = document.getElementById("search");
const filterRank = document.getElementById("filterRank");
const scoreHeader = document.getElementById("scoreHeader");
const tbody = document.getElementById("studentTableBody");
const stats = document.getElementById("stats");

const students = [];
let filteredStudents = [];
let sortOrder = null;

function getRank(score) {
  if (score >= 8.5) return "Giỏi";
  if (score >= 7.0) return "Khá";
  if (score >= 5.0) return "Trung bình";
  return "Yếu";
}

function updateStats(list) {
  const total = list.length;
  const avg = total === 0 ? 0 : list.reduce((sum, s) => sum + s.score, 0) / total;
  stats.textContent = `Tổng SV: ${total} | Điểm TB: ${avg.toFixed(2)}`;
}

function renderTable(list) {
  tbody.innerHTML = "";

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="no-result">Không có kết quả</td></tr>`;
    updateStats([]);
    return;
  }

  list.forEach((student, index) => {
    const realIndex = students.indexOf(student);
    const tr = document.createElement("tr");

    if (student.score < 5) {
      tr.classList.add("low-score");
    }

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.fullname}</td>
      <td>${student.score.toFixed(1)}</td>
      <td>${getRank(student.score)}</td>
      <td><button class="btn-delete" data-index="${realIndex}">Xóa</button></td>
    `;

    tbody.appendChild(tr);
  });

  updateStats(list);
}

function applyFilters() {
  const keyword = searchInput.value.trim().toLowerCase();
  const rank = filterRank.value;

  filteredStudents = students.filter(student => {
    const matchName = student.fullname.toLowerCase().includes(keyword);
    const matchRank = rank === "all" || getRank(student.score) === rank;
    return matchName && matchRank;
  });

  if (sortOrder === "asc") {
    filteredStudents.sort((a, b) => a.score - b.score);
  } else if (sortOrder === "desc") {
    filteredStudents.sort((a, b) => b.score - a.score);
  }

  scoreHeader.textContent = "Điểm";
  if (sortOrder === "asc") scoreHeader.textContent += " ▲";
  if (sortOrder === "desc") scoreHeader.textContent += " ▼";

  renderTable(filteredStudents);
}

function addStudent() {
  const fullname = fullnameInput.value.trim();
  const score = Number(scoreInput.value);

  if (fullname === "") {
    alert("Họ tên không được để trống!");
    return;
  }

  if (isNaN(score) || score < 0 || score > 10) {
    alert("Điểm phải từ 0 đến 10!");
    return;
  }

  students.push({ fullname, score });

  fullnameInput.value = "";
  scoreInput.value = "";
  fullnameInput.focus();

  applyFilters();
}

btnAdd.addEventListener("click", addStudent);

scoreInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addStudent();
  }
});

searchInput.addEventListener("input", applyFilters);
filterRank.addEventListener("change", applyFilters);

scoreHeader.addEventListener("click", function () {
  if (sortOrder === null) sortOrder = "asc";
  else if (sortOrder === "asc") sortOrder = "desc";
  else sortOrder = "asc";

  applyFilters();
});

tbody.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-delete")) {
    const index = Number(e.target.dataset.index);
    students.splice(index, 1);
    applyFilters();
  }
});