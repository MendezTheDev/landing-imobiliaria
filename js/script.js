const headerSite = document.querySelector("[data-header-site]");
const headerNavegacao = document.querySelector("[data-header-navegacao]");
const headerBotaoMenu = document.querySelector("[data-header-botao-menu]");
const deltaFormularios = document.querySelectorAll("form");

function headerSincronizar() {
    const headerRolado = window.scrollY > 12;
    headerSite.classList.toggle("header-rolado", headerRolado);
}

headerBotaoMenu.addEventListener("click", () => {
    const headerNavegacaoAberta = headerNavegacao.classList.toggle("header-navegacao-aberta");

    headerBotaoMenu.setAttribute("aria-expanded", String(headerNavegacaoAberta));
    headerSite.classList.toggle("header-menu-ativo", headerNavegacaoAberta);
    document.body.classList.toggle("delta-menu-aberto", headerNavegacaoAberta);
});

headerNavegacao.addEventListener("click", (event) => {
    if (event.target.tagName !== "A") {
        return;
    }

    headerNavegacao.classList.remove("header-navegacao-aberta");
    headerSite.classList.remove("header-menu-ativo");
    document.body.classList.remove("delta-menu-aberto");
    headerBotaoMenu.setAttribute("aria-expanded", "false");
});

deltaFormularios.forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Obrigado! Em breve um consultor entrara em contato.");
        form.reset();
    });
});

headerSincronizar();
window.addEventListener("scroll", headerSincronizar);
