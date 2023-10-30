
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
</head>
<body>
    <h1>Login Page</h1>
    <form id="login-form">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>

        <button type="submit">Login</button>
    </form>

    <p id="message"></p>

    <script>
        const loginForm = document.getElementById("login-form");
        const messageText = document.getElementById("message");

        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const password = loginForm.elements.password.value;

            if (password === "Password1!") {
                messageText.textContent = "Login successful.";
            } else {
                messageText.textContent = "Incorrect password.";
            }
        });
    </script>
</body>
</html>
