function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada encontrado, digite um valor válido</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let noticia of dados) {
        titulo = noticia.titulo.toLowerCase()
        descricao = noticia.descricao.toLowerCase()
        tags = noticia.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${noticia.titulo}</a>
                </h2>
                <p class="descricao-meta">${noticia.descricao}</p>
                <a href=${noticia.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

function carregarNoticias() {
    let section = document.getElementById("carregar-noticias");
    let html = ""; // Inicializa uma string para armazenar o HTML das notícias
  
    for (let noticia of dados) {
      html += `
        <div class="item-resultado">
          <h2>
            <a href="${noticia.link}" target="_blank">${noticia.titulo}</a>
          </h2>
          <p class="descricao-meta">${noticia.descricao}</p>
          <a href="${noticia.link}" target="_blank">Veja a matéria completa aqui</a>
        </div>
      `;
    }
  
    section.innerHTML = html; // Atribui todo o HTML gerado à seção de uma vez
}

// Chama a função carregarNoticias assim que a página for carregada
window.onload = carregarNoticias;
