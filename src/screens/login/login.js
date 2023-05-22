const signUpForm = document.querySelector(".signup form");
const emailInput = signUpForm.querySelector(".email");
const nameInput = signUpForm.querySelector(".cpf");
const passwordInput = signUpForm.querySelector(".password");
const showOrHidePassword = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const name = nameInput.value;
    const password = passwordInput.value;

    const validationResult = validateFormData(email, name, password);


    if (validationResult.isValid) {
        navigateToHome('http://127.0.0.1:5500/src/screens/home/home.html');
        signUpForm.reset();
    } else {
        alert(`Erro ao criar conta. Motivo: ${validationResult.error}`);
    }
});

function navigateToHome(url) {
    window.location.href = url;
}

function validateFormData(email, name, password) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        return {
            isValid: false,
            error: "O email fornecido é inválido."
        };
    }

    if (name.length < 3) {
        return {
            isValid: false,
            error: "O nome deve ter pelo menos 3 caracteres."
        };
    }

    if (password.length < 6) {
        return {
            isValid: false,
            error: "A senha deve ter pelo menos 6 caracteres."
        };
    }

    return {
        isValid: true,
        error: null
    };
}

showOrHidePassword.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let passwordFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        passwordFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
            } else {
                password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            }
        });
    });
});
