export function salvarCadastro(dados) {
    localStorage.setItem(
        "cadastroVoluntario",
        JSON.stringify(dados)
    );
}