let isLogin = true;

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const actionBtn = document.getElementById("actionBtn");
const toggleBtn = document.getElementById("toggleBtn");

const title = document.createElement("h2");
form.prepend(title);

function render() {
    if (isLogin) {
        title.innerText = "Login";
        username.placeholder = "Usuário";
        password.placeholder = "Senha";
        actionBtn.innerText = "Entrar";
        toggleBtn.innerText = "Não tem conta? Cadastre-se";
    } else {
        title.innerText = "Cadastro";
        username.placeholder = "Novo usuário";
        password.placeholder = "Nova senha";
        actionBtn.innerText = "Cadastrar";
        toggleBtn.innerText = "Já tem conta? Faça login";
    }
}

toggleBtn.addEventListener("click", () => {
    isLogin = !isLogin;
    render();
});

actionBtn.addEventListener("click", () => {
    if (isLogin) {
        alert("Login realizado (simulação)");
    } else {
        alert("Cadastro realizado (simulação)");
    }
});

render();
