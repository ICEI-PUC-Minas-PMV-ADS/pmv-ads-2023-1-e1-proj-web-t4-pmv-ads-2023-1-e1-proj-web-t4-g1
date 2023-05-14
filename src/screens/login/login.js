const signUpForm = document.querySelector(".signup form");
const emailInput = signUpForm.querySelector(".email");
const nameInput = signUpForm.querySelector(".cpf");
const passwordInput = signUpForm.querySelector(".password");
showOrHidePassword = document.querySelectorAll(".eye-icon");
links = document.querySelectorAll(".link");


signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const name = nameInput.value;
    const password = passwordInput.value;

    const isValid = validateFormData(email, name, password);

    if (isValid) {
        alert("Cadastro realizado com sucesso!");
        signUpForm.reset();
    } else {
        alert("Erro ao criar conta. Tente novamente mais tarde.");
    }

})

function validateFormData(email, name, password) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        return false;
    }

    if (name.length < 3) {
        return false;
    }

    if (password.length < 6) {
        return false;
    }

    return true;
}


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
