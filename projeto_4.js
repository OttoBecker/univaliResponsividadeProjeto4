var primeira_parte = null
function primeiraParte(){
        if (primeira_parte == null){
            primeira_parte = document.getElementById('primeira_parte').innerHTML = 'Hello World! Primeira parte concluída com sucesso'
        }
        else{
            primeira_parte = document.getElementById('primeira_parte').innerHTML = ''
            primeira_parte = null
        }

        // case null:
        //     primeira_parte = document.getElementById('primeira_parte').innerHTML = 'Hello World! Primeira parte concluída com sucesso'
        // case !null:
        //     primeira_parte = document.getElementById('primeira_parte').innerHTML = ''
    
    return primeira_parte
}

function somar(valor1, valor2){
    return document.getElementById('resultado').value = (parseInt(valor1) || 0) + (parseInt(valor2) || 0)
}

function alteraClass(){
   let elementos = document.getElementsByClassName('class')
   for (var index = 0; index < elementos.length; index++){
    elementos[index].style.color = 'Red'
   }
}

function alteraName(){
    let elementos = document.getElementsByName('name')
    for (var index = 0; index < elementos.length; index++){
     elementos[index].style.color = 'Blue'
    }
 }

 function alteraId(){
    document.getElementById('id').style.color = 'Green'
 }

function resetar(){
    let elementos = document.getElementsByClassName('class')
   for (var index = 0; index < elementos.length; index++){
    elementos[index].style.color = 'black'
   }
}