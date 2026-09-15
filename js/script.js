import { configurarFormulario } from "./formulario.js";

// ===== MENU HAMBÚRGUER =====

const botaoMenu = document.querySelector(".menu-hamburguer");
const menu = document.querySelector("nav > ul.menu");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function () {
        menu.classList.toggle("menu-aberto");
    });
}

// ===== FORMULÁRIO =====

// Validação do CPF



/// ===== SPA =====

const app = document.getElementById("app");

// Navegação sem recarregar a página
document.addEventListener("click", function (event) {
    const link = event.target.closest("a");

    if (!link) return;

    const destino = link.getAttribute("href");

    if (
        !destino ||
        destino.startsWith("#") ||
        destino.startsWith("http") ||
        link.classList.contains("menu-dropdown")
    ) {
        return;
    }

    if (
        destino === "index.html" ||
        destino === "projetos.html" ||
        destino === "cadastro.html"
    ) {
        event.preventDefault();

        history.pushState({}, "", destino);

        carregarPagina();
    }
});

window.addEventListener("popstate", function () {
    carregarPagina();
});

function carregarPagina() {
    if (!app) return;

    const pagina = window.location.pathname;

    if (pagina.includes("projetos.html")) {
        carregarProjetos();
    } else if (pagina.includes("cadastro.html")) {
        carregarCadastro();
    } else {
        carregarInicio();
    }
}

function carregarProjetos() {
    if (!app) return;

    app.innerHTML = `
        <section>
            <h2>Nossas iniciativas</h2>
            <p>
                Conheça os projetos desenvolvidos pela ONG Esperança
                para apoiar a comunidade e promover oportunidades.
            </p>
        </section>

        <section class="projeto-card">
            <h2>Projeto Educação</h2>
            <span class="badge">Educação</span>
            <p>
                O projeto oferece apoio educacional para crianças e jovens,
                contribuindo para o desenvolvimento e o acesso à educação.
            </p>
        </section>

        <section class="projeto-card">
            <h2>Projeto Solidariedade</h2>
            <span class="badge">Arrecadação</span>
            <p>
                A iniciativa arrecada e distribui alimentos, roupas e outros
                itens essenciais para pessoas e famílias que precisam de apoio.
            </p>
        </section>

        <section class="projeto-card">
            <h2>Projeto Voluntariado</h2>
            <span class="badge">Voluntariado</span>
            <p>
                O projeto reúne voluntários interessados em contribuir
                com ações sociais e atividades realizadas pela organização.
            </p>
        </section>
    `;
}

function carregarCadastro() {
    if (!app) return;

    app.innerHTML = `
        <section>
            <h2>Seja voluntário</h2>
            <p>
                Preencha o formulário abaixo para se cadastrar
                como voluntário da ONG Esperança.
            </p>
        </section>

        <form id="formCadastro">

            <div id="mensagemFeedback" class="alerta" role="alert"></div>

            <fieldset>
                <legend>Dados do voluntário</legend>

                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" required>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>

                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" maxlength="14" inputmode="numeric" pattern="[0-9.\\-]+" required>

                <label for="telefone">Telefone:</label>
                <input type="tel" id="telefone" name="telefone" maxlength="15" inputmode="numeric" required>
              
                <label for="cep">CEP:</label>
                <input type="text" id="cep" name="cep" maxlength="9" inputmode="numeric" required>

                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required>

                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" required>

                <label for="estado">Estado:</label>
                <input type="text" id="estado" name="estado" maxlength="2" required>

                <label for="interesse">Área de interesse:</label>
                <select id="interesse" name="interesse" required>
                    <option value="">Selecione uma opção</option>
                    <option value="educacao">Educação</option>
                    <option value="arrecadacao">Arrecadação de doações</option>
                    <option value="eventos">Eventos e ações sociais</option>
                    <option value="comunicacao">Comunicação</option>
                </select>

                <label for="mensagem">Por que você quer ser voluntário?</label>
                <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

                <button type="submit">Enviar cadastro</button>

            </fieldset>

        </form>
    `;

    configurarFormulario();
}

function carregarInicio() {
    if (!app) return;

    app.innerHTML = `
        <section>
            <h2>Quem somos</h2>

            <img src="../imagens/ong.jpg" alt="Mãos unidas representando solidariedade e colaboração">

            <p>
                A ONG Esperança é uma organização dedicada a promover
                ações sociais e apoiar pessoas em situação de vulnerabilidade.
            </p>
        </section>

        <section>
            <h2>Nossa missão</h2>
            <p>
                Nossa missão é contribuir para uma sociedade mais solidária,
                oferecendo apoio e oportunidades para quem mais precisa.
            </p>
        </section>

        <section>
            <h2>Como ajudar</h2>
            <p>
                Você pode contribuir com a ONG Esperança participando
                de nossas iniciativas, realizando doações ou tornando-se
                um voluntário.
            </p>
        </section>

        <section>
            <h2>Entre em contato</h2>

            <p>E-mail: contato@ongesperanca.com</p>
            <p>Telefone: (11) 99999-9999</p>
            <p>Endereço: Rua da Esperança, 100 - São Paulo - SP</p>
        </section>
    `;
}

carregarPagina();

const botaoTema = document.getElementById("btn-tema");

    if (botaoTema) {
    const temaSalvo = localStorage.getItem("modoEscuro");

    if (temaSalvo === "ativado") {
        document.documentElement.classList.add("modo-escuro");
        botaoTema.textContent = "☀️ Modo claro";
        botaoTema.setAttribute("aria-label", "Desativar modo escuro");
    }

    botaoTema.addEventListener("click", function () {
        document.documentElement.classList.toggle("modo-escuro");

        const modoAtivado = document.documentElement.classList.contains("modo-escuro");

        if (modoAtivado) {
            localStorage.setItem("modoEscuro", "ativado");
            botaoTema.textContent = "☀️ Modo claro";
            botaoTema.setAttribute("aria-label", "Desativar modo escuro");
        } else {
            localStorage.setItem("modoEscuro", "desativado");
            botaoTema.textContent = "🌙 Modo escuro";
            botaoTema.setAttribute("aria-label", "Ativar modo escuro");
        }
    });
}