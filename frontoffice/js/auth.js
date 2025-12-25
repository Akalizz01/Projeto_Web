// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const res = await apiPost("/auth/login", { email, password });

        if (res.token) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("user", JSON.stringify(res.user));
            window.location.href = "index.html";
        } else {
            alert(res.error || "Credenciais inválidas");
        }
    });
}

// REGISTO
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const res = await apiPost("/auth/register", { nome, email, password });

        if (res.message) {
            alert("Conta criada com sucesso! Já podes fazer login.");
            window.location.href = "login.html";
        } else {
            alert(res.error || "Erro ao criar conta");
        }
    });
}
