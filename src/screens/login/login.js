showOrHidePassword = document.querySelectorAll(".eye-icon");
links = document.querySelectorAll(".link");

showOrHidePassword.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let passwordFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        passwordFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        });
    });
});
