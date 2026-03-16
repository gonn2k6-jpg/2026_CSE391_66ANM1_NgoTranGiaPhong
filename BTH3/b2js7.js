// 1. Tạo Promise mô phỏng lấy dữ liệu delay 2s
function layDuLieu() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const thanhCong = true;

      if (thanhCong) {
        resolve({ id: 1, ten: "Gon Gon", lop: "JavaScript" });
      } else {
        reject("Lỗi: Không lấy được dữ liệu");
      }
    }, 2000);
  });
}

// 5. Chuyển callback sang Promise
function tinhTongCallback(a, b, callback) {
  setTimeout(() => {
    if (typeof a !== "number" || typeof b !== "number") {
      callback("Dữ liệu không hợp lệ", null);
    } else {
      callback(null, a + b);
    }
  }, 1000);
}

function tinhTongPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject("Dữ liệu không hợp lệ");
      } else {
        resolve(a + b);
      }
    }, 1000);
  });
}

document.getElementById("startBtn").addEventListener("click", () => {
  console.clear();
  console.log("Bắt đầu chạy bài Promise...");

  // 2. Dùng .then() và .catch()
  layDuLieu()
    .then((data) => {
      console.log("Bước 1 - Lấy dữ liệu thành công:", data);

      // 3. Chain promises qua nhiều bước xử lý
      return data.ten;
    })
    .then((ten) => {
      console.log("Bước 2 - Lấy tên:", ten);
      return ten.toUpperCase();
    })
    .then((tenHoa) => {
      console.log("Bước 3 - Chuyển tên in hoa:", tenHoa);

      // 4. Mô phỏng lỗi để catch xử lý tập trung
      throw new Error("Lỗi phát sinh ở bước xử lý tiếp theo");
    })
    .then((ketQua) => {
      console.log("Bước 4:", ketQua);
    })
    .catch((error) => {
      console.log("Catch lỗi tập trung:", error.message || error);
    });

  // 5. Demo callback cũ
  tinhTongCallback(5, 7, (err, result) => {
    if (err) {
      console.log("Callback lỗi:", err);
    } else {
      console.log("Callback kết quả:", result);
    }
  });

  // 5. Demo Promise mới
  tinhTongPromise(5, 7)
    .then((result) => {
      console.log("Promise kết quả:", result);
    })
    .catch((error) => {
      console.log("Promise lỗi:", error);
    });
});