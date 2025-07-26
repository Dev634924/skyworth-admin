
function validateLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.username.trim().toLowerCase() === username.toLowerCase() && u.password === password);

  if (user) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loggedInUser', user.name || user.username);
    errorMsg.style.display = 'none';
    window.location.href = 'admin.html';
    return false;
  } else {
    errorMsg.textContent = 'Invalid username or password!';
    errorMsg.style.display = 'block';
    return false;
  }
}

const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eyeIcon');

// SVGs for eye (open) and eye-slash (closed)
const eyeOpenSVG = `<svg id="eyeOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`;
const eyeSlashSVG = `<svg id="eyeSlash" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.293-3.95M6.634 6.634A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.973 9.973 0 01-4.293 5.01M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18"/></svg>`;

if (togglePassword && passwordInput && eyeIcon) {
  togglePassword.onclick = function() {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.innerHTML = eyeSlashSVG;
    } else {
      passwordInput.type = 'password';
      eyeIcon.innerHTML = eyeOpenSVG;
    }
  };
} 
(function setDefaultAdminUser() {
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.length === 0) {
    users.push({
      name: "Administrator",
      username: "admin",
      password: "admin123"
    });
    localStorage.setItem("users", JSON.stringify(users));
  }
})();