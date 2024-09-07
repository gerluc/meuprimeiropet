// Get the input field
var input = document.getElementById("campo-pesquisa");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("botao-pesquisa").click();
  }
});

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p class=\"msg\">Você precisa escrever o que procura no campo acima</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    let palavrasPesquisa = campoPesquisa.split(" ");

    // Inicializa uma string vazia para armazenar os resultados
    let dadoPesquisavel = "";
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let cachorro of racasCachorros) {
        dadoPesquisavel = cachorro.raca.toLowerCase()
                        + " " + cachorro.temperamento.toLowerCase()
                        + " " + cachorro.nivelDeAtividade.toLowerCase()
                        + " " + cachorro.necessidadeDeEspaco.toLowerCase()
                        + " " + cachorro.atencao.toLowerCase()
                        + " " + cachorro.companhiaOuSeguranca.toLowerCase()
                        + " " + cachorro.idealPara.toLowerCase()
                        + " " + cachorro.pontosDeAtencao.toLowerCase();
            for(let palavra of palavrasPesquisa){
            // se dadoPesquisavel includes campoPesquisa
                if (dadoPesquisavel.includes(palavra)) {
                    // cria um novo elemento
                    url = buscarImagem(cachorro.id);
                    resultados += `
                    <div class="card">
                        <img src="${url}" alt="Imagem do pet">
                        <h2 class="cachorro">${cachorro.raca}</h2>
                        <table>
                            <tr>
                                <td>Expectativa de Vida</td>
                                <td>${cachorro.expectativaDeVida} anos</td>
                            </tr>
                            <tr>
                                <td>Altura</td>
                                <td>${cachorro.altura} cm</td>
                            </tr>
                            <tr>
                                <td>Peso</td>
                                <td>${cachorro.peso} Kg</td>
                            </tr>
                            <tr>
                                <td>Temperamento</td>
                                <td>${cachorro.temperamento}</td>
                            </tr>
                            <tr>
                                <td>Nível de Atividade</td>
                                <td>${cachorro.nivelDeAtividade}</td>
                            </tr>
                            <tr>
                                <td>Necessidade de Espaço</td>
                                <td>${cachorro.necessidadeDeEspaco}</td>
                            </tr>
                            <tr>
                                <td>Necessidade de Atenção</td>
                                <td>${cachorro.atencao}</td>
                            </tr>
                            <tr>
                                <td>Companhia ou Segurança?</td>
                                <td>${cachorro.companhiaOuSeguranca}</td>
                            </tr>
                            <tr>
                                <td>Ideal Para</td>
                                <td>${cachorro.idealPara}</td>
                            </tr>
                            <tr>
                                <td>Pontos de Atenção</td>
                                <td>${cachorro.pontosDeAtencao}</td>
                            </tr>
                        </table>
                    </div>
                `;
                }
            }

    }
    // Itera sobre cada dado da lista de dados
    for (let gato of racasGatos) {
        dadoPesquisavel = gato.raca.toLowerCase()
                        + " " + (!gato.temperamento ? "" : gato.temperamento.toLowerCase())
                        + " " + (!gato.tamanho ? "" : gato.tamanho.toLowerCase())
                        + " " + (!gato.nivelDeAtividade ? "" : gato.nivelDeAtividade.toLowerCase())
                        + " " + (!gato.pelagem ? "" : gato.pelagem.toLowerCase())
                        + " " + (!gato.necessidadeDeAtencao ? "" : gato.necessidadeDeAtencao.toLowerCase())
                        + " " + (!gato.companhiaOuSozinho ? "" : gato.companhiaOuSozinho.toLowerCase())
                        + " " + (!gato.idealPara ? "" : gato.idealPara.toLowerCase())
                        + " " + (!gato.pontosDeAtencao ? "" : gato.pontosDeAtencao.toLowerCase());
        for(let palavra of palavrasPesquisa){                        
        // se dadoPesquisavel includes campoPesquisa
            if (dadoPesquisavel.includes(palavra)) {
                // cria um novo elemento
                // url = buscarImagem(cachorro.id);
                resultados += `
                <div class="card">
                    <img src="/img/gato.png" alt="Imagem do pet">
                    <h2 class="gato">${gato.raca}</h2>
                    <table>
                        <tr>
                            <td>Expectativa de Vida</td>
                            <td>${(!gato.expectativaDeVida ? "?" : gato.expectativaDeVida)} anos</td>
                        </tr>
                        <tr>
                            <td>Tamanho</td>
                            <td>${gato.tamanho}</td>
                        </tr>
                        <tr>
                            <td>Peso</td>
                            <td>${gato.peso} Kg</td>
                        </tr>
                        <tr>
                            <td>Temperamento</td>
                            <td>${gato.temperamento}</td>
                        </tr>
                        <tr>
                            <td>Nível de Atividade</td>
                            <td>${gato.nivelDeAtividade}</td>
                        </tr>
                        <tr>
                            <td>Pelagem</td>
                            <td>${gato.pelagem}</td>
                        </tr>
                        <tr>
                            <td>Necessidade de Atenção</td>
                            <td>${(!gato.necessidadeDeAtencao ? "?" : gato.necessidadeDeAtencao)}</td>
                        </tr>
                        <tr>
                            <td>Companhia ou Sozinho?</td>
                            <td>${(!gato.companhiaOuSeguranca ? "?" : gato.companhiaOuSeguranca)}</td>
                        </tr>
                        <tr>
                            <td>Ideal Para</td>
                            <td>${(!gato.idealPara ? "?" : gato.idealPara)}</td>
                        </tr>
                        <tr>
                            <td>Pontos de Atenção</td>
                            <td>${(!gato.pontosDeAtencao ? "?" : gato.pontosDeAtencao)}</td>
                        </tr>
                    </table>
                </div>
            `;
            }
        }
    }

    if (!resultados) {
        resultados = "<p class=\"msg\">Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}