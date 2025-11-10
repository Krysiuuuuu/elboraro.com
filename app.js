document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents 405 error

  const password = document.getElementById("passwordInput").value;
  const output = document.getElementById("output");

  switch (password) {
    case "G(*4#":
      output.textContent = "Logged in";
      break;
    case ";UUNX":
      output.textContent = "|\\logedd in w";
      break;
    case "vsu6r4":
      output.textContent = "reLOGEDD IN~1n";
      break;
    case "rwga?nh":
      output.textContent = "555. They are.";
      break;
    default:
      output.textContent = "Invalid password.";
  }
});
