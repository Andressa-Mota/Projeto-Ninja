const ninja = document.querySelector("#ninja")
const controle = document.querySelectorAll("[data-controle]")  //pegando todosos elementos com dataAtributs, no caso, os botoes de mais e menos
const estatisticas = document.querySelectorAll("[data-estatistica]")
var tipoOperacao = false
const  poderes  =  {

    "forca" : {
        "taijutsu" : 40 ,
        "ninjutsu" : -5 ,
        "chakra" : 0 ,
        "genjutsu" :  -20
    } ,
    "resistencia" : {
        "taijutsu" : 10 ,
        "ninjutsu" : 7 ,
        "chakra" : 10 ,
        "genjutsu" : - 10
    } ,
    "energia" : {
        "taijutsu" : 5 ,
        "ninjutsu" : 20 ,
        "chakra" : 50 ,
        "genjutsu" : 20
    } ,
    "velocidade" : {
        "taijutsu" : 30 ,
        "ninjutsu" : -10 ,
        "chakra" : 0 ,
        "genjutsu" : 0
    },
    "habilidade" : {
        "taijutsu" : 10 ,
        "ninjutsu" : 10 ,
        "chakra" : -10 ,
        "genjutsu" : 50
    }
}
ninja.addEventListener("click", ()=> {
    console.log("DATTEBAYO!")
    document.getElementById('dattebayo').play();
})

controle.forEach((elemento) => {  //foreach para a funcao rodar para todos os elemntos do array "controle"
    elemento.addEventListener("click",(evento)=>{  //pegando o evento de clique
        operacao(evento.target.dataset.controle, evento.target.parentNode)  //peganto os dados do lugar onde está ocorrendo o evento //pegando o elemento pai
        atualizaEstatisticas(evento.target.dataset.melhorias)   //buscando qual melhoria foi selecionada
        
    })

});

function operacao(tipo, elementoPai){
    const poder = elementoPai.querySelector("[data-contador]");  //buscando por data-contador no elemento pai do contador que foi clicado
    if (tipo == "+") {      //se o textContent do elemento for um + vai somar
        poder.value = parseInt (poder.value) +1;  //trasformando o valor em inteiro, depois forca = forca+1, somando o valor de força mais um
        tipoOperacao = true
    }else{
        poder.value = parseInt (poder.value) -1;
        tipoOperacao = false
    }
}
function atualizaEstatisticas (melhorias){ //passando a melhoria selecionada como parametro
     estatisticas.forEach ((elemento)=>{
        if ( tipoOperacao == true){
          elemento.textContent = parseInt(elemento.textContent) + poderes[melhorias][elemento.dataset.estatistica]      //o valor em estatisticas é somado a ele mesmo mais o valor que se encontra no array melhorias no objeto clicado e adicionado aoselemntos de estatisticas
            if(elemento.textContent>0){    
                document.getElementById("upgrade").addEventListener("click", function() {
                var imagem = document.getElementById("ninja")
                imagem.src = "/img/upgrade.gif"
        })
             }
             if(elemento.textContent==0){    
                document.getElementById("upgrade").addEventListener("click", function() {
                var imagem = document.getElementById("ninja")
                imagem.src = "/img/ninja.png"
                
            }) 
            }
        }else{
            elemento.textContent = parseInt(elemento.textContent) - poderes[melhorias][elemento.dataset.estatistica] 
            if(elemento.textContent<0){    
                document.getElementById("upgrade").addEventListener("click", function() {
            var imagem = document.getElementById("ninja")
            imagem.src = "/img/downgrade.gif"  
        })
        }
        if(elemento.textContent==0){    
            document.getElementById("upgrade").addEventListener("click", function() {
            var imagem = document.getElementById("ninja")
            imagem.src = "/img/ninja.png"
            
        }) 
        }
    }
 })

}        

  

