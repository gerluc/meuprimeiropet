// const imagemCachorro = document.getElementById('imagemCachorro');
let imagemSrc = "";
let isFetching = false;

// Função para buscar a imagem aleatória de uma raça específica
function buscarImagem(raca, isCat) {
    if (isFetching) return;

    let url = ``;
    const imagem = document.getElementById(raca);

    if(isCat){
        // isFetching = true;
        
        // url = `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`
        imagemSrc = "/img/gato.png";

        return imagemSrc;



        url = `https://api.thecatapi.com/v1/images/search?breed_ids=${raca}`
        
        const headers = new Headers({
            "Content-Type": "application/json",
            "x-api-key": "live_UthKGCZROi9gsKnN0Iju2RccqBkahxccubR2o2FRcBM2DKyuRp8TAOq3ie1gZywc"
        });
        
        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };
        
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                // let catData = JSON.parse(result);
                console.log(result);
                for(let cat of result){
                    imagemSrc = cat.url;
                }
                console.log(imagemSrc);
                imagem.src = imagemSrc;
            })
            .catch(error => console.log('error', error))
            .finally(() => {
                isFetching = false;
            });
    }
    else{
        imagemSrc = "/img/cao.png";
        url = `https://dog.ceo/api/breed/${raca}/images/random?timestamp=${Date.now()}`;
    
        isFetching = true;
        fetch(url, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        })
            .then(response => response.json())
            .then(data => {
                imagemSrc = data.message;
            })
            .catch(error => {
                console.error('Erro ao buscar imagem:', error);
            });
        
        isFetching = false;
        return imagemSrc;
    }
}

// const headers = new Headers({
//     "Content-Type": "application/json",
//     "x-api-key": "live_UthKGCZROi9gsKnN0Iju2RccqBkahxccubR2o2FRcBM2DKyuRp8TAOq3ie1gZywc"
//   });
  
//   var requestOptions = {
//     method: 'GET',
//     headers: headers,
//     redirect: 'follow'
//   };
  
//   fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));        