// ===== MENU HAMBÚRGUER =====

const botaoMenu = document.querySelector(".menu-hamburguer");
const menu = document.querySelector("nav > ul.menu");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("menu-aberto");
    });
}

// ===== FORMULÁRIO =====

const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");
const formulario = document.getElementById("formCadastro");
const email = document.getElementById("email");
const mensagemFeedback = document.getElementById("mensagemFeedback");
const toast = document.getElementById("toast");

// Máscara do CPF
if (cpf) {
    cpf.addEventListener("input", function () {
        let valor = cpf.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        cpf.value = valor;

if (validarCPF(valor.replace(/\D/g, ""))) {
    cpf.classList.add("campo-valido");
    cpf.classList.remove("campo-invalido");
} else {
    cpf.classList.add("campo-invalido");
    cpf.classList.remove("campo-valido");
}
    });
}

// Máscara do telefone
if (telefone) {
    telefone.addEventListener("input", function () {
        let valor = telefone.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        if (valor.length <= 10) {
            valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
            valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
        } else {
            valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
            valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
        }

        telefone.value = valor;

if (valor.replace(/\D/g, "").length === 10 || valor.replace(/\D/g, "").length === 11) {
    telefone.classList.add("campo-valido");
    telefone.classList.remove("campo-invalido");
} else {
    telefone.classList.add("campo-invalido");
    telefone.classList.remove("campo-valido");
}
    });
}

// Máscara do CEP
if (cep) {
    cep.addEventListener("input", function () {
        let valor = cep.value.replace(/\D/g, "");

        valor = valor.substring(0, 8);

        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

        cep.value = valor;

if (valor.replace(/\D/g, "").length === 8) {
    cep.classList.add("campo-valido");
    cep.classList.remove("campo-invalido");
} else {
    cep.classList.add("campo-invalido");
    cep.classList.remove("campo-valido");
}
    });
}

// Validação do CPF
function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    if (resto !== Number(cpf[9])) {
        return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    return resto === Number(cpf[10]);
}

// Validação do formulário

if (email) {
    email.addEventListener("input", function () {
        if (email.validity.valid) {
            email.classList.add("campo-valido");
            email.classList.remove("campo-invalido");
        } else {
            email.classList.add("campo-invalido");
            email.classList.remove("campo-valido");
        }
    });
}

const camposObrigatorios = document.querySelectorAll(
    "#nome, #endereco, #cidade, #estado, #interesse, #mensagem"
);

camposObrigatorios.forEach(function (campo) {
    campo.addEventListener("input", function () {
        if (campo.value.trim() !== "") {
            campo.classList.add("campo-valido");
            campo.classList.remove("campo-invalido");
        } else {
            campo.classList.add("campo-invalido");
            campo.classList.remove("campo-valido");
        }
    });
});

if (formulario) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const cpfNumeros = cpf.value.replace(/\D/g, "");

        if (!validarCPF(cpfNumeros)) {
            mensagemFeedback.textContent = "Digite um CPF válido.";
            mensagemFeedback.className = "alerta erro";
            cpf.focus();
            return;
        }

        const telefoneNumeros = telefone.value.replace(/\D/g, "");

        if (telefoneNumeros.length !== 10 && telefoneNumeros.length !== 11) {
            mensagemFeedback.textContent = "Digite um telefone válido.";
            mensagemFeedback.className = "alerta erro";
            telefone.focus();
            return;
        }

        const cepNumeros = cep.value.replace(/\D/g, "");

        if (cepNumeros.length !== 8) {
            mensagemFeedback.textContent = "Digite um CEP válido.";
            mensagemFeedback.className = "alerta erro";
            cep.focus();
            return;
        }

        mensagemFeedback.textContent = "Cadastro enviado com sucesso!";
        mensagemFeedback.className = "alerta sucesso";

      if (toast) {
          toast.textContent = "Cadastro realizado com sucesso!";
          toast.classList.add("mostrar");

          setTimeout(function () {
          toast.classList.remove("mostrar");
          }, 3000);
        }
    });
}

const botaoProjetos = document.querySelector(".menu-dropdown > a");
const submenu = document.querySelector(".menu-dropdown > .submenu");

if (botaoProjetos && submenu) {
    botaoProjetos.addEventListener("click", function (event) {
        event.preventDefault();
        submenu.classList.toggle("submenu-aberto");
    });
}