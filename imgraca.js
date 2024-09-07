// const imagemCachorro = document.getElementById('imagemCachorro');
let imagemCachorroSrc = "/img/cao.png";
let isFetching = false;

// Função para buscar a imagem aleatória de uma raça específica
function buscarImagem(raca) {
    if (isFetching) return;
    const url = `https://dog.ceo/api/breed/${raca}/images/random?timestamp=${Date.now()}`;

    fetch(url, {
        headers: {
            'Cache-Control': 'no-cache'
        }
    })
        .then(response => response.json())
        .then(data => {
            imagemCachorroSrc = data.message;
        })
        .catch(error => {
            console.error('Erro ao buscar imagem:', error);
        });
    
    return imagemCachorroSrc;
}

// Exemplo de uso:
// buscarImagem('beagle');