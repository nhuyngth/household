const secretAdminCode = "admin123";

function checkEmail() {
  const email = document.getElementById("emailInput").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");

  if (email === secretAdminCode) {
    document.getElementById("adminPanel").classList.remove("hidden");
    resultDiv.innerText = "🔐 Đã vào chế độ admin.";
    return;
  }

  if (data.allowedEmails.includes(email)) {
    resultDiv.innerText = `✅ Mã xác minh hiện tại là: ${data.code}`;
  } else {
    resultDiv.innerText = "❌ Email không có trong danh sách được phép.";
  }
}

function updateCode() {
  const newCode = document.getElementById("newCode").value.trim();
  if (newCode.length > 0) {
    data.code = newCode;
    alert("✅ Mã đã được cập nhật!");
  }
}
