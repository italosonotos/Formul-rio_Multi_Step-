function proximaPagina(){
    const localizacao = window.location.href ="index.html";

    if (localizacao == "index.html"){
        localizacao = window.location.href = "pages/empresa/empresa.html";
    } 
}

function voltarPagina(){
    const localizacao = window.location.href = "pages/empresa/empresa.html"
    
    if (localizacao == "pages/empresa/empresa.html"){
        localizacao = window.location.href = "index.html";
    }
}
