function calcular(){
    var txtn1 = document.getElementById("txtn1")
    var txtn2 = document.getElementById("txtn2")
    var resultado = document.getElementById("card")
    var image = document.getElementById("img")
  
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    if( n1 > 10 || n1 < 0 || n2 < 0  || n2 > 10){
        window.alert("Nota inválidas digite novamente!")
    } else {
        var media = (n1+n2)/2
        if(media >= 8){
            resultado.innerHTML = `<img src="img/avatar-passou.svg">`
            resultado.innerHTML += `<p id="media"> Média: ${media} <p>`
            resultado.innerHTML += `<p>PARABÉNS! Você passou e não fez mais que sua obrigação rsrs</p>`
            resultado.innerHTML += `<button id="voltar" value="Refresh Page" onClick="window.location.reload()"> << Retornar </button>`

        } else if ( media>= 5 && media < 8){
            var final = 10 - media
            resultado.innerHTML = `<img src="img/avatar-final.svg">`
            resultado.innerHTML += `<p id="media"> Média: ${media} <p>`
            resultado.innerHTML += `<p>IH RAPAZ! Vai precisar fazer final, não se apavore ESTUDE você precisa de <strong> ${final} pontos </strong> </p>`
            resultado.innerHTML += `<button id="voltar" value="Refresh Page" onClick="window.location.reload()"> << Retornar </button>`

        } else {
            resultado.innerHTML = `<img src="img/avatar-reprovou.svg">`
            resultado.innerHTML += `<p id="media"> Média: ${media} <p>`
            resultado.innerHTML += `<p>QUE PENA! Você reprovou, não fique triste por muito tempo e dê seu melhor na próxima.</p>`
            resultado.innerHTML += `<button id="voltar" value="Refresh Page" onClick="window.location.reload()"> << Retornar </button>`

        }
    }   
     
}