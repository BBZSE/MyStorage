const password = "1234"; // 원하는 비밀번호로 변경하세요
const input = prompt("비밀번호를 입력하세요:");
if (input !== password) {
  document.body.innerHTML = "<h2>🚫 접근이 차단되었습니다.</h2>";
}
