const botaoIndex = document.getElementById("botaoIndex");
const botaoEmpresa = document.getElementById("botaoEmpresa");
const enviaProposta = document.getElementById("enviaProposta");

const botaoVoltar = document.getElementById("voltar")

let paginaAtual = 1

botaoIndex.addEventListener("click",function() {
    if (paginaAtual === 1){
        window.location.href = "pages/empresa/empresa.html";
        paginaAtual = 2
    }
});

botaoEmpresa.addEventListener("click", function() {
    if (paginaAtual === 2) {
        // Redirecione para a próxima página
        window.location.href = "pages/contato/contato.html";
        paginaAtual = 3;
    }
});
