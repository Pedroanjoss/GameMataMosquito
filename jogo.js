var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 45;

var criaMosquitoTempo = 1500

var nível = window.location.search
nível = nível.replace('?', '')

  if (nível === 'normal') {
    var criaMosquitoTempo = 1500

    
  } else if (nível === 'difcil'){
    var criaMosquitoTempo = 1000

    
  } else if (nível === 'pesadelo'){
    var criaMosquitoTempo = 750

    
  }

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
  console.log(altura, largura);
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function() {
   tempo -= 1

   if (tempo < 0) {
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    window.location.href = 'vitoria.html'
    
   } else {
    
   }


   document.getElementById('cronometro').innerHTML = tempo
   
}, 1000);

function posicaoRandomica() {

     // remover o mosquito anterios (caso exista)
  if (document.getElementById('mosquito')) {
     document.getElementById('mosquito').remove()

     if (vidas>3) { window.location.href = 'fim_de_jogo.html'
          
     }
     else {document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
     vidas++
          }


  }

  var posicaoX = Math.floor(Math.random() * largura) - 70;
  var posicaoY = Math.floor(Math.random() * altura) - 50;
  
  posicaoX = posicaoX <= 0 ? 0 : posicaoX;
  posicaoY = posicaoY <= 0 ? 0 : posicaoY;

  console.log(posicaoX, posicaoY);

  // elemento html
  var mosquito = document.createElement('img');
  mosquito.src = 'imagens/mosca.png';
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
  mosquito.style.left = posicaoX + 'px';
  mosquito.style.top = posicaoY + 'px';
  mosquito.style.position = 'absolute';
  mosquito.id = "mosquito"
  mosquito.onclick = function () {
     this.remove()
     
  }

  document.body.appendChild(mosquito);
}

posicaoRandomica();

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3);
  
  switch (classe) {
    case 0:
      return 'mosquito1';
    case 1:
      return 'mosquito2';
    case 2:
      return 'mosquito3';
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2);
  
  switch (classe) {
    case 0:
      return 'ladoA';
    case 1:
      return 'ladoB';
  }
}
