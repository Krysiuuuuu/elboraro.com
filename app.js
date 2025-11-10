document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const passwordInput = document.getElementById("passwordInput");
  const output = document.getElementById("output");

  if (loginForm && passwordInput && output) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from submitting

      const password = passwordInput.value.trim();

      switch (password) {
        case "G(*4#":
          output.textContent = "Logged in";
          break;
        case ";UUNX":
          output.textContent = "Logged in (w)";
          break;
        case "vsu6r4":
          output.textContent = "Relogged in~1n";
          break;
        case "rwga?nh":
          output.textContent = "555. They are.";
          break;
        default:
          output.textContent = "Invalid password.";
      }
    });
  } else {
    console.error("loginForm, passwordInput, or output element not found in the DOM.");
  }
});
