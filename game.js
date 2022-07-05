    var boneco = document.querySelector("div.boneco")
    var esquerda = document.querySelector("button.esquerda")
    var direita = document.querySelector("button.direita")
    var carro1 = document.querySelector("div.carro1")
    var carro2 = document.querySelector("div.carro2")
    var carro3 = document.querySelector("div.carro3")
    var carro4 = document.querySelector("div.carro4")
    var carro5 = document.querySelector("div.carro5")
    var carro6 = document.querySelector("div.carro6")
    var carro7 = document.querySelector("div.carro7")
    var carro8 = document.querySelector("div.carro8")
    var carro9 = document.querySelector("div.carro9")
    
    var quadPont = document.querySelector("div.quadPont")
    
    //Apenas para o quadro de pontos aparecer zero, antes do programa rodar
    quadPont.innerHTML = 0
    
    var estrada1 = document.querySelector("div.estrada1")
    var estrada2 = document.querySelector("div.estrada2")
    var estrada3 = document.querySelector("div.estrada3")
    var estrada4 = document.querySelector("div.estrada4")


    var xBoneco = 168
    
    var y1 = -50
    var y2 = -50
    var y3 = -50
    var y4 = -50
    var y5 = -50
    var y6 = -50
    var y7 = -50
    var y8 = -50
    var y9 = -50
    
    var meio = 430
    //400
    
    var yFinal = 507
    //507
    
    var validador1 = 0
    var validador2 = 0
    var validador3 = 0
    var validador4 = 0
    var validador5 = 0
    var validador6 = 0
    var validador7 = 0
    var validador8 = 0
    var validador9 = 0
    var EndValidador = 0
    
    var dado
    var dado1
    var dado4
    var dado7
    var valdado = 1
    
    var speed = 2
    
    var trava1 = 1
    var trava4 = 1
    var trava7 = 1
    
    var cont = 0
    var pont = 0
    
    var travaJogo = 0
    
    var contadorRoad1 = -169
    var contadorRoad2 = 0
    var contadorRoad3 = 170
    var contadorRoad4 = 338
    
    var anima

    boneco.style.left = xBoneco + "px"
    boneco.style.top = "453px"

    carro1.style.left = "38px"
    carro1.style.top = y1 + "px"

    carro2.style.left = "168px"
    carro2.style.top = y2 + "px"

    carro3.style.left = "298px"
    carro3.style.top = y3 + "px"

    carro4.style.left = "38px"
    carro4.style.top = y4 + "px"

    carro5.style.left = "168px"
    carro5.style.top = y5 + "px"

    carro6.style.left = "298px"
    carro6.style.top = y6 + "px"
    
    carro7.style.left = "38px"
    carro7.style.top = y7 + "px"
    
    carro8.style.left = "168px"
    carro8.style.top = y8 + "px"
    
    carro9.style.left = "298px"
    carro9.style.top = y9 + "px"
    
    estrada1.style.top = "-169px"
    estrada2.style.top = "0px"
    estrada3.style.top = "169px"
    estrada4.style.top = "338px"
    
    
    //testador imagem
    /*carro5.style.top = "370px"
    carro5.style.left = "168px"*/
    
    function game() {
      travaJogo = 1
      boneco.style.left = xBoneco + "px"

      if(EndValidador == 1) {
        carro1.style.top = y1 + "px"
        carro2.style.top = y2 + "px"
        carro3.style.top = y3 + "px"
        carro4.style.top = y4 + "px"
        carro5.style.top = y5 + "px"
        carro6.style.top = y6 + "px"
        carro7.style.top = y7 + "px"
        carro8.style.top = y8 + "px"
        carro9.style.top = y9 + "px"
        EndValidador = 0
      }

      if(y1 > -50) {
        validador2 = 1
      }

      if(y1 >= 200) {
        validador3 = 1
      }
      
      if(y4 >= 150) {
        validador5 = 1
        
      }
      if(y5 > -50) {
        validador6 = 1
      }
      
      if(y7 > -50) {
        validador9 = 1
      }
      if(y9 >= 150) {
        validador8 = 1
      }
      
      road()
      
      rollDado()

      val()

      mid()

      yEnd()

      colisao()
      
      speedUp()

    }

    function end() {

      cancelAnimationFrame(anima)

      y1 = -50
      y2 = -50
      y3 = -50
      y4 = -50
      y5 = -50
      y6 = -50
      y7 = -50
      y8 = -50
      y9 = -50

      xBoneco = 168

      validador1 = 0
      validador2 = 0
      validador3 = 0
      validador4 = 0
      validador5 = 0
      validador6 = 0
      validador7 = 0
      validador8 = 0
      validador9 = 0
      
      valdado = 1
      dado1 = 0
      dado4 = 0
      dado7 = 0
      
      trava1 = 1
      trava4 = 1
      trava7 = 1
      
      cont = 0
      pont = 0
      speed = 2
      
      contadorRoad1 = -169
      contadorRoad2 = 0
      contadorRoad3 = 169
      contadorRoad4 = 338
      
      travaJogo = 0
      
      EndValidador = 1
      
      //EndValidador é usado para dizer que no momento em que ouver uma colisão, os carros reiniciem a posiçao deles. Ele basicamente serve, para que isso apenas aconteça no momento de uma colisão. Sem ele, geraria um pequeno conflito dentro da função.
      
    }

    function esq() {

      if(EndValidador == 0) {
        xBoneco -= 130
        if (xBoneco < 0) {
          xBoneco = 38
        }
        boneco.style.left = xBoneco + "px"
      }
      
    }

    function dire() {

      if(EndValidador == 0) {
        xBoneco += 130
        if (xBoneco > 300) {
          xBoneco = 298
        }
        boneco.style.left = xBoneco + "px"
      }

    }
    
    function rollDado() {
      if(valdado == 1) {
        valdado = 0
        dado = Math.random()*8
        
        if(dado1 == 1 && dado <= 2) {
          while(dado <= 2) {
            dado = Math.random()*8
          }
        }
        if(dado4 == 1 && dado > 2 && dado <= 5) {
          while(dado > 2 && dado <= 5) {
            dado = Math.random()*8
          }
        }
        if(dado7 == 1 && dado > 5) {
          while(dado > 5) {
            dado = Math.random()*8
          }
        }
        
        if(dado <= 2) {
          validador1 = 1
          dado1 = 1
        }
        if(dado > 2 && dado <= 5) {
          validador4 = 1
          dado4 = 1
        }
        if(dado > 5) {
          validador7 = 1
          dado7 = 1
        }
      }
      
    }

    function val() {

      //Essa função trabalha em conjunto com a mid. Visto que a mid altera o valor do validador, e esse valida para fazer os carros se movimentarem
      
      if (validador1 == 1) {
        carro1.style.top = y1 + "px"
        y1 += speed
      }

      if (validador2 == 1) {
        carro2.style.top = y2 + "px"
        y2 += speed
        
      }

      if (validador3 == 1) {
        carro3.style.top = y3 + "px"
        y3 += speed
      }

      if (validador4 == 1) {
        carro4.style.top = y4 + "px"
        y4 += speed
      }

      if (validador5 == 1) {
        carro5.style.top = y5 + "px"
        y5 += speed
      }

      if (validador6 == 1) {
        carro6.style.top = y6 + "px"
        y6 += speed
      }
      
      if(validador7 == 1) {
        carro7.style.top = y7 + "px"
        y7 += speed
      }
      
      if(validador8 == 1) {
        carro8.style.top = y8 + "px"
        y8 += speed
      }
      
      if(validador9 == 1) {
        carro9.style.top = y9 + "px"
        y9 += speed
      }
    }

    function mid() {
      if (y1 >= meio && trava1 == 1) {
        valdado = 1
        trava1 = 0
      }

      if (y4 >= meio && trava4 == 1) {
        valdado = 1
        trava4 = 0
      }
      
      if(y7 >= meio && trava7 == 1) {
        valdado = 1
        trava7 = 0
      }
      
      //Função para controlar o tempo de ressurgimento dos carros.
    }

    function yEnd() {

      if (y1 >= yFinal) {
        y1 = -50
        validador1 = 0
        dado1 = 0
        trava1 = 1
      }

      if (y2 >= yFinal) {
        y2 = -50
        validador2 = 0
      }

      if (y3 >= yFinal) {
        y3 = -50
        validador3 = 0
      }

      if (y4 >= yFinal) {
        y4 = -50
        validador4 = 0
        dado4 = 0
        trava4 = 1
      }

      if (y5 >= yFinal) {
        y5 = -50
        validador5 = 0
      }

      if (y6 >= yFinal) {
        y6 = -50
        validador6 = 0
      }
      
      if(y7 >= yFinal) {
        y7 = -50
        validador7 = 0
        dado7 = 0
        trava7 = 1
      }
      
      if(y8 >= yFinal) {
        y8 = - 50
        validador8 = 0
      }
      
      if(y9 >= yFinal) {
        y9 = -50
        validador9 = 0
      }
      
      //Função para fazer corrocel nos carros.

    }
    function colisao() {

      if (y1 >= 403 && y1 <= 503 && xBoneco == 38 || y2 >= 403 && y2 <= 503 && xBoneco == 168 || y3 >= 403 && y3 <= 503 && xBoneco == 298 || y4 >= 403 && y4 <= 503 && xBoneco == 38 || y5 >= 403 && y5 <= 503 && xBoneco == 168 || y6 >= 403 && y6 <= 503 && xBoneco == 298 || y7 >= 403 && y7 <= 503 && xBoneco == 38 || y8 >= 403 && y8 <= 503 && xBoneco == 168 || y9 >= 403 && y9 <= 503 && xBoneco == 298) {
        end()
        
      }
      else {
        anima = requestAnimationFrame(game)
      }

    }
    
    function pontua() {
      cont += 1
      if(cont % 50 == 0){
        pont += 1
        quadPont.innerHTML = pont
      }
    }
    
    function speedUp() {
      pontua()
      
      if(pont > 50 && speed <= 3) {
        speed += 0.05
      }
      if(pont > 100 && speed <= 4) {
        speed += 0.05
      }
      if(pont > 150 && speed <= 5) {
        speed += 0.05
      }
    }
    
    function road() {
      contadorRoad1 += speed / 2
      contadorRoad2 += speed / 2
      contadorRoad3 += speed / 2
      contadorRoad4 += speed / 2
      
      if(contadorRoad1 >= 503) {
        contadorRoad1 = -169
      }
      if(contadorRoad2 >= 503) {
        contadorRoad2 = -169
      }
      if(contadorRoad3 >= 503) {
        contadorRoad3 = -169
      }
      if(contadorRoad4 >= 503) {
        contadorRoad4 = -169
      }
      estrada1.style.top = contadorRoad1 + "px"
      estrada2.style.top = contadorRoad2 + "px"
      estrada3.style.top = contadorRoad3 + "px"
      estrada4.style.top = contadorRoad4 + "px"
    }
    
    function callGame() {
      if(travaJogo == 0) {
        game()
      }
    }
    
    
    esquerda.addEventListener("touchstart", esq)
    esquerda.addEventListener("click", esq)

    direita.addEventListener("touchstart", dire)
    direita.addEventListener("click", dire)
    //touchend
    boneco.addEventListener("click", callGame)
