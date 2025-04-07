const secretAdminCode = "admin123";

async function checkEmail() {
  const email = document.getElementById("emailInput").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");

  // Nếu nhập mã admin
  if (email === secretAdminCode) {
    document.getElementById("adminPanel").classList.remove("hidden");
    resultDiv.innerText = "🔐 Đã vào chế độ admin.";
    return;
  }

  try {
    const response = await fetch(`https://household-be.onrender.com/api/get-code?email=${email}`);
    if (!response.ok) {
      const errorData = await response.json();
      resultDiv.innerText = `❌ ${errorData.message}`;
      return;
    }

    const data = await response.json();
    resultDiv.innerText = `✅ Mã xác minh mới nhất: ${data.code}`;
  } catch (error) {
    console.error("Lỗi kết nối:", error);
    resultDiv.innerText = "❌ Đã xảy ra lỗi khi kết nối đến máy chủ.";
  }
}

function updateCode() {
  const newCode = document.getElementById("newCode").value.trim();
  if (newCode.length > 0) {
    data.code = newCode;
    alert("✅ Mã đã được cập nhật!");
  }
}
