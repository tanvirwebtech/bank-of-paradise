document.getElementById("login-submit").addEventListener("click", function () {
    const userName = document.getElementById("username").value;

    const userPass = document.getElementById("password").value;
    if (userName == "tanvirwebtech" && userPass == "123456") {
        window.location.href = "banking.html";
    } else {
        document.getElementById("error-msg").classList.remove("hidden");
    }
});
