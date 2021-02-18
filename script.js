function calcular() {
  var txtn1 = document.getElementById("txtn1")
  var txtn2 = document.getElementById("txtn2")
  var resultado = document.getElementById("card")
  var image = document.getElementById("img")

  var n1 = Number(txtn1.value)
  var n2 = Number(txtn2.value)
  if (n1 > 10 || n1 < 0 || n2 < 0 || n2 > 10) {
    window.alert("Nota inválidas digite novamente!")
  } else {
    var media = (n1 + n2) / 2
    if (media >= 8) {
      resultado.innerHTML = `<img src="img/avatar-passou.svg">`
      resultado.innerHTML += `<p id="media"> Média: ${media} <p>`
      resultado.innerHTML += `<p>PARABÉNS! Você passou e não fez mais que sua obrigação rsrs</p>`
      resultado.innerHTML += `<a href="home.html" type="button" class="btn btn-secondary btn-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
              <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
            Inicio
          </a>`

    } else if (media >= 5 && media < 8) {
      var final = 10 - media
      resultado.innerHTML = `<img src="img/avatar-final.svg">`
      resultado.innerHTML += `<p id="media"> Média: ${media} <p>`
      resultado.innerHTML += `<p>IH RAPAZ! Vai precisar fazer final, não se apavore ESTUDE você precisa de <strong> ${final} pontos </strong> </p>`
      resultado.innerHTML += `<a href="home.html" type="button" class="btn btn-secondary btn-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
              <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
            Inicio
          </a>`
    } else {
      resultado.innerHTML = `<img src="img/avatar-reprovou.svg">`
      resultado.innerHTML += `<p id="media"> Média: ${media} <p>`
      resultado.innerHTML += `<p>QUE PENA! Você reprovou, não fique triste por muito tempo e dê seu melhor na próxima.</p>`
      resultado.innerHTML += `<a href="home.html" type="button" class="btn btn-secondary btn-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 13.5  V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
              <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
            Inicio
          </a>`
    }
  }

}



function enem() {
  var humanas = document.getElementById("humanas")
  var natureza = document.getElementById("natureza")
  var linguagens = document.getElementById("linguagens")
  var matematica = document.getElementById("matematica")
  var redacao = document.getElementById("redacao")

  var humanasPeso = document.getElementById("humanas-peso")
  var naturezaPeso = document.getElementById("natureza-peso")
  var linguagensPeso = document.getElementById("linguagens-peso")
  var matematicaPeso = document.getElementById("matematica-peso")
  var redacaoPeso = document.getElementById("redacao-peso")



  var id = [humanas, natureza, linguagens, matematica, redacao, humanasPeso, naturezaPeso, linguagensPeso, matematicaPeso, redacaoPeso]
  console.log(humanas.value)
  console.log(id[0].value)

  var camposPreenchidos = 0

  //Validar campos
  for (var i = 0; i < id.length; i++) {
    console.log(id[i].length)
    //campo invalido
    if (id[i].value.length == 0) {
      id[i].className = 'form-control is-invalid';
    } else { //campo valido
      id[i].className = 'form-control is-valid';
      camposPreenchidos++;
    }
  }

  var resultado = document.getElementById("card")
  var peso = Number(humanasPeso.value) + Number(naturezaPeso.value) + Number(linguagensPeso.value) +Number(matematicaPeso.value ) + Number (redacaoPeso.value)

  var soma = (Number(humanas.value) * Number(humanasPeso.value)) + Number((natureza.value) * Number(naturezaPeso.value)) + Number((linguagens.value) * Number(linguagensPeso.value))
    + (Number(matematica.value) * Number(matematicaPeso.value)) + Number((redacao.value) * Number(redacaoPeso.value))

  var media = (soma / peso).toFixed(2)

  console.log("Soma",soma)
  console.log("Peso",peso)
  console.log("Media",media)

  if (camposPreenchidos == 10) {

    resultado.innerHTML = `<img id="robo" src="img/chatbot.svg">`
    resultado.innerHTML += `<p> Pelos meus cálculos sua média do ENEM é ${media} </p>`
    resultado.innerHTML += `<a href="media-pesos.html" type="button" class="btn btn-secondary btn-lg">Retornar</a>`
  }


}

function mediaEnem() {
  var humanas = document.getElementById("humanas")
  var natureza = document.getElementById("natureza")
  var linguagens = document.getElementById("linguagens")
  var matematica = document.getElementById("matematica")
  var redacao = document.getElementById("redacao")
  var id = [humanas, natureza, linguagens, matematica, redacao]
  
  var camposPreenchidos = 0
 
  //Validar campos
  for (var i = 0; i < id.length; i++) {
    console.log(id[i].length)
    //campo invalido
    if (id[i].value.length == 0) {
      id[i].className = 'form-control is-invalid';
    } else { //campo valido
      id[i].className = 'form-control is-valid';
      camposPreenchidos++;
    }
  }

  var resultado = document.getElementById("card")

  var soma = Number(humanas.value) + Number(natureza.value) + Number(linguagens.value) 
    + Number(matematica.value)  + Number(redacao.value)

  var media = (soma / 5).toFixed(2)

  if (camposPreenchidos == 5) {
    resultado.innerHTML = `<img id="robo" src="img/chatbot.svg">`
    resultado.innerHTML += `<p> Pelos meus cálculos sua média do ENEM é ${media} </p>`
    resultado.innerHTML += `<a href="media-pesos.html" type="button" class="btn btn-secondary btn-lg">Retornar</a>`
  }


}